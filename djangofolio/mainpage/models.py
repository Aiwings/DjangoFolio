from django.db import models

# Create your models here.
class  SBlock(models.Model):
    name: models.CharField(max_length=50)
    slug:models.CharField(max_length=50)
    content:models.TextField()

class SImage(models.Model):
    name=models.CharField(max_length=30)
    alternate_text= models.CharField(max_length=100);
    description=models.CharField(max_length=255)
    image = models.ImageField(upload_to='media/%Y/%m/%d/')