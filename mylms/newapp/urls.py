from django.urls import path
from . import views
urlpatterns=[
    path('teachers/',views.TeacherList.as_view()),
    path('teacher/<int:pk>/',views.TeacherDetails.as_view()),
    path('teacher-login',views.teacher_login),

     


    path('categories/',views.CategoryList.as_view()),

    path('course/',views.CourseList.as_view()),

    path('Student/',views.StudentList.as_view()),
    path('Login',views.login_view)

]