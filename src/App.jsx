import React from 'react';
import './App.css';
import myPhoto from './assets/ayesha_photo.jpeg'; // ඔයාගේ photo එක assets එකට දාන්න
import myCV from './assets/New CV.pdf'; // CV එක assets එකට දාන්න

function App() {
  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="nav-logo">Ayesha Abeysinghe</div>
        <div className="nav-menu">
          <a href="#about">ABOUT</a>
          <a href="#projects">PROJECT</a>
          <a href="#education">EDUCATION</a>
          <a href="#certificates">CERTIFICATES</a>
          <a href="#contact">CONTACT</a>
        </div>
        <a href={myCV} download className="download-cv">
          <span>⬇</span> DOWNLOAD CV
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-img-box">
            <img src={myPhoto} alt="Ayesha" />
          </div>
          <div className="hero-content">
  <h1>Hello<span>!</span></h1>
  <p className="hero-intro">
    I'm <strong>Ayesha Abeysinghe</strong>. IT Undergraduate at SLIIT 
    & passionate Full-Stack and Mobile Developer. 
    Welcome to my personal portfolio!
  </p>
            <div className="hero-actions">
              <button className="btn-dark">EXPLORE PROJECTS</button>
              <button className="btn-outline">GET IN TOUCH</button>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
  <div className="about-container">
    {/* Left Side: Text Content */}
    <div className="about-left">
      <div className="section-header-mini">
        <span className="line"></span>
        <span className="section-num">01 — ABOUT ME</span>
      </div>
      
      <h2 className="about-title">
        Crafting <i className="italic-text">digital</i> experiences
      </h2>
      <p className="about-subtitle">
        A creative developer with a passion for beautiful, functional software.
      </p>

      <div className="about-description">
        <p>I'm a 3rd-year BSc (Hons) Information Technology undergraduate at SLIIT, passionate about building practical software that solves real problems.</p>
        <p>From mobile apps in Kotlin to full-stack web systems using the MERN stack, I enjoy the full journey — from UI/UX design in Figma to backend logic and database management.</p>
        <p>I thrive in collaborative environments, lead with initiative, and am always seeking to grow through hands-on projects and new challenges.</p>
      </div>

      {/* Stats Row */}
      <div className="about-stats">
        <div className="stat-item">
          <h3>7+</h3>
          <p>PROJECTS</p>
        </div>
        <div className="stat-item">
          <h3>8+</h3>
          <p>CERTIFICATES</p>
        </div>
        <div className="stat-item">
          <h3>3rd</h3>
          <p>YEAR</p>
        </div>
      </div>
    </div>

    {/* Right Side: Tech & Soft Skills Card */}
    <div className="skills-card">
      <div className="skills-group">
        <h4>Tech Skills</h4>
        <div className="tags-container">
          <span className="tag-outline">MERN Stack</span>
          <span className="tag-outline">Kotlin</span>
          <span className="tag-outline">Android Studio</span>
          <span className="tag-filled">Figma</span>
          <span className="tag-white">JavaScript</span>
          <span className="tag-white">Java</span>
          <span className="tag-white">Python</span>
          <span className="tag-white">HTML/CSS</span>
          <span className="tag-white">C/C++</span>
          <span className="tag-white">MySQL</span>
          <span className="tag-white">MongoDB</span>
          <span className="tag-white">Oracle DB</span>
          <span className="tag-white">PHP</span>
          <span className="tag-white">Playwright</span>
        </div>
      </div>

      <div className="skills-group" style={{marginTop: '30px'}}>
        <h4>SOFT SKILLS</h4>
        <div className="tags-container">
          <span className="tag-white">Leadership</span>
          <span className="tag-white">Teamwork & Communication</span>
          <span className="tag-white">Problem Solving</span>
          <span className="tag-white">Critical Thinking</span>
          <span className="tag-white">Attention to Detail</span>
          <span className="tag-white">Time Management </span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Education Timeline */}
      <section id="education" className="education-section">
        <div className="section-header">
          <span className="section-num">03 — EDUCATION</span>
          <h2>My <i>learning</i> journey</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item">
            <span className="year">2023 - PRESENT</span>
            <h4>BSc (Hons) Information Technology</h4>
            <p>SLIIT University, Sri Lanka</p>
          </div>
          <div className="timeline-item">
            <span className="year">2024</span>
            <h4>Diploma in English</h4>
            <p>LPEC Campus</p>
          </div>
          <div className="timeline-item">
            <span className="year">2021</span>
            <h4>G.C.E. Advanced Level</h4>
            <p>G/Vidyaraja National School, Thawalama</p>
          </div>
          <div className="timeline-item">
            <span className="year">2018</span>
            <h4>G.C.E. Ordinary Level</h4>
            <p>G/Vidyaraja National School, Thawalama</p>
          </div>
        </div>
      </section>

      {/* Certificates Section */}
