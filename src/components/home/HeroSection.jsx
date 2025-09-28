import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../assets/scss/pages/home.scss';

const HeroSection = () => {
  return (
    <section className="farsight-fullbg-hero">
      <div className="farsight-hero-overlay">
        <Container>
          <Row className="farsight-hero-row">
            <Col lg={8} className="farsight-hero-content-col ms-auto">
              <motion.div 
                className="farsight-hero-content text-end"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.h1 
                  className="farsight-hero-title"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 1 }}
                >
                  {"Innovative ".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.03 }}
                      style={{ display: "inline-block" }}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <span className="farsight-hero-title-accent">
                    {"Solutions".split("").map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.03 }}
                        style={{ display: "inline-block", color: "#ff6b35" }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                  {" for Your Digital Transformation"}
                </motion.h1>

                <motion.p 
                  className="farsight-hero-description"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  Farsight Solutions delivers cutting-edge IT services and business solutions to help your organization thrive in the digital age.
                </motion.p>

                <motion.div 
                  className="farsight-hero-buttons justify-content-end"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                >
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: "inline-block" }}>
                    <Button as={Link} to="/contact-us" className="farsight-primary-btn">
                      Get Started
                    </Button>
                  </motion.div>

                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: "inline-block", marginLeft: "12px" }}>
                    <Button as={Link} to="/about-farsight" className="farsight-secondary-btn">
                      Learn More
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
