from django.db import models

# Create your models here.


class solutions(models.Model):
    img = models.CharField(max_length=255)
    name = models.CharField(max_length=255)


class blogs(models.Model):
    img = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
