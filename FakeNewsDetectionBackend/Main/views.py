from django.shortcuts import render,HttpResponse
import json
from .models import Feedback,ReportIssue
# Create your views here.
def MainPage(request):
    return render (request, "index.html")

def ResultPage(request):
    if not request.GET.get("q"):
        return render (request,"error_404.html")
    query=request.GET.get("q")
    #furhter handling from model trainer to search reasult and get result to render to the dom
    return render (request,"searchreasult.html",{})
def ResultForExtension(request):
    if request.method=="POST":
        query=request.POST["content"]
        #further process from model 
        context={}
        return HttpResponse(json.dumps(context),content_type="application/json")
    return HttpResponse(json.dumps({
        "status":False
    }),content_type="application/json")
def FeedbackPage(request):
    if request.method=="POST":
        #checking for user authentication
        if request.user.is_authenticated:
            message=request.POST.get("message")
            feedback=Feedback(user=request.user,message=message)
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
