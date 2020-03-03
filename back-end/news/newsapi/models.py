from django.db import models
class type(models.Model):
    name = models.CharField(max_length=150)
    def __str__(self):
        return self.name;
class news(models.Model):
    title = models.CharField(max_length=150)
    type = models.ForeignKey(type, on_delete=models.SET_NULL, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    def __str__(self):
        return self.title;