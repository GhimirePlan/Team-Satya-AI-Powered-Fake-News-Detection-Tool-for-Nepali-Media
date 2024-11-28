from .views import Login,Register
from django.urls import path
urlpatterns = [
    path("login", Login,name='login'),
    path("register", Register,name='login'),
]