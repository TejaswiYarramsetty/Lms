from rest_framework import serializers
from . import models

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Teacher
        fields=['full_name','email','password','confirm_password','subject','experience']
    

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model=models.Student
        fields=['first_name','last_name','email','password','confirm_password','select_course']


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
       model=models.Course_categories
       fields=['id','Title','Course_description']

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
       model=models.Course
       #fields = '_all_' 
       fields=['id','Categories','Title','Course_description','courseImage','techs']



    