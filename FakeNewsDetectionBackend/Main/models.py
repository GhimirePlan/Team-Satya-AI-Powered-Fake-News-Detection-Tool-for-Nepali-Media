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

class News(models.Model):
    # title=models.TextField()
    description=models.TextField()
    source=models.CharField(max_length=255)
    isfake=models.BooleanField(default=False)
    
    def __str__(self) -> str:
        return self.source
class TodaysNews(models.Model):
    date=models.DateField(auto_now_add=True)
    def __str__(self) -> str:
        return self.date.strftime(f"%d/%m/%Y")