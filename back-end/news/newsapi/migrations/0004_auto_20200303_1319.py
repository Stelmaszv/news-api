# Generated by Django 3.0.3 on 2020-03-03 12:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newsapi', '0003_news_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='news',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
    ]
