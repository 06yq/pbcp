# 用户注册
from audioop import reverse

from django.http import HttpResponseRedirect
from django.shortcuts import render
from django.contrib import auth


def login(request):
    return render(request,'login.html')
def index(request):
    return render(request, 'index.html')
    # try:
    #     account = request.session['name']
    #     return render(request, 'index.html', {'account': account})
    # except:
    #     return render(request, 'login.html', {'message': '请登陆'})
#退出登陆
def logout_user(request):
    auth.logout(request)
    return HttpResponseRedirect('/login')
def pbEquList(request):
    return render(request,'pbEquList.html')
def pbInfoList(request):
    return render(request,'pbcpInfo.html')
