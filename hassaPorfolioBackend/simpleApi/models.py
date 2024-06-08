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
    stackTags = [
        ('D', 'Data'),
        ('DP', 'Data Processing'),
        ('M', 'Middle'),
        ('MT', 'Model Training'),
        ('ECD', 'Edge and Cloud Deployment')
    ]
    img = models.CharField(max_length=255)
    name = models.CharField(max_length=255)
    tag = models.CharField(max_length=5, choices=stackTags)


class subscriber(models.Model):
    email = models.CharField(max_length=255, unique=True)
    aiNews = models.BooleanField(default=False)
    aiTips = models.BooleanField(default=False)
    aiUpdates = models.BooleanField(default=False)


class messages(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.CharField(max_length=255, unique=False)
    phone = models.PositiveIntegerField()
    dial_code = models.CharField(max_length=244)
    country = models.CharField(max_length=222)
    msg = models.TextField(default='')
