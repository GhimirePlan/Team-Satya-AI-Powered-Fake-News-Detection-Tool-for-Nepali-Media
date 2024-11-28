from django.contrib import admin
from .models import Feedback,ReportIssue
# Register your models here.
admin.site.register([Feedback,ReportIssue])
