# Generated by Django 5.1.2 on 2024-11-14 06:06

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Course_categories',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Title', models.CharField(max_length=100)),
                ('Course_description', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name': 'Course_categories',
                'verbose_name_plural': '2.Course_categories',
            },
        ),
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=100)),
                ('last_name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('password', models.CharField(max_length=20)),
                ('confirm_password', models.CharField(max_length=20)),
                ('select_course', models.CharField(max_length=100)),
            ],
            options={
                'verbose_name': 'Student',
                'verbose_name_plural': '3.Student',
            },
        ),
        migrations.CreateModel(
            name='Teacher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('full_name', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('password', models.CharField(max_length=20)),
                ('confirm_password', models.CharField(max_length=10)),
                ('subject', models.CharField(max_length=100)),
                ('experience', models.CharField(max_length=3)),
            ],
            options={
                'verbose_name': 'Teacher',
                'verbose_name_plural': '1.Teachers',
            },
        ),
        migrations.CreateModel(
            name='Course',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Title', models.CharField(max_length=100)),
                ('Course_description', models.TextField()),
                ('Categories', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='newapp.course_categories')),
                ('Teacher', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, to='newapp.teacher')),
            ],
            options={
                'verbose_name': 'Course',
                'verbose_name_plural': '4.Courses',
            },
        ),
    ]
