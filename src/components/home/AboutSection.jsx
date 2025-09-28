import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import '../../assets/scss/pages/home.scss';

const AboutSection = () => {
  return (
    <section className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} md={12}>
            <motion.div 
              className="about-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <div className="section-label">
                <motion.span 
                  className="label-icon"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  →
                </motion.span>
                <motion.span 
                  className="label-text"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  ABOUT US
                </motion.span>
              </div>
              
              <h2 className="section-title">
                <TypeAnimation
                  sequence={[
                    'We Create a Culture That Inspires Us To Work Smart Together',
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </h2>
              
              <div className="content-text">
                <motion.p 
                  className="description-paragraph"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  At Farsight Solutions, we believe in leveling the playing field for startups and 
                  emerging businesses. We are a full-spectrum service provider, combining 
                  technology-driven solutions with industry expertise to help our clients scale 
                  sustainably. From advanced BPO services to strategic RPO, IT solutions, 
                  business consultancy, legal and compliance (LPO), and financial services 
                  (FPO), we deliver tailored support designed to meet the unique challenges 
                  faced by modern businesses.
                </motion.p>
                
                <motion.p 
                  className="description-paragraph"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Driven by our purpose to foster long-term growth and our commitment to 
                  innovation, we stand as a partner invested in the success of each client. We 
                  don't just serve businesses; we empower them to thrive independently, free from 
                  the constraints of monopolistic giants. Farsight Solutions: Started to <strong>Serve & 
                  Building More of Us</strong>.
                </motion.p>
              </div>
              
              <Link to="/about" className="read-more-link">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                >
                  <Button className="read-more-btn">
                    Read More →
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </Col>
          
          <Col lg={6} md={12}>
            <motion.div 
              className="about-image-container"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.img 
                src="assets/images/aboutus.png" 
                alt="Team collaboration and business meeting" 
                className="about-main-image"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
              
              <motion.div 
                className="stat-card expert-team"
                initial={{ opacity: 0, x: 50, y: -50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">100+</div>
                <div className="stat-label">
                  Expert Team<br />Members
                </div>
              </motion.div>
              
              <motion.div 
                className="stat-card client-satisfaction"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">150k</div>
                <div className="stat-label">
                  Clients Satisfaction<br />
                  Survey in Consulting<br />
                  Organization
                </div>
              </motion.div>
              
              <motion.div 
                className="stat-card years-experience"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 }}
                viewport={{ once: true }}
              >
                <div className="stat-number">8+</div>
                <div className="stat-label">
                  Years Experience<br />
                  Our Company
                </div>
              </motion.div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
