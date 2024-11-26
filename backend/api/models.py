from django.db import models

# Create your models here.
class ShowListProduct(models.Model):
    image = models.FileField(upload_to='showlistproduct/')
    name = models.CharField(max_length=50)
    link = models.CharField(max_length=50)