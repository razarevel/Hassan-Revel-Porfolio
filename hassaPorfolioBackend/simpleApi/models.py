from django.db import models

# Create your models here.


class solutions(models.Model):
    img = models.CharField(max_length=255)
    name = models.CharField(max_length=255)


class blogs(models.Model):
    img = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    link = models.CharField(max_length=255, null=True)
    date = models.DateField(auto_now=True)


class reviews(models.Model):
    img = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    review = models.TextField()
    title = models.CharField(max_length=255, default='Researcher')

class stacks(models.Model):
    img = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    tag =  models.CharField(max_length=255)