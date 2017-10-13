from django.conf.urls import url

from mass import views

urlpatterns = [
    url(r'', views.AppView.as_view()),
]
