from django.db import models
from django.contrib.auth.models import User 
# Create your models here.
class Feedback(models.Model):
    user = models.ForeignKey(User,related_name="feedbacks", on_delete=models.CASCADE)
    reviews=models.IntegerField(default=5)
    message=models.TextField()
class ReportIssue(models.Model):
    user = models.ForeignKey(User,related_name="issues", on_delete=models.CASCADE)
    message=models.TextField()

