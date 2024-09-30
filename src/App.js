import React, { useState } from 'react';
import './App.css';
import emailjs from 'emailjs-com';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',  // New phone field
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Using AJAX to send form data without page reload
    emailjs.send('service_18x7klk', 'template_viquzas', formData, 'T80ZgSFuuszS_es85')
      .then((response) => {
        setSuccessMessage('Message sent successfully!');
        setErrorMessage('');
        setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form after submission
      }, (err) => {
        setErrorMessage('Failed to send message, please try again.');
        setSuccessMessage('');
      });
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="hero-section">
        <div className="hero-content text-center">
          <h1>Niranjan Patil</h1>
          <p>Analytics Implementation Specialist</p>
          <a href="#contact">
            <button className="btn btn-primary btn-lg">Get In Touch</button>
          </a>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="section bg-light">
        <div className="container">
          <h2>About Me</h2>
          <p>
            Hi, I'm Niranjan Patil, a Digital Analyst and Analytics Implementation Specialist with almost three years of hands-on experience in e-commerce, lead generation, and insurance.
          </p>
        </div>
      </section>

      {/* Professional Experience Section */}
      <section id="experience" className="section">
        <div className="container">
          <h2>Professional Experience</h2>
          <div className="row">
            <div className="col-md-6">
              <h3>Analytics Implementation Specialist, DataVinci Pvt</h3>
              <p>03/2022 - Present, Pune</p>
              <p>
                GA4 implementation for Web and App, Analysis, and Reporting.
                Implemented Facebook CAPI, Consent Mode, Google Enhanced Conversion, Server-side tracking.
                Specialized in Tealium IQ/EventStream, GA4 tagging, Facebook CAPI, Offline to Online conversions for Google Ads.
              </p>
            </div>
            <div className="col-md-6">
              <h3>Application Development Associate, Accenture Pvt Ltd</h3>
              <p>07/2021 - 03/2022, Pune</p>
              <p>
                Collaborated with SAP COE team to manage storefront content and resolve CDC issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section bg-light">
        <div className="container">
          <h2>Skills</h2>
          <div className="row text-center">
            <div className="col-md-4">
              <i className="fas fa-chart-line fa-2x"></i>
              <p>Google Analytics</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-code fa-2x"></i>
              <p>Web Development (HTML, CSS, JS, React)</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-database fa-2x"></i>
              <p>Data Analytics</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-tags fa-2x"></i>
              <p>Google Tag Manager</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-experiment fa-2x"></i>
              <p>A/B Testing, Google Optimize</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2>Contact Me</h2>
          <form onSubmit={handleSubmit} className="text-center">
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
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
          {successMessage && <p className="text-success mt-3">{successMessage}</p>}
          {errorMessage && <p className="text-danger mt-3">{errorMessage}</p>}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-5">
        <div className="container">
          <h2>Contact Me</h2>
          <p>Mobile: +91-9422391312</p>
          <p>Email: <a href="mailto:niranjanpatil391312@gmail.com" className="text-white">niranjanpatil391312@gmail.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/niranjan1911" className="text-white">linkedin.com/in/niranjan1911</a></p>
        </div>
      </footer>
    </div>
  );
}

export default App;
