import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Home.css';

import  { useEffect } from 'react';

function Home() {

    useEffect(() => {
        document.title = 'Home - Online Learning';
    }, []);


    const testimonialSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    return (

        <div className="">

             {/* Marquee Below Navbar */}
             <div className="marquee-container">
                <div className="marquee-content">
                    Welcome to Online Learning! Enhance your skills with our latest courses.
                </div>
            </div>



             {/* Video Section with Information */}
             <div className="video-section">
                <video autoPlay loop muted className="background-video">
                    <source src="bg-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="video-overlay">
                    <h2>Welcome to Online Learning</h2>
                    <p>Enhance your skills with our comprehensive courses. Learn from the experts at your own pace.</p>
                </div>
            </div>
            <div style={{
                backgroundImage: "url('/img.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '100vh',
                color: '#fff' // Optional: Ensure text is readable on the background
            }}>
            
            <div className="container mt-4" >

            <div className="welcome-section">
  <div className="welcome-content">
    <div className="left-column">
      <h2>Welcome to Online Learning – Your Gateway to Excellence in Online Learning!</h2>
      <p>
      "Online Learning is your trusted platform for enhancing your skills and knowledge from the comfort of your own home. We offer a wide range of courses across various fields, including technology, business, and data science. Our mission is to provide accessible, flexible, and high-quality education that empowers individuals to thrive in today’s fast-paced world. Whether you’re a beginner or looking to upskill, we have something for everyone."
      </p>
    </div>
    
    {/* Vertical Separator Line */}
    <div className="separator-line"></div>
    
    <div className="right-column">
      <p className="second-column">
        Our platform is designed to equip students and professionals with the practical knowledge and skills required to thrive in today’s digital landscape.
        With expert instructors and hands-on projects, we offer an engaging learning experience that bridges the gap between theory and real-world application.
        Join us to explore courses in technology, business, data analytics, and more, and take the next step in your professional journey.
      </p>
    </div>
  </div>
</div>




            

            <h3 className="pd-1 mb-3">Latest Courses
                <Link to="/latestcourses" className="btn btn-link float-end">See All</Link>
            </h3>
            
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
                {/* popular courses */}
                <h3 className="pd-1 mb-3">Popular Courses
                <Link to="/PopularCourses" className="btn btn-link float-end">See All</Link>

                </h3>
            <div className="row mb-4">
                {/* First Popular Course Card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/cloud-computing"><img src="CC.jpeg" className="card-img-top" alt="CC" /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/course/cloud-computing">CLOUD COMPUTING</Link></h5>
                        </div>
                    </div>
                </div>

                {/* second card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/business-intelligence"><img src="BI.jpeg" className="card-img-top" alt="BI" /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/course/business-intelligence">BUSINESS INTELLIGENCE</Link></h5>
                        </div>
                    </div>
                </div>

                {/* Third  Card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/devops"><img src="D.png" className="card-img-top" alt="" /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/course/devops">DEVOPS</Link></h5>
                        </div>
                    </div>
                </div>
                {/* fourth Card */}
                <div className="col-md-3">
                    <div className="card">
                    <Link to="/course/machine-learning"><img src="ML.jpeg" className="card-img-top" alt="" /></Link>
                        <div className="card-body">
                            <h5 className="card-title"><Link to="/course/machine-learning">MACHINE LEARNING</Link></h5>
                        </div>
                    </div>
                </div>
                {/* Featured Teachers Section */}
            <h3 className="pd-1 mb-3">Featured Teachers
            <Link to="/featuredteachers" className="btn btn-link float-end">See All</Link>

            </h3>
            <div className="row mb-4">
                {/* First Teacher Card */}
                <div className="col-md-3">
                <Link to="/instructor/ms.madhusmitha">
                    <div className="card">
                    
                        <img src="mam.jpg" className="card-img-top" alt="Teacher 1" style={{width:'100%',height:'350px',objectFit:'cover'}} />
                        <div className="card-body">
                            <h5 className="card-title">Ms.Madhusmitha</h5>
                        </div>
                    </div>
                </Link>   
                    
                </div>

                {/* Second Teacher Card */}
                <div className="col-md-3">
                <Link to="/instructor/mr.saral-kumar">
                    <div className="card">
                        <img src="sir.jpg" className="card-img-top" alt="Teacher 2" style={{width:'100%',height:'350px',objectFit:'cover'}} />
                        <div className="card-body">
                            <h5 className="card-title">Mr.Saral Kumar</h5>
                            
                        </div>
                    </div>
                </Link>
                </div>
                {/* Third Teacher Card */}
                <div className="col-md-3">
                <Link to="/instructor/mr.sudheer">
                    <div className="card">
                        <img src="ss.jpg" className="card-img-top" alt="Teacher 3" style={{width:'100%',height:'350px',objectFit:'cover'}} />
                        <div className="card-body">
                            <h5 className="card-title">Mr.Sudheer</h5>
                            
                        </div>
                    </div>
                </Link>
                </div>
                {/* fourth Teacher Card */}
                <div className="col-md-3">
                <Link to="/instructor/ms.mohana-priya">
                    <div className="card">
                        <img src="MM.JPG" className="card-img-top" alt="Teacher 4" style={{width:'100%',height:'350px',objectFit:'cover'}} />
                        <div className="card-body">
                            <h5 className="card-title">Ms.Mohana Priya</h5>
                        </div>
                    </div>
                </Link>
                
                </div>

                  {/* Testimonials Section */}
            <h3 className="text-center pd-1 mb-3">What Our Students Say</h3>
            <p className='text-center'>Hear from our students about their experiences and success after completing our programs.</p>
            <Slider {...testimonialSettings} className="testimonial-slider mb-4">
                <div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">
                                "The Python Full Stack course was incredible! The instructors were amazing, and I now feel confident in building web applications."
                            </p>
                            <h5 className="card-title">- Tejaswi</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">
                                "The Artificial Intelligence course changed my career path! I gained practical knowledge, and the projects were hands-on."
                            </p>
                            <h5 className="card-title">- Ruhinaaz</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">
                                "Cyber Security training gave me the confidence to work in a fast-growing field. I recommend this to anyone interested in security."
                            </p>
                            <h5 className="card-title">- Meghana</h5>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">
                                "The Data Science course equipped me with essential skills in data analysis and ML. It has opened many doors for my career!"
                            </p>
                            <h5 className="card-title">- Poojitha</h5>
                        </div>
                    </div>
                </div>
            </Slider>





    <div class="key-features-section">
    <h2>Key Features</h2>
    <div class="features-container">
        <div class="feature-card">
            <i class="feature-icon">🔧</i>
            <h3>Real-time Trainers</h3>
            <p>Gain practical knowledge from experienced trainers who offer real-world insights and support.</p>
        </div>
        <div class="feature-card">
            <i class="feature-icon">📚</i>
            <h3>Curriculum</h3>
            <p>A well-structured curriculum that covers key topics for skill development and success.</p>
        </div>
        <div class="feature-card">
            <i class="feature-icon">💻</i>
            <h3>Online Training</h3>
            <p>Learn anytime, anywhere with flexible online courses and expert support.</p>
        </div>
        <div class="feature-card">
            <i class="feature-icon">🏫</i>
            <h3>Classroom Training</h3>
            <p>Engage in hands-on learning with interactive classroom sessions led by experienced trainers.</p>
        </div>
        <div class="feature-card">
            <i class="feature-icon">🔍</i>
            <h3>Interactive Learning</h3>
            <p>Engage in hands-on activities for a more effective learning experience.</p>
        </div>
        <div class="feature-card">
            <i class="feature-icon">🎓</i>
            <h3>Placement Assistance</h3>
            <p>We provide dedicated placement support to help you secure job opportunities in your field.</p>
        </div>
    </div>
</div>

                
    <section className="guide-section">
      <div className="guide-content">
        <div className="guide-text">
          <span className="guide-label">Guide</span>
          <h2>
            Offer personalized career guidance based on Student goals, skills,
            your company priorities, and trending career paths.
          </h2>
        </div>
        <div className="guide-image">
          <img src="gu.png" alt="Career Guidance" />
        </div>
      </div>
    </section>




    <section className="develop-section">
      <div className="develop-content">
        <div className="develop-image">
          <img src="de.png" alt="Develop Skills" />
        </div>
        <div className="develop-text">
          <span className="develop-label">Develop</span>
          <h2>
            Build the skills that matter with up-to-date expert-led content from
            22,000+ courses in different languages.
          </h2>
        </div>
      </div>
    </section>


    <section className="connect-section">
      <div className="connect-content">
        <div className="connect-text">
          <span className="connect-label">Connect</span>
          <h2>
          Seamlessly connect students to internal opportunities and facilitate the internal mobility of in-demand skills with Company Recruiter integrations.
          </h2>
        </div>
        <div className="connect-image">
          <img src="co.png" alt="Connect Guidance" />
        </div>
      </div>
    </section>

    <section className="skills-section">
      <h2>Today's most in-demand skills and learning experiences for every professional.</h2>
      <div className="skills-container">
        <div className="skill-card" style={{ backgroundColor: "#e6f4ff" }}>
          <h3>Technology</h3>
          <p>
            Accelerate technical skill building with data-driven, high-quality, in-demand tech content and hands-on practice with advanced topics.
            
          </p>
        </div>
        <div className="skill-card" style={{ backgroundColor: "#fff9db" }}>
          <h3>AI-readiness</h3>
          <p>
            Get the latest AI and generative AI learning content from industry experts so every student can understand, apply, build, maintain, or train on AI for their role.
            
          </p>
        </div>
        <div className="skill-card" style={{ backgroundColor: "yellowgreen" }}>
          <h3>Leadership</h3>
          <p>
          Empower leaders to navigate changes and create thriving global teams to address challenges.
            
          </p>
        </div>
        <div className="skill-card" style={{ backgroundColor: "pink" }}>
          <h3>Certifications</h3>
          <p>
          Help learners close skill gaps with credentials, prep courses, and assessments across four credential types. 
            
          </p>
        </div>
      </div>
    </section>



            </div>
            
                
                

            </div>
            </div>
            </div>
            </div>
            </div>
        
        

        
        
        
    );
}

export default Home;




