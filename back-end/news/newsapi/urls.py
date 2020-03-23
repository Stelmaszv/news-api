from django.urls import path
from rest_framework import routers
from .views import (get_category,get_news,get_all_in_category,ifAuth,addNews)
from rest_framework_simplejwt import views as jwt_views
app_name = 'news'
urlpatterns = [
    path('addnews/',addNews.as_view(),name='addnews'),
    path('getCategory/<str:category>/',get_category.as_view(),name='news'),
    path('get/<int:id>/',get_news.as_view(),name='news'),
    path('getAll/<str:category>/',get_all_in_category.as_view(),name='news'),
    path('ifAuth/',ifAuth.as_view(),name='news'),
]