from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=140, unique=True)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=140)
    description = models.TextField()
    price = models.FloatField(default=0.0)
    quantity = models.IntegerField(default=0)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f'{self.name} , price = {self.price}, quantity = {self.quantity}, category = {self.category}'