<section id="certificates" className="certificates-section">
  <div className="section-header-mini">
    <span className="line"></span>
    <span className="section-num">04 — CERTIFICATIONS</span>
  </div>
  <h2 className="section-title">Certificates & <i>Achievements</i></h2>

  <div className="cert-grid">
    {/* Certificate 1 */}
    <div className="cert-card">
      <div className="cert-badge">NYC</div>
      <div className="cert-icon">🏆</div>
      <h4>Leadership & Personality Development</h4>
      <p>Successfully completed at National Youth Corps Training Center (NYC)</p>
    </div>

    {/* Certificate 2 */}
    <div className="cert-card">
      <div className="cert-badge">British English</div>
      <div className="cert-icon">🗣️</div>
      <h4>Spoken English & Grammar</h4>
      <p>British English Academy - Spoken & Grammar Course</p>
    </div>

    {/* Certificate 3 */}
    <div className="cert-card">
      <div className="cert-badge">NVQ Level 4</div>
      <div className="cert-icon">💻</div>
      <h4>ICT Technician (NVQ 4)</h4>
      <p>Vocational Training Authority of Sri Lanka</p>
    </div>

    {/* Certificate 4 */}
    <div className="cert-card">
      <div className="cert-badge">LPEC</div>
      <div className="cert-icon">🎓</div>
      <h4>Diploma in English</h4>
      <p>English Diploma - LPEC Campus</p>
    </div>

    {/* Certificate 5 */}
    <div className="cert-card">
      <div className="cert-badge">UI/UX</div>
      <div className="cert-icon">🎨</div>
      <h4>UI/UX Design with Figma</h4>
      <p>DP Education Sri Lanka - 2026</p>
    </div>

    {/* Certificate 6 */}
    <div className="cert-card">
      <div className="cert-badge">UoM</div>
      <div className="cert-icon">🌐</div>
      <h4>Web Design for Beginners</h4>
      <p>University of Moratuwa - Open Learning</p>
    </div>

    {/* Certificate 7 */}
    <div className="cert-card">
      <div className="cert-badge">Simplilearn</div>
      <div className="cert-icon">⚛️</div>
      <h4>ReactJS Components</h4>
      <p>Simplilearn - 2026</p>
    </div>
  </div>
