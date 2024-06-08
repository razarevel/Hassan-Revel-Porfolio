from django.urls import path
from .views import get_solutions, get_blogs, get_reviews, get_stacks, post_subscribers, post_msg
urlpatterns = [
    path('solutions/', get_solutions),
    path('blogs/', get_blogs),
    path('reviews/', get_reviews),
    path('stacks/', get_stacks),
    path('subscribe/', post_subscribers),
    path('messages/', post_msg)
]
