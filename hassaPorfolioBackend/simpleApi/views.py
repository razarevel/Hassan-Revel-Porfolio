from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.pagination import PageNumberPagination

from .serializes import SolutionSerializer, BlogSerializer, ReviewSerializer, StackSerializer
from .models import solutions, blogs, reviews, stacks
# Create your views here


# @api_view()
# def get_solutionsAll(request):
#     data = solutions.objects.all()
#     serializer = SolutionSerializer(data, many=True)
#     return Response(serializer.data)


@api_view()
def get_solutions(request):
    solutions_query = solutions.objects.all()
    url_contains_page = '?page' in request.build_absolute_uri()
    if url_contains_page:
        paginator = PageNumberPagination()
        paginator.page_size = 6  # Set the number of items per page

    # Get solutions queryset

    # Paginate the queryset
        result_page = paginator.paginate_queryset(solutions_query, request)

    # Serialize paginated data
        serializer = SolutionSerializer(result_page, many=True)

    # Return paginated response
        return paginator.get_paginated_response(serializer.data)
    else:
        serializer = SolutionSerializer(solutions_query, many=True)
        return Response(serializer.data)


@api_view()
def get_blogs(request):
    blogs_query = blogs.objects.all()
    url_contains_page = '?page' in request.build_absolute_uri()
    if url_contains_page:
        paginator = PageNumberPagination()
        paginator.page_size = 6  # Set the number of items per page

    # Get solutions queryset

    # Paginate the queryset
        result_page = paginator.paginate_queryset(blogs_query, request)

    # Serialize paginated data
        serializer = BlogSerializer(result_page, many=True)

    # Return paginated response
        return paginator.get_paginated_response(serializer.data)
    else:
        serializer = BlogSerializer(blogs_query, many=True)
        return Response(serializer.data)


@api_view()
def get_reviews(request):
    reviews_query = reviews.objects.all()
    url_contains_page = '?page' in request.build_absolute_uri()
    if url_contains_page:
        paginator = PageNumberPagination()
        paginator.page_size = 6  # Set the number of items per page

    # Get solutions queryset

    # Paginate the queryset
        result_page = paginator.paginate_queryset(reviews_query, request)

    # Serialize paginated data
        serializer = ReviewSerializer(result_page, many=True)

    # Return paginated response
        return paginator.get_paginated_response(serializer.data)
    else:
        serializer = ReviewSerializer(reviews_query, many=True)
        return Response(serializer.data)


@api_view()
def get_stacks(request):
    data = stacks.objects.all()
    serializer = StackSerializer(data, many=True)
    return Response(serializer.data)
