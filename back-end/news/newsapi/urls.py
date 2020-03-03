from django.urls import path
from rest_framework import routers
from .views import (get_category)
app_name = 'news'
urlpatterns = [
    path('get/<str:category>/',get_category.as_view(),name='news'),
]