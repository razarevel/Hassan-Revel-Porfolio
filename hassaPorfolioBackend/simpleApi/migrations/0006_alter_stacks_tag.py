# Generated by Django 5.0.6 on 2024-05-29 08:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('simpleApi', '0005_stacks'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stacks',
            name='tag',
            field=models.CharField(choices=[('D', 'Data'), ('DP', 'Data Processing'), ('M', 'Middle'), ('MT', 'Model Training'), ('ECD', 'Edge and Cloud Deployment')], max_length=5),
        ),
    ]