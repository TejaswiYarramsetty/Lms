import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function MU() {
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
                  <Link className="nav-link" to="/TDB/mycourses">My Courses</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/TDB/addcourses">Add Courses</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/TDB/myusers">My Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/TDB/PS">Profile Setting</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/TDB/CP">Change Password</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-danger" to="/logout">Logout</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="col-md-9">
          <div className="card">
            <div className="card-body">
              <h3>User List</h3>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Total Enrollment</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Python Full Stack</td>
                    <td>150</td>
                    <td><button className="btn btn-dark">Delete</button></td>
                  </tr>
                  <tr>
                    <td>Artificial Intelligence</td>
                    <td>200</td>
                    <td><button className="btn btn-dark">Delete</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Render additional dashboard routes here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MU;
