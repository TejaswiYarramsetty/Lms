import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api';

function AC() {
  const [formData, setFormData] = useState({
    Categories: '',
    
    Title: '',
    Course_description: '',
    courseImage: null,
    techs: '',
  });
  const [categories, setCategories] = useState([]); // Store fetched categories
  
  const [imagePreview, setImagePreview] = useState(null);
  const [errors, setErrors] = useState({});
  

  // Fetch available categories and teachers on component mount
  useEffect(() => {
    axios
      .get(`${baseUrl}/categories/`)
      .then((res) => setCategories(res.data))
      .catch((error) => console.error('Error fetching categories:', error));

   
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files && name === 'courseImage') {
      const file = files[0];
      const fileType = file.type.split('/')[0]; // Ensure it's an image file

      if (fileType !== 'image') {
        setErrors((prev) => ({
          ...prev,
          courseImage: 'Please upload a valid image file',
        }));
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);

      setFormData((prev) => ({ ...prev, [name]: file }));
      setErrors((prev) => ({ ...prev, courseImage: '' })); // Clear previous errors
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));

     
    }
  };

  const validateForm = () => {
    const formErrors = {};
    if (!formData.Categories) formErrors.Categories = 'Category is required';
    
    if (!formData.Title) formErrors.Title = 'Title is required';
    if (!formData.Course_description) formErrors.Course_description = 'Description is required';
    if (!formData.courseImage) formErrors.courseImage = 'Course Image is required';
    if (!formData.techs) formErrors.techs = 'Technologies are required';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      console.log('Submitting form with data:', formData);

      const _formData = new FormData();
      _formData.append('Categories', formData.Categories); // Pass category ID
      
      _formData.append('Title', formData.Title);
      _formData.append('Course_description', formData.Course_description);
      _formData.append('courseImage', formData.courseImage, formData.courseImage.name);
      _formData.append('techs', formData.techs);

      axios
        .post(`${baseUrl}/course/`, _formData, {
          headers: {
            'content-type': 'multipart/form-data',
          },
        })
        .then((res) => {
          console.log('Course added successfully:', res.data);
          setErrors({});
          setFormData({
            Categories: '',
            
            Title: '',
            Course_description: '',
            courseImage: null,
            techs: '',
          });
          setImagePreview(null); // Reset image preview
        })
        .catch((error) => {
          console.error(
            'Submission Error:',
            error.response ? error.response.data : error.message
          );
          if (error.response && error.response.data) {
            setErrors((prev) => ({ ...prev, ...error.response.data }));
          }
        });
    } else {
      console.log('Validation errors:', formErrors);
    }
  };

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Dashboard</h5>
              <ul className="nav flex-column">
                <li className="nav-item">
                  <Link className="nav-link" to="/TDB/mycourses">
                    My Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/TDB/addcourses">
                    Add Courses
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/TDB/myusers">
                    My Users
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/TDB/PS">
                    Profile Setting
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/TDB/CP">
                    Change Password
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger" to="/logout">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Add Courses Form */}
        <div className="col-md-9">
          <div className="card">
            <div className="card-header">
              <h3>Add Course</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Categories</label>
                  <select
                    name="Categories"
                    value={formData.Categories}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="">Select Category</option>
                    {categories.map((Category) => (
                      <option key={Category.id} value={Category.id}>
                        {Category.name}
                      </option>
                    ))}
                  </select>
                  {errors.Categories && <p className="text-danger">{errors.Categories}</p>}
                </div>

                

                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    name="Title"
                    value={formData.Title}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.Title && <p className="text-danger">{errors.Title}</p>}
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    name="Course_description"
                    value={formData.Course_description}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.Course_description && (
                    <p className="text-danger">{errors.Course_description}</p>
                  )}
                </div>

                <div className="mb-3">
                  <label className="form-label">Course Image</label>
                  <input
                    type="file"
                    name="courseImage"
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.courseImage && <p className="text-danger">{errors.courseImage}</p>}
                  {imagePreview && <img src={imagePreview} alt="Preview" width="100" />}
                </div>

                <div className="mb-3">
                  <label className="form-label">Technologies</label>
                  <input
                    type="text"
                    name="techs"
                    value={formData.techs}
                    onChange={handleChange}
                    className="form-control"
                  />
                  {errors.techs && <p className="text-danger">{errors.techs}</p>}
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AC;
