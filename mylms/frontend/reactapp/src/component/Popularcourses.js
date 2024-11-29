// AllCourses.js
import React from 'react';
import { Link } from 'react-router-dom';
import  { useEffect } from 'react';


function Popularcourses() {

  useEffect(() => {
    document.title = 'Popular courses - Online Learning';
}, []);

  return (
    <div className="container mt-4">
      <h2>PopularCourses</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
          <Link to="/course/cloud-computing">
          <img src="CC.jpeg" className="card-img-top" alt="..." /></Link>
               <div className="card-body ">
                 <h5 className="card-title"><Link to="/course/cloud-computing">CLOUD COMPUTING</Link></h5>
               </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <Link to="/course/business-intelligence">
          <img src="BI.jpeg" className="card-img-top" alt="..." /></Link>
               <div className="card-body">
                 <h5 className="card-title"><Link to="/course/business-intelligence">BUSINESS INTELLIGENCE</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <Link to="/course/devops">
          <img src="D.png" className="card-img-top" alt="..." /></Link>
               <div className="card-body">
                 <h5 className="card-title"><Link to="/course/devops">DEVOPS</Link>
              </h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
          <Link to="/course/machine-learning">
          <img src="ML.jpeg" className="card-img-top" alt="..." /></Link>
               <div className="card-body">
                 <h5 className="card-title"><Link to="/course/machine-learning">MACHINE LEARNING</Link>
              </h5>
            </div>
          </div>
        </div>
        {/* 5th card */}
        <div className="col-md-3">
          <div className="card">
          <Link to="/course/block-chain">
          <img src="bc.jpeg" className="card-img-top" alt="..." /></Link>
               <div className="card-body">
                 <h5 className="card-title"><Link to="/course/block-chain">BLOCK CHAIN</Link>
              </h5>
            </div>
          </div>
        </div>
        {/* 6th card */}
        <div className="col-md-3">
          <div className="card">
          <Link to="/course/project-management">
          <img src="pm.jpeg" className="card-img-top" alt="..." /></Link>
               <div className="card-body">
                 <h5 className="card-title"><Link to="/course/project-management">PROJECT MANAGEMENT</Link>
              </h5>
            </div>
          </div>
        </div>
        {/* 7th card */}
        <div className="col-md-3">
          <div className="card">
          <Link to="/course/software-development">
          <img src="sd.jpeg" className="card-img-top" alt="..." /></Link>
               <div className="card-body">
                 <h5 className="card-title"><Link to="/course/software-development">SOFTWARE DEVELOPMENT</Link>
              </h5>
            </div>
          </div>
        </div>
        {/* 8th card */}
        <div className="col-md-3">
          <div className="card">
          <Link to="/course/big-data">
          <img src="bd.jpeg" className="card-img-top" alt="..." /></Link>
               <div className="card-body">
                 <h5 className="card-title"><Link to="/course/big-data">BIG DATA</Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="page navigation example mt-5">
      <ul class="pagination justify-content-center">
        <li class="page-item"><a class="page-link" href="">Previous</a></li>
        <li class="page-item"><a class="page-link" href="">1</a></li>
        <li class="page-item"><a class="page-link" href="">2</a></li>
        <li class="page-item"><a class="page-link" href="">Next</a></li>
      </ul>
      </nav>
    </div>
  );
}

export default Popularcourses;
