from django.shortcuts import render,HttpResponse,redirect
import json,random
from .models import Feedback,ReportIssue,TodaysNews,News
from datetime import datetime 
from .webscrapper import WebScrapper
from .TrainingModel.AuthenticityChecker import AuthenticityChecker,Prediction
from threading import Timer
from FakeNewsDetectionBackend.settings import IsThreadStarted
from .TrainingModel.trainer import TrainModel
from django.contrib.auth.decorators import login_required
import pandas as pd
from googletrans import Translator,LANGCODES

# Create your views here.
configuration={
    "10":"Unauthentic",
    "30":"Likely Unauthentic",
    "60":"Possibly Unauthentic",
    "95":"Likely Authentic",    
    "100":"Authentic"
    
}
def AddTodayNewsIfNotExists():
    global IsThreadStarted
    if IsThreadStarted:
        return
    IsThreadStarted=True
    today=datetime.today().date()
    if not TodaysNews.objects.filter(date=today).exists():
        TodaysNews.objects.create()
        scrapper=WebScrapper()
        data:News
        predictor=Prediction()
        #add todays news 
        fakenews=News.objects.filter(isfake=True)
        fakenew=fakenews[random.randint(0,fakenews.count())]
        for data in scrapper.lists:
            News.objects.create(description=predictor.getPurified(data.description),source=data.source)
            News.objects.create(description=fakenew.description,source=data.source,isfake=True)
        IsThreadStarted=False
        TrainModel().trainModel()
    
def MainPage(request):
    #checking and add today news
    Timer(10,AddTodayNewsIfNotExists).start()
    return render (request, "index.html")
@login_required
def Download(request):
    #checking and add today news
    return render (request, "download.html")

def ResultPage(request):
    translater=Translator()
    #checking and add today news
    Timer(10,AddTodayNewsIfNotExists).start()
    if not request.GET.get("q"):
        return render (request,"searchreasult.html")
    query=request.GET.get("q")
    source=translater.detect(query)
    translated=translater.translate(query, dest="ne").text
    if isinstance(translated,str):
        status=AuthenticityChecker().check(translated)
    else:
        status=AuthenticityChecker().check(query)
    authentic=""
    previous=0
    for key,value in configuration.items():
        if status<int(key) and status>previous:
            authentic=value
        previous=int(key)
    #furhter handling from model trainer to search reasult and get result to render to the dom
    try:
        return render (request,"searchreasult.html",{"status":translater.translate(authentic,dest=source.lang).text,"searchfor":query, "percentage":status})
    except:
        return render (request,"searchreasult.html",{"status":authentic,"searchfor":query, "percentage":status})
def GetReviews(request):
    lists=[]
    for feedback in Feedback.objects.all():
        lists.append({
            "reviews":feedback.reviews,
            "message":feedback.message,
            "Username":feedback.user.first_name+" "+feedback.user.last_name
        })
    return HttpResponse(json.dumps(lists))

def ResultForExtension(request):
    translater=Translator()
    #checking and add today news
    Timer(10,AddTodayNewsIfNotExists).start()
    if request.method=="POST":
        query=request.POST["content"]
        #further process from model 
        source=translater.detect(query)
        translated=translater.translate(query, dest="ne").text
        if isinstance(translated,str):
            status=AuthenticityChecker().check(translated)
        else:
            status=AuthenticityChecker().check(query)
        authentic=""
        previous=0
        for key,value in configuration.items():
            if status<int(key) and status>previous:
                authentic=value
            previous=int(key)
        return HttpResponse(json.dumps({
            "authentic":translater.translate(authentic,dest=source.lang).text,
            "accuracy":status,
            "searchfor":query
            }),content_type="application/json")
    return HttpResponse(json.dumps({
        "status":False
    }),content_type="application/json")
def FeedbackPage(request):
    if request.method=="POST":
        #checking for user authentication
        if request.user.is_authenticated:
            message=request.POST.get("message")
            print(message,request.POST)
            if message:
                review=request.POST.get("review")
                feedback=Feedback(user=request.user,message=message,reviews=review)
                feedback.save()
            return HttpResponse(json.dumps({
                "status":True
            }),content_type="application/json")
        else:
            return HttpResponse(json.dumps({
                "authentication":True,
                "status":False
            }),content_type="application/json")
    #response when invalid/(other then post) 
    return HttpResponse("Invalid Request ", content_type="text/html", status=400)
def ReportIssuePage(request):
    if request.method=="POST":
        #checking for user authentication
        if request.user.is_authenticated:
            message=request.POST.get("message")
            issue=ReportIssue(user=request.user,message=message)
            issue.save()
            return HttpResponse(json.dumps({
                "status":True
            }),content_type="application/json")
        else:
            return HttpResponse(json.dumps({
                "authentication":True,
                "status":False
            }),content_type="application/json")
    #response when invalid/(other then post) 
    return HttpResponse("Invalid Request ", content_type="text/html", status=400)
