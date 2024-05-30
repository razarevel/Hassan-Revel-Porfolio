from django.urls import path
from .views import get_solutions, get_blogs, get_reviews, get_stacks
urlpatterns = [
    path('solutions/', get_solutions),
    path('blogs/', get_blogs),
    path('reviews/', get_reviews),
    path('stacks/', get_stacks),

]
