import React , {useState} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './CourseDetails.css'; // Import CSS for styling


// Mock Course Data
const courseData = {
  "Python-full-stack": {
    title: "Python Full Stack",
    image: "/full stack.jpg",
    description:
      "A Python full-stack developer is skilled in both front-end and back-end development using Python. They build responsive and functional front ends and robust, scalable back-end systems using Python frameworks.",
    instructors: "Mr.Saral Kumar, Ms.Mohana Priya",
    duration: "4 months",
    studentsEnrolled: 120,
    videos:{
        Introduction:"",
        Class1:"",
        Class2:"",
        Class3:"",
    },
  },

  "artificial-intelligence": {
    title: "Artificial Intelligence",
    image: "/AI.jpeg",
    description:
      "This course covers AI algorithms, neural networks, and machine learning. You'll learn to design intelligent systems using modern AI techniques.",
    instructors: "Ms.Madhusmitha",
    duration: "6 months",
    studentsEnrolled: 200,
    videos:{
        Introduction:"",
        Class1:"",
        Class2:"",
        Class3:"",
    },
  },
  "data-science": {
    title: "Data Science",
    image: "/DS.jpeg",
    description:
      "Master data analysis, visualization, and machine learning techniques with Python and R to extract insights from data and solve real-world problems.",
    instructors: "Mr.Sudheer",
    duration: "5 months",
    studentsEnrolled: 150,
    videos:{
        Introduction:"",
        Class1:"",
        Class2:"",
        Class3:"",
    },
  },
  "cyber-security": {
    title: "Cyber Security",
    image: "/CS.jpg",
    description:
      "Learn how to protect systems, networks, and data from cyber threats. This course covers both offensive and defensive security techniques.",
    instructors: " Mr. Amar Singh",
    duration: "3 months",
    studentsEnrolled: 180,
    videos:{
        Introduction:"",
        Class1:"",
        Class2:"",
        Class3:"",
    },
  },
  "cloud-computing":{
    title:"cloud computing",
    image:"/CC.jpeg",
    description:
    "Cloud computing is the on-demand delivery of computing services such as servers, storage, databases, networking, software, and analytics. Cloud-based storage makes it possible to save files to a remote source. Cloud data storage platforms include Google Drive, Dropbox, OneDrive, and Box.",
    instructors:"Dr. Maya Patel",
    duration:"4 months",
    studentsEnrolled:170,
    videos:{
      Introduction:"",
      Class1:"",
      Class2:"",
      Class3:"",
    },
  },
  "business-intelligence":{
    title:"business intelligence",
    image:"/BI.jpeg",
    description:"What is business intelligence? Business intelligence combines business analytics, data mining, data visualization, data tools and infrastructure, and best practices to help organizations make more data-driven decisions.",
    instructors: "Dr. Emily Clark",
    duration: "4 months",
    studentsEnrolled: 140,
    videos:{
        Introduction:"",
        Class1:"",
        Class2:"",
        Class3:"",
      },
  },
  "devops": {
    title: "DevOps",
    image: "/D.png",
    description:
      "DevOps is a methodology in the software development and IT industry. Used as a set of practices and tools, DevOps integrates and automates the work of software development and IT operations as a means for improving and shortening the systems development life cycle.",
    instructors: "Mr. Alex Carter",
    duration: "3 months",
    studentsEnrolled: 130,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "machine-learning": {
    title: "Machine Learning",
    image: "/ML.jpeg",
    description:
      "Machine learning is a subfield of artificial intelligence, which is broadly defined as the capability of a machine to imitate intelligent human behavior. Artificial intelligence systems are used to perform complex tasks in a way that is similar to how humans solve problems.",
    instructors: "Ms. Alice Tran",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "digital-marketing":{
    title: "Digital Marketing",
    image: "/dm.jpeg",
    description:
      "Digital marketing is the component of marketing that uses the Internet and online-based digital technologies such as desktop computers, mobile phones, and other digital media and platforms to promote products and services.",
    instructors: "Mr.Sri Ram",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "data-analysis":{
    title: "Data Analysis",
    image: "/da.png",
    description:
      "Data analysis is the process of inspecting, cleansing, transforming, and modeling data with the goal of discovering useful information, informing conclusions, and supporting decision-making",
    instructors: "Mr.Jetwik",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "web-development":{
    title: "Web Development",
    image: "/wd.jpeg",
    description:
      "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
    instructors: "Mr.Sidharth",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "UI":{
    title: "UI/UX",
    image: "/UI.jpeg",
    description:
      "A UI/UX developer is a specialized software developer who focuses on creating user interfaces and user experiences for a variety of products, such as websites and mobile apps. They combine elements of graphic design, psychology, and engineering to create a product that looks good and is easy and enjoyable to use.",
    instructors: "Dr.Monami",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "ethical-hacking":{
    title: "Ethical Hacking",
    image: "/eh.jpeg",
    description:
      "Ethical Hacking is the practice of identifying and fixing vulnerabilities in computer systems, networks, and applications to enhance security. Also known as white-hat hacking, ethical hacking involves using the same tools and techniques as malicious hackers but with the owner's consent and within legal boundaries. Ethical hackers simulate cyberattacks to uncover potential weaknesses before they can be exploited.This field plays a crucial role in protecting sensitive data, preventing cyber threats, and ensuring the robustness of digital systems. ",
    instructors: "Mr.Shree",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "java-fullstack":{
    title: "Java Full Stack",
    image: "/java.jpeg",
    description:
      "Java Full Stack Development refers to the development of both front-end (client-side) and back-end (server-side) parts of a web application. This involves using Java programming language for server-side development, along with front-end technologies like HTML, CSS, JavaScript, and frameworks like Angular.",
    instructors: "Mr.Kavin",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "aws":{
    title: "AWS",
    image: "/aws.png",
    description:
      "Amazon web service is an online platform that provides scalable and cost-effective cloud computing solutions. AWS is a broadly adopted cloud platform that offers several on-demand operations like compute power, database storage, content delivery, etc., to help corporates scale and grow.",
    instructors: "Mr.Rishab",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "sql":{
    title: "SQL",
    image: "/sql.jpeg",
    description:
      "Structured query language (SQL) is a programming language for storing and processing information in a relational database. A relational database stores information in tabular form, with rows and columns representing different data attributes and the various relationships between the data values.",
    instructors: "Mr.Karan",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "block-chain":{
    title: "Block Chain",
    image: "/bc.jpeg",
    description:
      "Blockchain is a new technology, which is known as Distributed Ledger Technology (DLT). With the help of Blockchain technology, currency as well as anything can be converted into digital format and stored. Actually it is an exchange process, which works on data blocks. In this, one block is connected to another block. These blocks cannot be hacked. Blockchain technology aims to keep documents digitally secure.  the document is distributed instead of copied or transferred. Blockchain is known as Distributed Ledger Technology, which makes any digital asset immutable and transparent through the use of decentralization.",
    instructors: "Ms.Roshni",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "project-management":{
    title: "Project Management",
    image: "/pm.jpeg",
    description:
      "Project management is the process of supervising the work of a team to achieve all project goals within the given constraints. This information is usually described in project documentation, created at the beginning of the development process. The primary constraints are scope, time and budget.",
    instructors: "Ms.Akshara",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "software-development":{
    title: "Software Development",
    image: "/sd.jpeg",
    description:
      "Software development is the process of designing and implementing a software solution to satisfy a user. The process is more encompassing than programming, writing code, in that it includes conceiving the goal, evaluating feasibility, analyzing requirements, design, testing and release",
    instructors: "Ms.Naina",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },
  "big-data":{
    title: "Big Data",
    image: "/bd.jpeg",
    description:
      "Software development is the process of designing and implementing a software solution to satisfy a user. The process is more encompassing than programming, writing code, in that it includes conceiving the goal, evaluating feasibility, analyzing requirements, design, testing and release",
    instructors: "Ms.Keerthi",
    duration: "5 months",
    studentsEnrolled: 170,
    videos: {
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    },
  },


};

function CourseDetails() {
  const { courseId } = useParams();
  
  // Get course data based on courseId
  const course = courseData[courseId];

  const [playingVideo, setPlayingVideo] = useState(null); // This manages which video is playing

  // If course doesn't exist, display a "Course Not Found" message
  if (!course) {
    return <h2 className="mt-4 text-center">Course not found!</h2>;
  }

  

  const handlePlay = (videoName) => { // Define the handlePlay function
    setPlayingVideo(videoName);
  };

  return (
    <div className="container mt-4">
      <h2>Course Details for {course.title}</h2>
      
      <div className="d-flex align-items-start">
        <img src={course.image} alt={course.title} className="course-image" />
        <ul className="list-group ms-4">
          <li className="list-group-item">
            <h2>Title - {course.title}</h2>
          </li>
          <li className="list-group-item">
            <p>{course.description}</p>
          </li>
          <li className="list-group-item">
            <h3>Course by:</h3>
            <p>
              {course.instructors.split(', ').map((instructor) => {
                const instructorId = instructor.trim().replace(/\s+/g, '-').toLowerCase();
                console.log("Instructor Link ID:", instructorId); // Debug line
                return (
                  <Link key={instructor} to={`/instructor/${instructorId}`}>
                    {instructor}
                  </Link>
                );
              }).reduce((prev, curr) => [prev, ', ', curr])}
            </p>
          </li>
          <li className="list-group-item">
            <h3>Duration:</h3>
            <p>{course.duration}</p>
          </li>
          <li className="list-group-item">
            <h3>Enrolled Students: {course.studentsEnrolled}</h3>
          </li>
        </ul>
      </div>

        {/* new list group for introduction video*/}
        <div className="mt-4">
                <ul className="list-group">
                    <li className='list-group-item'>
                        <h2>Course Videos</h2>
                    </li>
                    <li className="list-group-item">
                        <h3>Introduction Video:</h3>
                        <div className="embed-responsive embed-responsive-16by9">
                            {playingVideo ==='Introduction' ? (
                                <iframe
                                    className="embed-responsive-item"
                                    src={course.videos.Introduction}
                                    title={course.title + " Introduction Video"}
                                    allowFullScreen
                                    width="100%"
                                    height="315"
                                ></iframe>
                            ) : (
                                <div className='button-container'>
                                <p>No video available for this course.</p>
                                <button className="btn btn-primary " onClick={() => handlePlay('Introduction')}>
                                <i className="fas fa-play"></i>
                                </button>
                                </div>
                            )}
                        </div>
                    </li>
                        
                    {/* Class 1 Video */}
                    <li className="list-group-item">
                        <h3>Class 1:</h3>
                        <div className="embed-responsive embed-responsive-16by9">
                            {course.videos.class1 ? (
                                <iframe
                                    className="embed-responsive-item"
                                    src={course.videos.class1}
                                    title={course.title + " Class 1 Video"}
                                    allowFullScreen
                                    width="100%"
                                    height="315"
                                ></iframe>
                            ) : (
                                <div className='button-container'>
                                <p>No Class 1 video available for this course.</p>
                                <button className="btn btn-primary " onClick={() => handlePlay('class1')}>
                                <i className="fas fa-play"></i> {/* Font Awesome Play Icon */}
                                </button>
                                </div>
                            )}
                        </div>
                    </li>

                    {/* Class 2 Video */}
                    <li className="list-group-item">
                        <h3>Class 2:</h3>
                        <div className="embed-responsive embed-responsive-16by9">
                            {course.videos.class2 ? (
                                <iframe
                                    className="embed-responsive-item"
                                    src={course.videos.class2}
                                    title={course.title + " Class 2 Video"}
                                    allowFullScreen
                                    width="100%"
                                    height="315"
                                ></iframe>
                            ) : (
                                <div className='button-container'>
                                <p>No Class 2 video available for this course.</p>
                                <button className="btn btn-primary " onClick={() => handlePlay('class2')}>
                                <i className="fas fa-play"></i>
                                </button>
                                </div>
                            )}
                        </div>
                    </li>

                    {/* Class 3 Video */}
                    <li className="list-group-item">
                        <h3>Class 3:</h3>
                        <div className="embed-responsive embed-responsive-16by9">
                            {course.videos.class3 ? (
                                <iframe
                                    className="embed-responsive-item"
                                    src={course.videos.class3}
                                    title={course.title + " Class 3 Video"}
                                    allowFullScreen
                                    width="100%"
                                    height="315"
                                ></iframe>
                            ) : (
                                <div className='button-container'>
                                <p>No Class 3 video available for this course.</p>
                                <button className="btn btn-primary " onClick={() => handlePlay('class3')}>
                                <i className="fas fa-play"></i>
                                </button>
                                </div>
                            )}
                        </div>
                    </li>

                </ul>
            </div>

    </div>
  );
}

export default CourseDetails;
