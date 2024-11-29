// AllCourses.js
import React from 'react';
import { Link } from 'react-router-dom';
import {useEffect,useState} from 'react';
import axios from 'axios';
 const baseUrl='http://127.0.0.1:8000/api';

 function Featuredteachers() {
  const [teacher,setTeacher]=useState(null);
  useEffect(()=>{
    axios.get(baseUrl+'/teachers/').then((response)=>{
     // console.log(response.data);
     setTeacher(response.data);
    });
    
  },[]);
  console.log(teacher);



  useEffect(() => {
    document.title = 'Featured Teachers - Online Learning';
}, []);

  return (
    <div className="container mt-4">
      <h2>Featured Teachers</h2>
      <div className="row">
        <div className="col-md-3">
        <Link to="/instructor/mr.saral-kumar">
          <div className="card">
          <img src="sir.jpg" className="card-img-top" alt="..." style={{width:'100%',height:'350px',objectFit:'cover'}} />
               <div className="card-body ">
                 <h5 className="card-title">Mr.Saral Kumar</h5>
            </div>
          </div>
        </Link>
        </div>
        <div className="col-md-3">
          <Link to="/instructor/ms.mohana-priya">
          <div className="card">
          <img src="MM.jpg" className="card-img-top" alt="..." style={{width:'100%',height:'350px',objectFit:'cover'}} />
               <div className="card-body">
                 <h5 className="card-title">Ms.Mohana Priya</h5>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-3">
        <Link to="/instructor/ms.madhusmitha">
          <div className="card">
          <img src="mam.jpg" className="card-img-top" alt="..." style={{width:'100%',height:'350px',objectFit:'cover'}} />
               <div className="card-body">
                 <h5 className="card-title">Ms.Madhusmitha</h5>
            </div>
          </div>
         </Link> 
        </div>
        <div className="col-md-3">
        <Link to="/instructor/mr.sudheer">
          <div className="card">
          <img src="ss.jpg" className="card-img-top" alt="..."  style={{width:'100%',height:'350px',objectFit:'cover'}}/>
               <div className="card-body">
                 <h5 className="card-title">Mr.Sudheer</h5>
            </div>
          </div>
        </Link>
        </div>
        
        <div className="col-md-3">
          <Link to="/instructor/mr.-amar-singh">
          <div className="card">
          <img src="t3.jpeg" className="card-img-top" alt="..." style={{width:'100%',height:'350px',objectFit:'cover'}} />
               <div className="card-body">
                 <h5 className="card-title">Mr.Amar Singh</h5>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-3">
        <Link to="/instructor/dr.-maya-patel">
          <div className="card">
          <img src="t4.jpeg" className="card-img-top" alt="..." style={{width:'100%',height:'350px',objectFit:'cover'}} />
               <div className="card-body">
                 <h5 className="card-title">Dr.Maya Patel</h5>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-3">
        <Link to="/instructor/dr.-emily-clark">
          <div className="card">
          <img src="t5.jpeg" className="card-img-top" alt="..." style={{width:'100%',height:'350px',objectFit:'cover'}} />
               <div className="card-body">
                 <h5 className="card-title">Dr.Emily Clark</h5>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-3">
        <Link to="/instructor/mr.-alex-carter">
          <div className="card">
          <img src="t6.jpeg" className="card-img-top" alt="..." style={{width:'100%',height:'350px',objectFit:'cover'}} />
               <div className="card-body">
                 <h5 className="card-title">Mr.Alex Carter</h5>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-3">
        <Link to="/instructor/ms.-alice-tran">
          <div className="card">
          <img src="t7.jpeg" className="card-img-top" alt="..." style={{width:'100%',height:'350px',objectFit:'cover'}} />
               <div className="card-body">
                 <h5 className="card-title">Ms.Alice Tran</h5>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-3">
        <Link to="/instructor/mr.jetwik">
          <div className="card">
          <img src="jet.jpg" className="card-img-top" alt="..." style={{width:'100%',height:'350px',objectFit:'cover'}} />
               <div className="card-body">
                 <h5 className="card-title">Mr.Jetwik</h5>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-3">
        <Link to="/instructor/mr.sidharth">
          <div className="card">
          <img src="sid.jpg" className="card-img-top" alt="..." style={{width:'100%',height:'350px',objectFit:'cover'}} />
               <div className="card-body">
                 <h5 className="card-title">Mr.Sidharth</h5>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-3">
        <Link to="/instructor/dr.monami">
          <div className="card">
          <img src="monu.jpg" className="card-img-top" alt="..." style={{width:'100%',height:'350px',objectFit:'cover'}} />
               <div className="card-body">
                 <h5 className="card-title">Dr.Monami</h5>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-3">
        <Link to="/instructor/mr.shree">
          <div className="card">
          <img src="shree.jpg" className="card-img-top" alt="..." style={{width:'100%',height:'350px',objectFit:'cover'}} />
               <div className="card-body">
                 <h5 className="card-title">Mr.Shree</h5>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-3">
        <Link to="/instructor/mr.kavin">
          <div className="card">
          <img src="kavin.jpg" className="card-img-top" alt="..." style={{width:'100%',height:'350px',objectFit:'cover'}} />
               <div className="card-body">
                 <h5 className="card-title">Mr.Kavin</h5>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-3">
        <Link to="/instructor/mr.rishab">
          <div className="card">
          <img src="rishab.jpg" className="card-img-top" alt="..." style={{width:'100%',height:'350px',objectFit:'cover'}} />
               <div className="card-body">
                 <h5 className="card-title">Mr.Rishab</h5>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-3">
        <Link to="/instructor/mr.karan">
          <div className="card">
          <img src="karan.jpg" className="card-img-top" alt="..." style={{width:'100%',height:'350px',objectFit:'cover'}} />
               <div className="card-body">
                 <h5 className="card-title">Mr.Karan</h5>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-3">
        <Link to="/instructor/ms.roshni">
          <div className="card">
          <img src="roshni.jpg" className="card-img-top" alt="..." style={{width:'100%',height:'350px',objectFit:'cover'}} />
               <div className="card-body">
                 <h5 className="card-title">Ms.Roshni</h5>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-3">
        <Link to="/instructor/ms.akshara">
          <div className="card">
          <img src="aksh.jpg" className="card-img-top" alt="..." style={{width:'100%',height:'350px',objectFit:'cover'}} />
               <div className="card-body">
                 <h5 className="card-title">Ms.Akshara</h5>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-3">
        <Link to="/instructor/ms.naina">
          <div className="card">
          <img src="naina.jpg" className="card-img-top" alt="..." style={{width:'100%',height:'350px',objectFit:'cover'}} />
               <div className="card-body">
                 <h5 className="card-title">Ms.Naina</h5>
            </div>
          </div>
          </Link>
        </div>
        <div className="col-md-3">
        <Link to="/instructor/ms.keerthi">
          <div className="card">
          <img src="keerthi.jpg" className="card-img-top" alt="..." style={{width:'100%',height:'350px',objectFit:'cover'}} />
               <div className="card-body">
                 <h5 className="card-title">Ms.Keerthi</h5>
            </div>
          </div>
          </Link>
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

export default Featuredteachers;
