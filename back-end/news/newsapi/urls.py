from django.urls import path
from rest_framework import routers
from .views import (get_category,get_news)
app_name = 'news'
urlpatterns = [
    path('getAll/<str:category>/',get_category.as_view(),name='news'),
    path('get/<int:id>/',get_news.as_view(),name='news'),
]