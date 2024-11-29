from django.contrib import admin
from .models import Feedback,ReportIssue,TodaysNews,News
# Register your models here.
admin.site.register([Feedback,ReportIssue,TodaysNews,News])
