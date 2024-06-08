from rest_framework import serializers

from .models import solutions, blogs, reviews, stacks, subscriber, messages


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


class subcriberSerializer(serializers.ModelSerializer):
    class Meta:
        model = subscriber
        fields = "__all__"


class messageSerializer(serializers.ModelSerializer):
    class Meta:
        model = messages
        fields = "__all__"
