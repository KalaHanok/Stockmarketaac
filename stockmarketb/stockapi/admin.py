from django.contrib import admin
from .models import StockSymbol
# Register your models here.
@admin.register(StockSymbol)
# Register your models here.
class StudentAdmin(admin.ModelAdmin):
    list_display=['symbol','shortName','longName','exchange','market','quoteType']