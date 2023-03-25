import './App.css';

function App() {
  return (
    <div className="App">
       <header id="header">
    <div className="d-flex flex-column">

      <div className="profile" style={{marginTop:"30px"}}>
        <h1 className="text-light"><a href="index.html">Subhan Anjum</a></h1>
      </div>

      <nav id="navbar" className="nav-menu navbar">
        <ul>
          <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></a></li>
          <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
          <li><a href="#projects" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Projects</span></a></li>
          <li><a href="#certificates" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Certificates</span></a></li>
          
        </ul>
      </nav>
    </div>
  </header>

  <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">
      <h1>Subhan Anjum</h1>
      <p>Computer Science Student <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
    </div>
  </section>

  <main id="main">
    <section id="about" className="about">
      <div className="container">

        <div className="section-title">
          <h2>About</h2>
          <p style={{textAlign:"justify",padding:"20px"}}>I am a computer science student with a passion for programming and web development. My skills include programming in C++, C#, and Python, as well as web development using HTML, CSS, JavaScript. I have experience creating a variety of desktop applications, including a learning management system and a Drugs Distribution System.
          In My free time, I enjoys exploring new Web Technologies. I am committed to using my skills and knowledge to make a positive impact in the world through the development of innovative and useful software applications.</p>
        </div>

        <div className="section-title">
        <h2>Programmer &amp; Desktop Application Developer.</h2>
        <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>29 September 2002</span></li>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>0317 7767793</span></li>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Lahore Pakistan</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>21</span></li>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BS Computer Science</span></li>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Email:</strong>subhananjum001@gmail.com<span></span></li>
                  <li style={{listStyle:"none"}}><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    </section>
   
    <section id="skills" className="skills section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Skills</h2>
          <p>Showcasing my Abilities and Accomplishments</p>
        </div>

        <div className="row skills-content">

          <div className="col-lg-6" data-aos="fade-up">

            <div className="progress">
              <span className="skill">HTML</span>
              <progress id="file" value="90" max="100" style={{marginRight:"5px"}}> 90% </progress>
              <i className="val">90%</i>
            </div>

            <div className="progress">
              <span className="skill">CSS</span>
              <progress id="file" value="90" max="100" style={{marginRight:"5px"}}> 90% </progress>
              <i className="val">90%</i>
            </div>

            <div className="progress">
              <span className="skill">Javascript</span>
              <progress id="file" value="85" max="100" style={{marginRight:"5px"}}> 85% </progress>
              <i className="val">85%</i>
            </div>
            {/* <div className="progress">
              <span className="skill">React Js</span>
              <progress id="file" value="80" max="100" style={{marginRight:"5px"}}> 80% </progress>
              <i className="val">80%</i>
            </div> */}
            <div className="progress">
              <span className="skill">Python</span>
              <progress id="file" value="90" max="100" style={{marginRight:"5px"}}> 90% </progress>
              <i className="val">90%</i>
            </div>
            <div className="progress">
              <span className="skill">PyQt</span>
              <progress id="file" value="90" max="100" style={{marginRight:"5px"}}> 90% </progress>
              <i className="val">90%</i>
            </div>
          </div>

          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">

            {/* <div className="progress">
              <span className="skill">Node Js</span>
              <progress id="file" value="80" max="100" style={{marginRight:"5px"}}> 80% </progress>
              <i className="val">80%</i>
            </div> */}

            {/* <div className="progress">
              <span className="skill">MongoDb</span>
              <progress id="file" value="80" max="100" style={{marginRight:"5px"}}> 80% </progress>
              <i className="val">80%</i>
            </div> */}

            {/* <div className="progress">
              <span className="skill">React Native</span>
              <progress id="file" value="70" max="100" style={{marginRight:"5px"}}> 70% </progress>
              <i className="val">70%</i>
            </div> */}

            <div className="progress">
              <span className="skill">C++</span>
              <progress id="file" value="90" max="100" style={{marginRight:"5px"}}> 90% </progress>
              <i className="val">90%</i>
            </div>
            <div className="progress">
              <span className="skill">C#</span>
              <progress id="file" value="90" max="100" style={{marginRight:"5px"}}> 90% </progress>
              <i className="val">90%</i>
            </div>
            <div className="progress">
              <span className="skill">Windows Form</span>
              <progress id="file" value="90" max="100" style={{marginRight:"5px"}}> 90% </progress>
              <i className="val">90%</i>
            </div>
          </div>

        </div>

      </div>
    </section>
    <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
          <h2>Resume</h2>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Subhan Anjum</h4>
              <p><em>Passionate computer science student seeking
challenging opportunities in a dynamic environment
that offers room for growth to apply programming
skills and interpersonal capabilities.</em></p>
              <ul>
                <li>Lahore Pakistan</li>
                <li>03177767793</li>
                <li>subhananjum001@gmail.com</li>
                <li><a href="https://www.linkedin.com/in/subhan-anjum-394386237/">LinkedIn Profile</a></li>
                <li><a href="https://github.com/Subhan-Anjum">GitHub</a></li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Bachelors of Computer Science</h4>
              <h5>2021 - 2025</h5>
              <p><em>University of Engineering & Technology, Lahore</em></p>
              <h4>Subjects</h4>
              <p><em>Programming Fundamentals</em></p>
              <p><em>Object Oriented Programming</em></p>
              <p><em>Data Structures</em></p>
              <p><em>Database</em></p>
              <p><em>Operating System</em></p>
              <p><em>Digital Logic Design</em></p>
              <p><em>Computer Organization & Assembly Language</em></p>
            </div>
            <div className="resume-item">
              <h4>Intermediate Pre-Engineering</h4>
              <h5>2019 - 2021</h5>
              <p><em>Punjab Group of Colleges, Gujranwala</em></p>
              <h4>Subjects</h4>
              <p><em>Physics</em></p>
              <p><em>Chemistry</em></p>
              <p><em>Mathematics</em></p>
            </div>
            <div className="resume-item">
              <h4>Matric</h4>
              <h5>2019 - 2021</h5>
              <p><em>Best School System, Gujranwala</em></p>
              <h4>Subjects</h4>
              <p><em>Physics</em></p>
              <p><em>Chemistry</em></p>
              <p><em>Mathematics</em></p>
              <p><em>Biology</em></p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Teacher Assistant (Programming Fundamentals)</h4>
              <h5>December 2022 - Present</h5>
              <a href="https://uet.edu.pk/"><p><em>University Of Engineering & Technology, Lahore</em></p></a>
              <ul>
                <li>Successfully assisted in teaching programming languages to undergraduate
students, resulting in improved academic performance and increased interest
in computer science. </li>
                <li>Led review sessions and provided one-on-one tutoring to students, resulting in
improved exam scores and increased student satisfaction. </li>
                <li>Developed and implemented innovative teaching techniques, such as project- based learning, to facilitate student learning and engagement with
programming concepts.</li>
              </ul>
            </div>
            <div className="resume-item">
            <h3 className="resume-title">Soft Skills</h3>
              <ul>
              <p><em>Responsibility</em></p>
              <p><em>Creativity</em></p>
              <p><em>Leadership</em></p>
              <p><em>Problem Solving</em></p>
              <p><em>Proactivity</em></p>
              <p><em>Adaptibility</em></p>
              </ul>
            </div>
            {/* <div className="resume-item">
              <h4>Co-Lead Flutter Developement</h4>
              <h5>December 2022 - Present</h5>
              <a href="https://gdsc.community.dev/university-of-engineering-and-technology-uet-lahore-campus/"><p><em>Google Developer Student Club UET</em></p></a>
              <ul>
                <li>As a Co-Lead Development at Google Developer Student Club Uet, I am passionate about teaching and learning about Flutter. My role involves equipping students with the skills and knowledge needed to develop innovative, high-quality mobile applications.</li>
              </ul>
            </div> */}
          </div>
          
        </div>
        <section id="projects" className='projects'>
        <div className="section-title">
        <h2>Projects</h2>
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>Learning Management System - Desktop Application</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://github.com/Subhan-Anjum/LearningManagementSystem.git" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>February 2023-March 2023</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>Learning Management System is a desktop Application built using C# and Sql using visual studio 2019. It is just like the LMS of any university which allows to Manage Student's data, Attendances and Assessments.</p>
        <br /><br />
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>Drugs Distribution System - Desktop Application</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://github.com/Subhan-Anjum/DDMS.git" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>October 2022-November 2022</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>Drugs Distribution Management System is made in Python using editor PYQT-5 and Visual Studio Code with the approach of Object Oriented Programming(OOP). This Desktop Application is benefecial for Drugs Supplier as well as Manager. Each of them has their own personal access and Rider has to distribute the required medicines. It also uses a google map which is a user friendly to see the routes of the desired locations.</p>
        <br /><br />
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>Airline Management System - Console Application</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://github.com/Subhan-Anjum/AirlineManagement.git" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>September 2022-October 2022</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>Airline Management System is a console based application made in c++ using data structures like stack, queue etc. It helps to Manage flights and bookings of the passengers.</p>
        <br /><br />
        </div>
        </section> 

        <section id="certificates" className='certificates'>
        <div className="section-title">
        <h2>Certificates</h2>
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>SQL Intermediate Certificate - By HackerRank</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://www.hackerrank.com/certificates/c9eeda803fc1" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>Feb 2023</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>Microsoft SQL Server · SQL Server Management Studio · Transact-SQL (T-SQL) · MySQL</p>
        <br />
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>Python Basic Certificate - By HackerRank</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://www.hackerrank.com/certificates/4bd7c4ffa626" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>Feb 2023</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>Python Certificate of a basic level</p>
        <br />
        <h4 style={{textAlign:"left",padding:"20px",fontWeight:"bold",color:"navy"}}>Typing Certificate</h4>
        <p style={{textAlign:"justify",paddingLeft:"20px"}}><a href="https://www.ratatype.com/u5893605/certificate/" >CHECK HERE</a></p>
        <h5 style={{textAlign:"left",paddingLeft:"20px",fontWeight:"bold"}}>March 2023</h5>
        <p style={{textAlign:"justify",paddingLeft:"20px",paddingRight:"20px"}}>30 WPM with 96.9% Accuracy</p>
        </div>
        </section> 
      </div>
    </section>
  </main>
    </div>
  );
}

export default App;
