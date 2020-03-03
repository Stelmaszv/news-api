from .models import news;
from .serializer import NewsSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import  APIView
class get_category(APIView):
    def get(self,request, *args, **kwargs):
        category = self.kwargs.get("category")
        queryset= news.objects.filter(type__name=category)
        serializer=NewsSerializer(queryset,many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
class get_news(APIView):
    def get(self,request, *args, **kwargs):
        id = self.kwargs.get("id")
        queryset = news.objects.filter(id=id)
        serializer = NewsSerializer(queryset, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)