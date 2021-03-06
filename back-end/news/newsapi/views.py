from .models import news;
from .serializer import NewsSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import  APIView
from rest_framework.permissions import IsAuthenticated
class prototype_api(APIView):
    def get(self,request, *args, **kwargs):
        argument = self.kwargs.get(self.get_atrybut)
        if self.get_one:
            queryset= news.objects.filter(id=argument)
        else:
            queryset= news.objects.filter(type__name=argument).order_by(self.order_by)[:self.limit]
        serializer=NewsSerializer(queryset,many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)
class get_category(prototype_api):
    get_atrybut="category"
    order_by='-views'
    limit=5
    get_one=False
class get_all_in_category(prototype_api):
    get_atrybut="category"
    order_by='-views'
    limit=100
    get_one=False
class get_news(prototype_api):
    get_atrybut="id"
    get_one=True
class ifAuth(APIView):
    permission_classes = [IsAuthenticated]
    def post(self, request):
        content = {'message': 'Hello, World!'}
        return Response(content)
class addNews(APIView):
    def post(self,request):
        print(request.POST)
        new=news()
        serializer = NewsSerializer(new, many=True)
        print(serializer)
        content = request.POST
        return Response(content)