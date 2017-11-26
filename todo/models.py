from django.db import models


# Create your models here.

class todo_lists(models.Model):
    todo_crtdt = models.DateTimeField(auto_now_add=True)
    todo_detail = models.CharField(max_length=100)
    todo_duedt = models.DateTimeField()
    todo_complete = models.BooleanField(default=False)
