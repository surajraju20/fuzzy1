from django.db import models


# Create your models here.

class College(models.Model):
    c_name = models.CharField(max_length=100)
    c_location = models.CharField(max_length=100)
    c_address = models.TextField()


class Trainer(models.Model):
    t_name = models.CharField(max_length=100)
    acc_no = models.IntegerField()
    ifsc = models.CharField(max_length=100)
    pan = models.CharField(max_length=100)
    bank_name = models.CharField(max_length=100)
    phone_number = models.BigIntegerField()
    email_id = models.EmailField(max_length=250)
    t_location = models.CharField(max_length=100)


class hr_users(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
