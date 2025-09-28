// src/pages/Products.jsx
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../assets/scss/pages/products.scss';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Farsight CRM',
      category: 'Business Software',
      description: 'Comprehensive customer relationship management solution with AI-powered analytics.'
    },
    {
      id: 2,
      name: 'TalentLink',
      category: 'HR Technology',
      description: 'End-to-end recruitment and talent management platform.'
    },
    {
      id: 3,
      name: 'OptiFlow',
      category: 'Process Automation',
      description: 'Workflow automation tool that streamlines business processes.'
    },
    {
      id: 4,
      name: 'SecureVault',
      category: 'Data Security',
      description: 'Enterprise-grade data protection and compliance solution.'
    },
    {
      id: 5,
      name: 'MarketInsight',
      category: 'Analytics',
      description: 'Real-time market intelligence and competitive analysis platform.'
    },
    {
      id: 6,
      name: 'ConnectHub',
      category: 'Collaboration',
      description: 'Unified communication and team collaboration software.'
    }
  ];

  return (
    <div className="products-page">
      <section className="products-hero">
        <Container>
          <Row>
            <Col>
              <h1>Our Products</h1>
              <p className="lead">
                Innovative solutions designed to solve real business challenges
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="products-content">
        <Container>
          <Row>
            <Col>
              <h2 className="text-center mb-5">Product Portfolio</h2>
              <Row>
                {products.map((product) => (
                  <Col lg={4} md={6} key={product.id} className="mb-4">
                    <Card className="product-card">
                      <div className="product-image"></div>
                      <Card.Body>
                        <Card.Subtitle className="mb-2">{product.category}</Card.Subtitle>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.description}</Card.Text>
                        <button className="demo-button">Request Demo</button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Products;