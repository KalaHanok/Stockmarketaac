"""stockmarketb URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from stockapi import views
urlpatterns = [
    path('admin/', admin.site.urls),
    path('stock/',views.Stock,name="stock"),
    path('ticker/',views.Symbols,name='symbol'),
    path('test/<int:rag>/',views.test,name='test'),
    path('search/',views.Search,name="search"),
    path('stockdetails/<str:id>/',views.Basic_details,name="basic_details"),
    path('stockapiKey/',views.Apikey,name="apikey"),
]
