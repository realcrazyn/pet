from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Product, Category
from .serializers import ProductSerializer, CategorySerializer


class ProductList(APIView):
    def get(self, request):
        products_list = Product.objects.all()
        serializer = ProductSerializer(products_list, many=True)
        return Response(serializer.data)

    def post(self, request):
        # {"serach_value":"","categories":[]}
        search_value = request.POST.get('serach_value')
        categories = request.POST.get('categories')
        if not search_value and not categories:
            products_list = Product.objects.all()
            serializer = ProductSerializer(products_list, many=True)
            return Response(serializer.data)

        if categories:
            # todo: если исходная строка вида 'cat1 ,cat2', то не найдет по имени 'cat1 ' из-за пробела.
            #  переделать поиск по id категории.
            categories = categories.split(',')
            products_list = Product.objects.filter(category__name__in=categories)
            serializer = ProductSerializer(products_list, many=True)
            return Response(serializer.data)

        if search_value:
            # todo: реализовать поиск по имени? продукта
            products_list = Product.objects.all()
            serializer = ProductSerializer(products_list, many=True)
            return Response(serializer.data)

        return Response(request.data, status=status.HTTP_201_CREATED)

        # if serializer.is_valid():
        #     serializer.save()
        #     return Response(serializer.data, status=status.HTTP_201_CREATED)
        # return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class CategoryList(APIView):
    def get(self, request):
        category_list = Category.objects.all()
        serializer = CategorySerializer(category_list, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = CategorySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
