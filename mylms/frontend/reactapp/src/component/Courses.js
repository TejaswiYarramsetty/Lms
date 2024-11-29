
import React from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

function Courses() {

  
  useEffect(() => {
    document.title = 'Course - Online Learning';
}, []);



  return (
<div className="container mt-4">
      <h2> Courses</h2>
        
      <div className="row mb-4">
                {/* First Card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to= "/course/Python-full-stack"><img src="full stack.jpg" className="card-img-top" alt="Full Stack" /></Link>
                        <div className="card-body">
                        <h5 className="card-title"><Link to= "/course/Python-full-stack">PYTHON FULL STACK</Link></h5>
                        </div>
                    </div>
                </div>

                {/* Second Card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/artificial-intelligence"><img src="AI.jpeg" className="card-img-top" alt="Artificial Intelligence" /></Link>                        <div className="card-body">
                            <h5 className="card-title"><Link to= "/course/artificial-intelligence">ARTIFICIAL INTELLIGENCE</Link></h5>
                        </div>
                    </div>
                </div>

                {/* third card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/data-science"><img src="DS.jpeg" className="card-img-top" alt="" /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/course/data-science">DATA SCIENCE</Link></h5>
                        </div>
                    </div>
                </div>

                {/* fourth card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/cyber-security"><img src="CS.jpg" className="card-img-top" alt="" /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/course/cyber-security">CYBER SECURITY</Link></h5>
                        </div>
                    </div>
                </div>
                {/* 5th Card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to= "/course/digital-marketing"><img src="dm.jpeg" className="card-img-top" alt="digital" /></Link>
                        <div className="card-body">
                        <h5 className="card-title"><Link to= "/course/digital-marketing">DIGITAL MARKETING</Link></h5>
                        </div>
                    </div>
                </div>

                {/* 6th Card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/data-analysis"><img src="da.png" className="card-img-top" alt="" /></Link>                        <div className="card-body">
                            <h5 className="card-title"><Link to= "/course/data-analysis">DATA ANALYSIS</Link></h5>
                        </div>
                    </div>
                </div>

                {/* 7th card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/web-development"><img src="wd.jpeg" className="card-img-top" alt="" /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/course/web-development">WEB DEVELOPMENT</Link></h5>
                        </div>
                    </div>
                </div>

                {/* 8th card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/UI"><img src="UI.jpeg" className="card-img-top" alt="" /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/course/UI">UI/UX</Link></h5>
                        </div>
                    </div>
                </div>
                {/* 9th */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to= "/course/ethical-hacking"><img src="eh.jpeg" className="card-img-top" alt="Full Stack" /></Link>
                        <div className="card-body">
                        <h5 className="card-title"><Link to= "/course/ethical-hacking">ETHICAL HACKING</Link></h5>
                        </div>
                    </div>
                </div>

                {/* 10th Card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/java-fullstack"><img src="java.jpeg" className="card-img-top" alt="Artificial Intelligence" /></Link>                        <div className="card-body">
                            <h5 className="card-title"><Link to= "/course/java-fullstack">JAVA FULL STACK</Link></h5>
                        </div>
                    </div>
                </div>

                {/* 11th */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/aws"><img src="aws.png" className="card-img-top" alt="" /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/course/aws">AWS</Link></h5>
                        </div>
                    </div>
                </div>

                {/* 12th card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/sql"><img src="sql.jpeg" className="card-img-top" alt="" /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/course/sql">SQL</Link></h5>
                        </div>
                    </div>
                </div>

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
    </div>
    </div>
  );
}
export default Courses;
