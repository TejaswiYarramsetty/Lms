
import { useParams } from 'react-router-dom';
import './InstructorDetails.css';
import React,{useState} from 'react';


const instructorData = {
  "mr.saral-kumar": {
    name: "Mr. Saral Kumar",
    image: "/sir.jpg",
    bio: `An experienced full-stack developer with expertise in Python, Django. 
          Over the years, Mr. Kumar has worked on several industry-level applications, 
          focusing on creating scalable web solutions and robust backend systems. 
          He is passionate about teaching and believes in hands-on learning, integrating real-world projects 
          into the curriculum. With years of experience in both front-end and back-end development, 
          Mr. Kumar strives to ensure that his students are well-equipped to tackle the challenges of modern web development.
          He holds a degree in Computer Science and is constantly upgrading his skills to stay ahead in the ever-evolving tech landscape.
          His teaching methodology is focused on problem-solving, real-time project building, and industry-specific best practices. 
          Apart from coding, he enjoys mentoring young tech enthusiasts and organizing community coding workshops.`,
    rating: 4.5, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
    
  },
  "ms.mohana-priya": {
    name: "Ms. Mohana Priya",
    image: "/MM.jpg",
    bio:  `Ms. Mohana Priya is a Frontend expert with a passion for teaching and helping students excel. 
    With a strong background in web development, particularly using HTML, CSS, JavaScript, and React, 
    she has worked on multiple large-scale web applications. Ms. Priya's teaching style focuses on making complex topics 
    simple and accessible to students of all levels. She believes in fostering creativity and encourages students to experiment 
    and build unique user interfaces that are not only functional but also visually stunning. 
    Apart from frontend development, Ms. Priya has a keen interest in UI/UX design, ensuring that the user experience is always 
    at the forefront of the development process. With years of hands-on experience in the industry, she has developed a deep understanding 
    of the importance of responsive design, accessibility, and modern development tools. Her passion for teaching and mentorship drives her to constantly inspire and empower students to reach their full potential in the tech world.`,
    rating: 4.7, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
  },
  "ms.madhusmitha": {
    name: "Ms.Madhusmitha",
    image: "/mam.jpg",
    bio:  `Ms.Madhusmitha is a leading expert in Artificial Intelligence with a strong focus on machine learning, deep learning, and natural language processing. With a Ph.D. in Computer Science from a renowned institution, Madhusmitha has made significant contributions to the AI field, particularly in developing algorithms that enhance machine perception and decision-making processes.
    In addition to her academic and professional achievements, Madhusmitha is a dedicated mentor, encouraging the next generation of AI researchers and practitioners through mentorship and teaching. She believes in the power of collaboration and often collaborates with interdisciplinary teams to address complex challenges in AI and machine learning.`,
    rating: 4.5, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
  },
  "mr.sudheer": {
    name: "Mr.Sudheer",
    image: "/ss.jpg",
    bio:`Mr.Sudheer is a highly accomplished Data Science expert with extensive experience in leveraging data to drive insights, innovation, and decision-making. With a background in mathematics and computer science, Sudheer has spent over a decade working in data analysis, machine learning, and predictive modeling across various industries, including finance, healthcare, and technology.
            His expertise spans data mining, statistical analysis, and building machine learning models to solve complex business problems. Sudheer is known for his ability to turn raw data into actionable insights, using advanced analytical techniques and tools to uncover patterns and trends that help organizations make informed, data-driven decisions.`,
    rating: 4.5, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
  },
  "mr.-amar-singh": {
    name: "Mr.Amar Singh",
    image: "/t3.jpeg",
    bio:`Amar Singh is a seasoned Cybersecurity expert with over 15 years of experience in protecting digital assets and ensuring the integrity of systems against evolving cyber threats. With a deep understanding of network security, ethical hacking, cryptography, and risk management, Amar has become a trusted figure in safeguarding organizations from cyber attacks and data breaches.
    Amar’s expertise extends to areas such as cloud security, identity and access management (IAM), and incident response. He has been an advisor for numerous Fortune 500 companies, helping them to strengthen their cybersecurity posture and respond to emerging cyber risks.`,
    rating: 4.5, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
  },
  "dr.-maya-patel": {
    name: "Dr.Maya Patel",
    image: "/t4.jpeg",
    bio:`Dr. Maya Patel is a recognized leader in Cloud Computing, with a wealth of experience in designing and deploying scalable, secure, and high-performance cloud solutions. Holding a Ph.D. in Computer Science, Dr. Patel has dedicated over a decade to advancing cloud technologies, particularly in the areas of cloud architecture, multi-cloud environments, and cloud-native application development.
    Dr. Patel's expertise lies in transforming organizations' IT infrastructure through cloud adoption, enabling businesses to enhance flexibility, reduce costs, and improve scalability. She has worked extensively with public cloud platforms such as AWS, Azure, and Google Cloud, helping companies migrate their workloads to the cloud and optimize their cloud environments for maximum efficiency.`,
    rating: 4.5, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
  },
  "dr.-emily-clark": {
    name: "Dr.Emily Clark",
    image: "/t5.jpeg",
    bio:`Dr. Emily Clark is a distinguished Business Intelligence (BI) expert with over 12 years of experience in transforming raw data into strategic insights that drive business decisions. With a Ph.D. in Information Systems and a deep understanding of analytics, data warehousing, and BI technologies, Dr. Clark has helped organizations across multiple industries unlock the power of their data to improve operational efficiency, customer experience, and financial performance.`,
    rating: 4.5, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
  },
  "mr.-alex-carter": {
    name: "Mr.Alex Carter",
    image: "/t6.jpeg",
    bio:`Alex Carter is a seasoned DevOps expert with over a decade of experience in automating and streamlining software development and IT operations. With a deep understanding of continuous integration/continuous deployment (CI/CD), infrastructure as code (IaC), containerization, and cloud platforms, Alex has helped organizations of all sizes optimize their software delivery pipelines and improve collaboration between development and operations teams.`,
    rating: 4.5, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
  },
  "ms.-alice-tran": {
    name: "Ms.Alice Tran",
    image: "/t7.jpeg",
    bio:`Alice Tran is a highly skilled Machine Learning expert with a passion for developing cutting-edge algorithms and models that drive data-driven solutions. With a background in Computer Science and a strong focus on statistical analysis, neural networks, and deep learning, Alice has spent over 10 years advancing the field of machine learning through both research and practical applications across industries like healthcare, finance, and e-commerce.`,
    rating: 4.5, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
  },
  "mr.sri-ram": {
    name: "Mr.Sri Ram",
    image: "/ram.jpg",
    bio:`Mr. Sri Ram is a seasoned digital marketing expert with extensive experience in helping brands grow their online presence. With a deep understanding of SEO, SEM, social media marketing, and content strategy, he has successfully led numerous campaigns across diverse industries. Passionate about data-driven results, Mr. Sri Ram uses innovative techniques to drive traffic, improve conversion rates, and maximize ROI. His expertise in leveraging digital tools and platforms has made him a valuable asset to businesses looking to enhance their digital footprint and achieve sustainable growth. `,
    rating: 4.5, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
  },
  "mr.jetwik": {
    name: "Mr.Jetwik",
    image: "/jet.jpg",
    bio:`An accomplished expert in data analysis, Mr. Jetwik brings years of experience in transforming raw data into actionable insights. With a deep understanding of statistical methods, machine learning, and visualization tools, he has helped organizations across industries make data-driven decisions. His passion for teaching and commitment to empowering others makes him a sought-after mentor in the field of analytics. `,
    rating: 4.5, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
  },
  "mr.sidharth": {
    name: "Mr.Sidharth",
    image: "/sid.jpg",
    bio:`With years of experience in web development, Mr. Sidharth specializes in creating responsive and dynamic web applications. His expertise spans front-end and back-end development, leveraging modern frameworks and tools like React, Node.js, and MongoDB. Passionate about coding and teaching, Mr. Sidarth empowers learners to build scalable and user-friendly websites, blending aesthetics with functionality. `,
    rating: 4.5, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
  },
  "dr.monami": {
    name: "Dr.Monami",
    image: "/monu.jpg",
    bio:` Dr. Monami is a distinguished expert in UI/UX design with a decade of experience creating user-centered digital experiences. She is renowned for her innovative approaches to designing intuitive interfaces and optimizing user journeys. Dr. Monami has worked with global brands, delivering impactful designs that resonate with users and achieve business goals. Her expertise spans user research, wireframing, prototyping, and usability testing, ensuring exceptional user satisfaction and engagement.`,
    rating: 4.5, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
  },
  "mr.shree": {
    name: "Mr.Shree",
    image: "/shree.jpg",
    bio:`Mr. Shree is an expert in Ethical Hacking, specializing in identifying and mitigating security vulnerabilities to protect digital systems from potential cyber threats. With years of experience in cybersecurity, he has a proven track record of ensuring the integrity and safety of networks, applications, and data. Mr. Shree is passionate about educating others on the importance of ethical hacking in safeguarding sensitive information and creating robust digital infrastructures.`,
    rating: 4.5, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
  },
  
  "mr.kavin": {
    name: "Mr.Kavin",
    image: "/kavin.jpg",
    bio:`Mr. Kavin is an expert in Java Full Stack development, specializing in creating dynamic, scalable, and efficient web applications. With expertise in both front-end and back-end technologies, he has a strong foundation in Java, as well as a deep understanding of modern web development frameworks and tools. Mr. Kavin is passionate about delivering seamless user experiences while ensuring the highest standards of performance and reliability. He also enjoys mentoring aspiring developers and staying updated with the latest trends in the tech industry.`,
    rating: 4.5, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
  },
  "mr.rishab": {
    name: "Mr.Rishab",
    image: "/rishab.jpg",
    bio:`Mr. Rishab is an expert in Amazon Web Services (AWS), specializing in cloud infrastructure, architecture, and solutions. With extensive experience in designing and deploying scalable, secure, and cost-efficient cloud solutions, he has a deep understanding of AWS services such as EC2, S3, Lambda, and RDS. Mr. Rishab is passionate about helping businesses leverage the power of cloud computing to improve operational efficiency and scalability. He is also dedicated to educating others on best practices for cloud security, automation, and optimization, empowering organizations to fully harness the capabilities of AWS.`,
    rating: 4.5, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
  },
  "mr.karan": {
    name: "Mr.Karan",
    image: "/karan.jpg",
    bio:`Mr. Karan is an expert in SQL (Structured Query Language), with a strong proficiency in database design, optimization, and management. With years of experience in working with relational databases such as MySQL, PostgreSQL, and SQL Server, he has mastered advanced SQL techniques, including complex queries, indexing, stored procedures, and data manipulation. Mr. Karan is passionate about helping businesses improve their data management processes, ensuring data integrity and efficient performance. He also enjoys teaching others how to leverage SQL for data analytics, reporting, and business intelligence, empowering individuals to unlock the full potential of their data.`,
    rating: 4.5, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
  },
  "ms.roshni": {
    name: "Ms.Roshni",
    image: "/roshni.jpg",
    bio:`Roshni is an expert in blockchain technology, specializing in the development and implementation of decentralized systems. With a deep understanding of blockchain protocols, smart contracts, and cryptographic techniques, she has a strong track record of delivering innovative solutions in various industries, including finance and supply chain. Roshni is passionate about harnessing the power of blockchain to transform businesses, improve transparency, and create secure, trustless environments for digital transactions. She is dedicated to educating others about blockchain's potential to drive the next wave of technological innovation.`,
    rating: 4.5, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
  },
  "ms.akshara": {
    name: "Ms.Akshara",
    image: "/aksh.jpg",
    bio:`Akshara is an expert in project management with a strong track record of delivering complex projects on time and within budget. With extensive experience in leading cross-functional teams, she excels in planning, executing, and overseeing projects in diverse industries. Akshara is skilled in using project management tools and methodologies like Agile and Scrum to optimize workflow and ensure seamless collaboration. Passionate about driving results, she focuses on strategic planning, risk management, and stakeholder communication, ensuring that every project achieves its goals while maintaining high standards of quality. Akshara is dedicated to mentoring teams and fostering an environment of continuous improvement and innovation.`,
    rating: 4.5, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
  },
  "ms.naina": {
    name: "Ms.Naina",
    image: "/naina.jpg",
    bio:`Naina is a seasoned software development professional with expertise in building scalable, efficient, and high-performance applications. With a strong foundation in various programming languages, frameworks, and development methodologies, she excels in creating software solutions that meet both technical and business requirements. Naina is passionate about optimizing the software development lifecycle, from coding and testing to deployment, ensuring smooth and successful project delivery. She thrives in fast-paced environments and is always eager to embrace new technologies and approaches to solve complex challenges in software engineering.`,
    rating: 4.5, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
  },
  "ms.keerthi": {
    name: "Ms.Keerthi",
    image: "/keerthi.jpg",
    bio:`Keerthi is a highly skilled Big Data professional with extensive experience in managing, analyzing, and extracting valuable insights from large datasets. Specializing in Big Data technologies such as Hadoop, Spark, and Kafka, Keerthi has a proven track record of implementing scalable data solutions that drive business intelligence and decision-making. With a deep understanding of data processing, machine learning algorithms, and data warehousing, she helps organizations harness the power of data to optimize operations and foster innovation. Keerthi is committed to staying ahead of industry trends and continually exploring new tools and techniques in the Big Data landscape to deliver impactful results.`,
    rating: 4.5, // Add rating for the instructor
    videos:{
      Introduction: "",
      Class1: "",
      Class2: "",
      Class3: "",
    }
  },
  
};

