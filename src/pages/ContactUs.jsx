// src/pages/ContactUs.jsx
import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../assets/scss/pages/contact-us.scss';

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      <section className="contact-hero">
        <Container>
          <Row>
            <Col>
              <h1>Contact Us</h1>
              <p className="lead">
                Get in touch with our team to discuss how we can help your business
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="contact-content">
        <Container>
          <Row className="mb-5">
            <Col lg={6}>
              <h2>Send Us a Message</h2>
              <Form>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formFirstName">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your first name" />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group controlId="formLastName">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your last name" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formPhone" className="mb-3">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="tel" placeholder="Enter your phone number" />
                </Form.Group>

                <Form.Group controlId="formService" className="mb-3">
                  <Form.Label>Service Interest</Form.Label>
                  <Form.Select>
                    <option>Select a service</option>
                    <option>IT Solutions</option>
                    <option>BPO Services</option>
                    <option>HR Outsource</option>
                    <option>Business Consultancy</option>
                    <option>Other</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group controlId="formMessage" className="mb-3">
                  <Form.Label>Your Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="How can we help you?" />
                </Form.Group>

                <Button variant="primary" type="submit">
                  Submit Message
                </Button>
              </Form>
            </Col>

            <Col lg={6}>
              <div className="contact-info">
                <h2>Contact Information</h2>
                <div className="info-item">
                  <h3>Headquarters</h3>
                  <p>123 Business Avenue, Suite 500</p>
                  <p>New York, NY 10001</p>
                  <p>United States</p>
                </div>

                <div className="info-item">
                  <h3>Phone</h3>
                  <p>+1 (800) 123-4567</p>
                </div>

                <div className="info-item">
                  <h3>Email</h3>
                  <p>info@farsightsolutions.com</p>
                </div>

                <div className="info-item">
                  <h3>Office Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </Col>
          </Row>

          <Row>
            <Col>
              <div className="map-container">
                <h2 className="text-center mb-4">Our Locations</h2>
                <div className="map-placeholder">
                  {/* Map integration would go here */}
                  <p>Map of our office locations</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ContactUs;