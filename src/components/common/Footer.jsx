// src/components/common/Footer.jsx
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import '../../assets/scss/components/_footer.scss';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
    setEmail('');
  };

  return (
    <footer className="main-footer">
      {/* Newsletter Section */}
      <div className="newsletter-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} md={12}>
              <div className="newsletter-content">
                <h3>Get updated Informed to Subscribe our Newsletter</h3>
              </div>
            </Col>
            <Col lg={6} md={12}>
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <div className="input-group">
                  <input
                    type="email"
                    className="newsletter-input"
                    placeholder="Your e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button type="submit" className="newsletter-btn">
                    Subscribe Now
                  </button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Main Footer Content */}
      <div className="footer-content">
        <Container>
          <Row className="g-4">
            <Col lg={4} md={6}>
              <div className="footer-section company-info">
                <div className="company-logo">
                  <img src={logo} alt="Farsight Solutions" className="logo-img" />
                </div>
                <p className="company-description">
                  At Farsight Solutions, we provide full-spectrum services combining technology-driven solutions with industry expertise to help businesses scale sustainably.
                </p>
              </div>
            </Col>
            
            <Col lg={4} md={6}>
              <div className="footer-section">
                <h5 className="footer-title">Quick Link</h5>
                <nav className="footer-nav">
                  <Link to="/about-farsight" className="footer-link">About Company</Link>
                  <Link to="/blogs" className="footer-link">Blogs</Link>
                  <Link to="/career" className="footer-link">Career</Link>
                  <Link to="/contact-us" className="footer-link">Contact Us</Link>
                  <Link to="/legal-compliance" className="footer-link">Legal & Compliance (LPO)</Link>
                  <Link to="/financial-services" className="footer-link">Financial Services (FPO)</Link>
                  <Link to="/business-consultancy" className="footer-link">Business Consultancy</Link>
                </nav>
              </div>
            </Col>
            
            <Col lg={4} md={12}>
              <div className="footer-section">
                <h5 className="footer-title">Office Address</h5>
                <div className="address-info">
                  <div className="address-item">
                    <i className="location-icon"></i>
                    <p>Your Office Address Line 1<br />Your City, State, Country - PIN</p>
                  </div>
                  <div className="address-item">
                    <i className="location-icon"></i>
                    <p>Your Office Address Line 2<br />Your City, State, Country - PIN</p>
                  </div>
                </div>
                
                <div className="social-links">
                  <a href="#" className="social-link facebook" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="social-link instagram" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href="#" className="social-link linkedin" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="social-link twitter" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="social-link youtube" aria-label="YouTube">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <div className="copyright-text">
                © {new Date().getFullYear()} <span>Farsight Solutions</span> | All Rights Reserved by <span>Farsight Solutions</span>
              </div>
            </Col>
            <Col md={6}>
              <div className="footer-policies">
                <Link to="/terms-conditions" className="policy-link">Terms & Conditions</Link>
                <Link to="/privacy-policy" className="policy-link">Privacy Policy</Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;