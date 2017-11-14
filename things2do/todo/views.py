from django.shortcuts import render
from django.http import Http404
from todo.models import  *

# Create your views here.


def home(request):
    allTask = todo_lists.objects.all()
    return render(request, 'home.html', {'alltsk': allTask})

def addtask(request):
    duedt = request.POST['nDateProvider']
    detail = request.POST['nTaskDetails']
    obj_todolist = todo_lists(todo_duedt=duedt, todo_detail=detail)
    obj_todolist.save()
    allTask = todo_lists.objects.all()
    return render(request, 'home.html', {'alltsk': allTask})


