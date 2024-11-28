from .views import MainPage
from django.urls import path

urlpatterns = [
    path("",MainPage,name="index"),
]