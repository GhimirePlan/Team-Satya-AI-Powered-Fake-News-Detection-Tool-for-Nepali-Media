from .views import Login,Register,logoutPage
from django.urls import path
urlpatterns = [
    path("login/", Login,name='login'),
    path("logout", logoutPage,name='logout'),
    path("register", Register,name='register'),
]