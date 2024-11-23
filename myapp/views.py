from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def about(request):
    return render(request, 'myapp/about.html')

def contact(request):
    return render(request, 'myapp/contact.html')

def index(request):
    return render(request, 'myapp/index.html')

def library(request):
    return render(request, 'myapp/library.html')

def prediction(request):
    return render(request, 'myapp/prediction.html')

def services(request):
    return render(request, 'myapp/services.html')

def landing(request):
    return render(request, 'myapp/landing.html')

def newsletter_signup(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        # Handle email saving (e.g., saving to the database)
        # You can add your subscription logic here.
        return HttpResponse("Thank you for subscribing!")
    return render(request, 'your_template_name.html')