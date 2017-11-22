from django.shortcuts import render
from django.http import Http404, HttpResponse, HttpResponseRedirect
from todo.models import  *

# Create your views here.


def home(request):
    allTask = todo_lists.objects.all()
    return render(request, 'home.html', {'alltsk': allTask})


def addtask(request):
    if request.method == 'POST':
        obj_todolist = todo_lists(todo_duedt=request.POST['nDateProvider'], todo_detail=request.POST['nTaskDetails'])
        obj_todolist.save()
    return HttpResponseRedirect('/')


def tskcmplt(request):
    if request.POST['nSelector']=='edt':
        obj_tskdtl = todo_lists.objects.get(id=request.POST['nIdentifier'])
        obj_tskdtl.todo_complete = request.POST['nValue']
        obj_tskdtl.save()
    else:
        todo_lists.objects.get(id=request.POST['nIdentifier']).delete()
    return HttpResponse('')

