import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! This is a demo so the form doesn't actually send a message.");
  };

  return (
    <div className="contact-page animate-fade-in">
      <div className="page-header">
        <div className="container">
          <h1>Say Hello!</h1>
          <p>We'd love to hear from you. Drop us a line or visit our store.</p>
        </div>
      </div>

      <div className="container section">
        <div className="contact-wrapper">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p className="contact-intro">Whether you have a question about our flavors, dietary options, or catering services, our team is ready to answer all your questions.</p>
            
            <div className="info-items">
              <div className="info-item">
                <MapPin className="info-icon" />
                <div>
                  <h4>Visit Us</h4>
                  <p>123 Sweet Street<br />Candy City, CC 12345</p>
                </div>
              </div>
              
              <div className="info-item">
                <Phone className="info-icon" />
                <div>
                  <h4>Call Us</h4>
                  <p>(555) 123-4567</p>
                </div>
              </div>
              
              <div className="info-item">
                <Mail className="info-icon" />
                <div>
                  <h4>Email Us</h4>
                  <p>hello@frostydelights.com</p>
                </div>
              </div>
              
              <div className="info-item">
                <Clock className="info-icon" />
                <div>
                  <h4>Opening Hours</h4>
                  <p>Mon - Sun: 11:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2>Send a Message</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" placeholder="How can we help?" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Your message here..." required></textarea>
              </div>
              
              <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
            </form>
          </div>
        </div>
        
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus" 
            width="100%" 
            height="400" 
            style={{ border: 0, borderRadius: 'var(--radius-lg)' }} 
            allowFullScreen="" 
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
