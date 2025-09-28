import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import '../../assets/scss/pages/home.scss';
import backgroundVideo from '/assets/videos/jointeam.mp4';

const JoinOurTeamSection = () => {
  return (
    <section className="join-team-wrapper">
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
      </div>
      <Container fluid className="join-team-content">
        <Row className="align-items-center text-center text-lg-start">
          <Col lg={8}>
            <h2 className="join-heading">Shape the Future with Us</h2>
            <p className="join-description">
              Join a team of innovators and professionals dedicated to driving
              impactful solutions and empowering businesses worldwide.
            </p>
          </Col>
          <Col lg={4} className="button-col">
            <Button as={Link} to="/careers" className="join-button">
              Join Now
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default JoinOurTeamSection;
