from rest_framework import serializers

from .models import solutions, blogs, reviews, stacks


class SolutionSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = solutions
        fields = "__all__"


class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = blogs
        fields = "__all__"


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = reviews
        fields = "__all__"


class StackSerializer(serializers.ModelSerializer):
    class Meta:
        model = stacks
        fields = "__all__"
