from django.contrib import admin
from .models import College, Trainer, hr_users
# Register your models here.

admin.site.register(College)
admin.site.register(Trainer)
admin.site.register(hr_users)