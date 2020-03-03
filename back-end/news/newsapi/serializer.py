from .models import news;
from rest_framework.serializers import  ModelSerializer
class NewsSerializer(ModelSerializer):
    class Meta:
        model = news;
        fields= '__all__'