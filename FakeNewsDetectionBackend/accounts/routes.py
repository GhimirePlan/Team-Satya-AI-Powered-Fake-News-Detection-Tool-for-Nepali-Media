from .views import Login
from django.urls import path
urlpatterns = [
    path("login", Login,name='login')
]