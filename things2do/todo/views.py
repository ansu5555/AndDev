from django.shortcuts import render
from django.http import Http404
from todo.models import  *

# Create your views here.


def home(request):
    allTask = todo_lists.objects.all()
    return render(request, 'home.html', {'alltsk': allTask})

