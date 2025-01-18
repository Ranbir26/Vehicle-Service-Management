from django.db import models

# Create your models here.
class Component(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    description = models.TextField()


class Vehicle(models.Model):
    vin = models.CharField(max_length=17)
    issue_description = models.TextField()
    repair_requirements = models.TextField()

class Repair(models.Model):
    vehicle = models.ForeignKey(Vehicle, on_delete=models.CASCADE)
    components = models.ManyToManyField(Component)
    labor_cost = models.DecimalField(max_digits=10, decimal_places=2)
