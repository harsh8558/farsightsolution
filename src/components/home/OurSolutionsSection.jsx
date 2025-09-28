import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import '../../assets/scss/pages/home.scss';

const OurSolutionsSection = () => {
  const solutions = [
    {
      title: "Advanced BPO Services",
      description: "Farsight Solutions boosts efficiency and elevates customer experience with our cutting-edge BPO services tailored for growth-focused businesses.",
    },
    {
      title: "HR Outsource Solutions",
      description: "Optimize your recruitment with Farsight Solutions' flexible HR outsourcing that scales seamlessly with your business needs.",
    },
    {
      title: "Comprehensive IT Solutions",
      description: "From web hosting to full product development, Farsight Solutions delivers robust, future-ready IT infrastructure and services.",
    },
    {
      title: "Strategic Business Consultancy",
      description: "Farsight Solutions provides the strategic insights to help you navigate complex market landscapes with confidence.",
    },
    {
      title: "Legal Process Outsourcing (LPO)",
      description: "Farsight Solutions ensures compliance and reduces risk with expert legal process outsourcing services.",
    },
    {
      title: "Financial Process Outsourcing (FPO)",
      description: "Farsight Solutions manages your financial operations with precision, ensuring stability and sustainable growth.",
    },
  ]

  return (
    <div className="solutions-section">
      <Container>
        <div className="solutions-header">
          <h2 className="solutions-title">Our Solutions</h2>
          <h3 className="solutions-subtitle">Future-Ready Solutions from Farsight Solutions</h3>
          <p className="solutions-description">
            At Farsight Solutions, we go beyond short-term fixes to design comprehensive solutions that evolve with your business needs.
          </p>
          <Button className="solutions-button">Discover Farsight Solutions</Button>
        </div>

        <Row className="solutions-grid">
          {solutions.map((solution, index) => (
            <Col lg={4} md={6} sm={12} key={index} className="solution-col">
              <div className="solution-card">
                <h4 className="card-title">{solution.title}</h4>
                <p className="card-description">{solution.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default OurSolutionsSection