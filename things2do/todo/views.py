from django.shortcuts import render, render_to_response
from django.template import loader, Context, RequestContext
from django.http import Http404


# Create your views here.


def home(request):
    return render_to_response('home.html')