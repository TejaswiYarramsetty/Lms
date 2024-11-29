# Generated by Django 5.1.2 on 2024-11-21 07:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('newapp', '0002_alter_teacher_confirm_password_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='courseImage',
            field=models.ImageField(null=True, upload_to='course_imgs/'),
        ),
        migrations.AddField(
            model_name='course',
            name='techs',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='course_categories',
            name='Course_description',
            field=models.TextField(max_length=100),
        ),
    ]
