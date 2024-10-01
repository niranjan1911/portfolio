import React, { useState, useEffect } from 'react';
import './App.css';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaArrowDown, FaContao, FaDownload, FaPhone, FaPhoneSquare, FaVoicemail } from 'react-icons/fa';
import { FaChartLine, FaCode, FaDatabase, FaTags, FaFlask } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  // Sticky Navbar Effect
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector('nav');
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const smoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href').substring(1);
    const targetPosition = document.getElementById(targetId).offsetTop - 70;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send('service_18x7klk', 'template_viquzas', formData, 'T80ZgSFuuszS_es85')
      .then(
        (response) => {
          setSuccessMessage('Message sent successfully!');
          setErrorMessage('');
          setFormData({ name: '', email: '', phone: '', message: '' });
        },
        (err) => {
          setErrorMessage('Failed to send message, please try again.');
          setSuccessMessage('');
        }
      );
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            Niranjan Patil
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={smoothScroll}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#experience" onClick={smoothScroll}>
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills" onClick={smoothScroll}>
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={smoothScroll}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header Section with Profile Picture */}
      <header className="hero-section">
        <div className="hero-content text-center">
          {/* <img src="/profile.jpg" alt="Profile" className="profile-picture" /> */}
          <h1 data-aos="fade-down">Niranjan Patil</h1>
          <p data-aos="fade-up">Analytics Implementation Specialist</p>
          <a href="/resume.pdf" download>
            <button className="btn btn-primary btn-lg" data-aos="zoom-in" style={{ marginRight: '20px' }}>
              Download Resume <FaDownload />
            </button>
          </a>
          <a href="#contact">
            <button className="btn btn-primary btn-lg" data-aos="zoom-in">Get In Touch <FaPhoneSquare/></button>
          </a>
        </div>
        <div className="scroll-indicator">
          <FaArrowDown />
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section bg-light">
        <div className="container">
          <h2 data-aos="fade-in">About Me</h2>
          <p data-aos="fade-up">
            Hi, I'm Niranjan Patil, a Digital Analyst and Analytics Implementation Specialist with almost three years of hands-on experience in e-commerce, lead generation, and insurance.
          </p>
        </div>
      </section>

      {/* Professional Experience Section with Enhanced Cards */}
      <section id="experience" className="section">
        <div className="container">
          <h2 data-aos="fade-in">Professional Experience</h2>
          <div className="row">
            <div className="col-md-6" data-aos="fade-right">
              <div className="card advanced-experience-card">
                <div className="card-body">
                  <h3>Analytics Implementation Specialist</h3>
                  <h4>DataVinci Pvt</h4>
                  <p>03/2022 - Present, Pune</p>
                  <p>
                    GA4 implementation for Web and App, Analysis, and Reporting. Implemented Facebook CAPI, Consent Mode, Google Enhanced Conversion, Server-side tracking.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6" data-aos="fade-left">
              <div className="card advanced-experience-card">
                <div className="card-body">
                  <h3>Application Development Associate</h3>
                  <h4>Accenture Pvt Ltd</h4>
                  <p>07/2021 - 03/2022, Pune</p>
                  <p>Collaborated with SAP COE team to manage storefront content and resolve CDC issues.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section bg-light">
        <div className="container">
          <h2 data-aos="fade-in">Skills</h2>
          <div className="row text-center">
            <div className="col-md-4" data-aos="zoom-in">
              <div className="skills-icon">
                <FaChartLine />
              </div>
              <p>Google Analytics</p>
            </div>
            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="100">
              <div className="skills-icon">
                <FaCode />
              </div>
              <p>Web Development (HTML, CSS, JS, React)</p>
            </div>
            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="200">
              <div className="skills-icon">
                <FaDatabase />
              </div>
              <p>Data Analytics</p>
            </div>
            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="300">
              <div className="skills-icon">
                <FaTags />
              </div>
              <p>Google Tag Manager</p>
            </div>
            <div className="col-md-4" data-aos="zoom-in" data-aos-delay="400">
              <div className="skills-icon">
                <FaFlask />
              </div>
              <p>A/B Testing, Google Optimize</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 data-aos="fade-in">Contact Me</h2>
          <form onSubmit={handleSubmit} className="text-center" data-aos="fade-up">
            <div className="mb-3">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                name="phone"
                className="form-control"
                placeholder="Your Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                name="message"
                className="form-control"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </form>
          {successMessage && <p className="text-success mt-3">{successMessage}</p>}
          {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center">
        <div className="container">
          <h2>Contact Me</h2>
          <p>Mobile: +91-9422391312</p>
          <p>
            Email:{' '}
            <a href="mailto:niranjanpatil391312@gmail.com" className="text-white">
              niranjanpatil391312@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{' '}
            <a href="https://linkedin.com/in/niranjan1911" className="text-white">
              linkedin.com/in/niranjan1911
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