</section>

      {/* Projects Section */}
    <section id="projects" className="projects-section">
  <div className="section-header">
    <span className="section-num">02 — MY PROJECTS</span>
    <h2>Latest <i>Featured</i> Work</h2>
  </div>

  <div className="projects-grid">
    {/* Project 1 */}
    <div className="project-card">
      <div className="project-info">
        <span className="project-category">Mobile App / Kotlin</span>
        <h3>Wholesale Veggies & Fruits Marketplace</h3>
        <p>A fully functional Android app for buying and selling fresh produce wholesale. Designed the UI in Figma and built with Kotlin — featuring product listings, cart logic, and smooth UX.</p>
        <div className="project-tags">
          <span>Kotlin</span> <span>Android Studio</span> <span>Figma</span>
        </div>
      </div>
    </div>

    {/* Project 2 */}
    <div className="project-card">
      <div className="project-info">
        <span className="project-category">Web App / MERN</span>
        <h3>Hotel Reservation System</h3>
        <p>Developed a web based and hotel reservation system with booking , database storage and responsive UI.</p>
        <div className="project-tags">
          <span>HTML</span> <span>CSS</span> <span>JavaScript</span> <span>PHP</span> <span>MySQL</span>
        </div>
      </div>
    </div>

        {/* Project 3 */}
    <div className="project-card">
      <div className="project-info">
        <span className="project-category">Mobile App / Kotlin</span>
        <h3>Daily Habit Tracker & Mood journal with Emoji selector & Hydration Reminder -Mobile Application</h3>
        <p>Design and implement an interactive mobile app to manage the daily health routines of users.</p>
        <div className="project-tags">
          <span>Kotlin</span> <span>Android Studio</span>
        </div>
      </div>
    </div>

        {/* Project 4 */}
    <div className="project-card">
      <div className="project-info">
        <span className="project-category">Web App / MERN</span>
        <h3>Rent a Car System</h3>
        <p>Successfully built a system for vehicle booking, agreement management, and database storage.</p>
        <div className="project-tags">
          <span>MERN Stack</span> <span>Responsive UI</span>
        </div>
      </div>
    </div>

        {/* Project 5 */}
    <div className="project-card">
      <div className="project-info">
        <span className="project-category">Java / OOP</span>
        <h3>Online Customer Care System</h3>
        <p>Auction platform with user management and customer care logic using OOP concepts.</p>
        <div className="project-tags">
          <span>Java</span> <span>MySQL</span>
        </div>
      </div>
    </div>

            {/* Project 6 */}
    <div className="project-card">
      <div className="project-info">
        <span className="project-category">Web App / MERN - Present</span>
        <h3>Hostel Management System</h3>
        <p>Digital hostel management for university students with admin tools and automated testing.</p>
        <div className="project-tags">
          <span>React</span> <span>Node.js</span> <span>MongoDB</span> <span>Playwright</span>
        </div>
      </div>
    </div>

            {/* Project 7 */}
    <div className="project-card">
      <div className="project-info">
        <span className="project-category">Web App / MERN - Present </span>
        <h3>Smart Campus Operation Hub</h3>
        <p>A comprehensive platform for managing various campus operations with admin tools and automated testing.</p>
        <div className="project-tags">
          <span>React</span> <span>Java</span> <span>Spring Boot</span> <span>Playwright</span>
        </div>
      </div>
    </div>
    
  </div>
</section>

{/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-header">
          <span className="section-num">05 — CONTACT</span>
          <h2>Let's <i>work</i> together</h2>
          <p>I'm currently available for freelance work or internship opportunities.</p>
        </div>

        <div className="contact-container">
          <div className="contact-info-card">
            <h3>Contact Details</h3>
            <div className="info-item">
              <span className="icon">📧</span>
              <div>
                <label>Email Me</label>
                <p>dilandiayesha@gmail.com</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">📞</span>
              <div>
                <label>Call Me</label>
                <p>+94 71 039 4976</p>
              </div>
            </div>
            <div className="info-item">
              <span className="icon">📍</span>
              <div>
                <label>Location</label>
                <p>Galle, Sri Lanka</p>
              </div>
            </div>
          </div>

          <div className="social-connect-card">
            <h3>Follow Me</h3>
            <p>Stay connected through my professional social networks.</p>
            <div className="social-buttons">
              <a href="https://www.linkedin.com/in/ayesha-abeysinghe-882b5b356/" target="_blank" className="social-btn linkedin">LinkedIn</a>
              <a href="https://github.com/AyeshaDulanjali" target="_blank" className="social-btn github">GitHub</a>
              <a href="mailto:dilandiayesha@gmail.com" className="social-btn email">Send Email</a>
            </div>
          </div>
        </div>
      </section>

{/* Footer Bar */}

      <footer className="footer-new">
  <div className="footer-main">
    <div className="footer-left">
      <p>© 2026 All rights reserved.</p>
    </div>
    
    <div className="footer-center">
      <h2 className="footer-logo">Ayesha Abeysinghe</h2>
    </div>

    <div className="footer-right">
      <p>BSc (Hons) IT • SLIIT • Sri Lanka</p>
    </div>
  </div>
</footer>
    </div>
  );
}

export default App;