function InstructorDetails() {
  const { instructorId } = useParams();
  console.log("Instructor ID from URL:", instructorId); // Debug line
  const instructor = instructorData[instructorId];
  const [playingVideo, setPlayingVideo] = useState(null);

  if (!instructor) {
    return <h2 className="mt-4 text-center">Instructor not found!</h2>;
  }

  const handlePlay = (videoKey) => {
    setPlayingVideo(videoKey);
  };

  return (
    <div className="container mt-4">
      

      <div className="d-flex align-items-start">
        <img src={instructor.image} alt={instructor.name} className="instructor-image me-4" />

        <ul className="list-group ms-4">
          <li className="list-group-item">
            <h2>{instructor.name}</h2>
          </li>
          <li className="list-group-item">
            <p>{instructor.bio}</p>
          </li>
          <li className="list-group-item">
            <h3>Rating:</h3>
            <p>{instructor.rating} / 5</p> {/* Display the rating */}
          </li>
        </ul>
      </div>

      {/* Video Section */}
      <div className="mt-4">
        <h2>Instructor Videos</h2>
        <ul className="list-group">
          {Object.keys(instructor.videos).map((videoKey) => (
            <li key={videoKey} className="list-group-item">
              <h3>{videoKey}:</h3>
              <div className="embed-responsive embed-responsive-16by9">
                {playingVideo === videoKey ? (
                  <iframe
                    className="embed-responsive-item"
                    src={instructor.videos[videoKey]}
                    title={`${instructor.name} ${videoKey} Video`}
                    allowFullScreen
                    width="100%"
                    height="315"
                  ></iframe>
                ) : (
                  <div className="button-container">
                    <p>No video available for this course.</p>
                    <button className="btn btn-primary" onClick={() => handlePlay(videoKey)}>
                      <i className="fas fa-play"></i> Play 
                    </button>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default InstructorDetails;
