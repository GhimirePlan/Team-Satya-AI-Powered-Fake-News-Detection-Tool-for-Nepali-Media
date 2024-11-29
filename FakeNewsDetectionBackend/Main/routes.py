from .views import MainPage,ReportIssuePage,FeedbackPage,ResultForExtension,ResultPage,GetReviews,Download
from django.urls import path
 
urlpatterns = [
    path("",MainPage,name="index"),
    path("report_issue",ReportIssuePage,name="issue"),
    path("send_feedback",FeedbackPage,name="feedback"),
    path("search_result",ResultPage,name="search"),
    path("download/",Download,name="download"),
    path("getReviews",GetReviews,name="reviews"),
    path("tos",ResultPage,name="tos"),
    path("search_for_extension", ResultForExtension,name="e_result")
]