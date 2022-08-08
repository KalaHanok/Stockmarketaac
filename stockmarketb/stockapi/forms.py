from django import forms
from .models import StockSymbol
class UserForm(forms.ModelForm):
    class Meta:
        model=StockSymbol
        fields='__all__'