from django.shortcuts import render,redirect
from django.contrib.auth.models import User
from django.contrib.auth import login,authenticate
from django.contrib.auth.password_validation import validate_password
# Create your views here.
def Login(request):
    error=''
    if request.method=="POST":
        username=request.POST["username"]
        password=request.POST["password"]
        user=authenticate(username=username,password=password)
        if user:
            login(request,user)
            return redirect("/")
            
        else:
            if not User.objects.filter(username=username).exists():
                error="Account is not found.."
            else:
                error="Invalid Credentials"

    return render(request,"login.html",{"error":error})


        
