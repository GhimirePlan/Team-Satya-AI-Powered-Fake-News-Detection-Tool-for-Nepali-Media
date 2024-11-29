from django.shortcuts import render,redirect,HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import login,authenticate,logout
from django.contrib.auth.password_validation import validate_password
# Create your views here.
def logoutPage(request):
    if request.method=="POST":
        logout(request)
        return redirect("login")
    return HttpResponse("Failed")
def Login(request):
    if request.user.is_authenticated:
        return redirect("/")
    error=''
    if request.method=="POST":
        username=request.POST["username"]
        password=request.POST["password"]
        user=authenticate(username=username,password=password)
        if user:
            login(request,user)
            if request.GET.get("next"):
                return redirect(request.GET.get("next"))
            return redirect("/")
            
        else:
            if not User.objects.filter(username=username).exists():
                error="Account is not found.."
            else:
                error="Invalid Credentials"

    return render(request,"login.html",{"error":error})
def Register(request):
    if request.user.is_authenticated:
        return redirect("/")
    errors={
        "username":"",
        "first_name":"",
        "last_name":"",
        "email":"",
        "password":"",
        "password_conf":"",
    }
    if request.method=="POST":
        username=request.POST["username"]
        email=request.POST["email"]
        first_name=request.POST["first_name"]
        last_name=request.POST["username"]
        password=request.POST["password"]
        password_conf=request.POST["password_conf"]
        user=User(username=username,email=email,password=password,first_name=first_name,last_name=last_name)
        if User.objects.filter(username=username).exists():
            errors['username']='Username already exists.'
        else:
            if User.objects.filter(email=email).exists():
                errors['email']="Email already exists"
            else:
                try:
                    validate_password(password,user)
                    if password==password_conf:
                        user.save()
                        login(request,user)
                        return redirect("/")
                    else:
                        errors['password_conf']="Both password must match"
                except Exception as e:
                    errors['password']=str(e)
    print(errors)
    return render(request,'register.html', errors)

        
