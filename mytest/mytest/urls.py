from django.contrib import admin
from django.urls import path,include
from .import views
urlpatterns = [
    path('polls/', include('polls.urls')),
    path('login/', views.login),
    path('logout/', views.logout_user),
    path('', views.index),
    path('pbEquList.html/', views.pbEquList),
    path('pbcpInfo.html/', views.pbInfoList),

]
