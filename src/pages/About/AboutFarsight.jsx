"use client";

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  Home,
  Building,
  BarChart2,
  Globe,
  FileText,
  Users,
  Lightbulb,
  Handshake,
  TrendingUp,
  MapPin,
  Headset,
} from 'lucide-react';
import '../../assets/scss/pages/about-farsight.scss'; 
const AboutFarsight = () => {
  return (
    <div className="about-farsight-page">
      {/* Hero Section */}
      <Container fluid className="about-farsight-hero">
        <Row className="w-100 align-items-center justify-content-between">
          <Col md={6} className="about-farsight-hero-content">
            <h1 className="about-farsight-hero-title">
              Know More About <br /> Our Company
            </h1>
            <div className="about-farsight-breadcrumbs">
              <Home size={16} className="about-farsight-breadcrumb-icon" />
              <span className="about-farsight-breadcrumb-text">Home</span>
              <span className="about-farsight-breadcrumb-separator">|</span>
              <span className="about-farsight-breadcrumb-text">About Us</span>
            </div>
          </Col>
          <Col md={6} className="about-farsight-hero-image-container">
            <img
              src="https://razorinfotech.com/assets/img/razor-img/banners/About-banner.webp"
              alt="About Farsight Solution - Leading IT and Business Services Provider"
              width="500"
              height="300"
              className="about-farsight-hero-image"
            />
          </Col>
        </Row>
      </Container>

      {/* Company Overview Section */}
      <Container className="about-farsight-company-overview">
        <Row className="w-100 g-4">
          <Col lg={6} className="about-farsight-company-overview-left">
            <div className="about-farsight-image-grid">
              <div className="about-farsight-image-item">
                <img
                  src="/assets/images/about.jpeg"
                  alt="Farsight Solution Headquarters"
                  width="300"
                  height="200"
                  className="about-farsight-grid-image"
                />
                <div className="about-farsight-experience-box">
                <span className="about-farsight-experience-number">10+</span>
                <span className="about-farsight-experience-text">Years Experience</span>
              </div>
              </div>
              <div className="about-farsight-image-item">
                <img
                  src="/assets/images/about1.webp"
                  alt="Farsight Solution Team Working"
                  width="250"
                  height="150"
                  className="about-farsight-grid-image "
                />
                
              </div>
              
              {/* <div className="about-farsight-experience-box">
                <span className="about-farsight-experience-number">10+</span>
                <span className="about-farsight-experience-text">Years Experience</span>
              </div> */}
            </div>
          </Col>
          <Col lg={6} className="about-farsight-company-overview-right ps-md-5">
            <p className="about-farsight-section-subtitle">KNOW OUR COMPANY</p>
            <h2 className="about-farsight-section-title">
              Farsight Solution Delivers Premium Business Technology Services
            </h2>
            <p className="about-farsight-content-text">
              At Farsight Solution, we transform business challenges into opportunities through innovative technology solutions. 
              As a leading provider of IT services, HR outsourcing, and advanced BPO solutions, we empower organizations to 
              achieve operational excellence. Our expert team combines technical expertise with strategic insight to deliver 
              customized solutions that drive growth, efficiency, and competitive advantage. From small businesses to enterprise 
              clients, Farsight Solution provides the tools and support needed to navigate today's digital landscape with confidence.
            </p>
            <div className="about-farsight-stats-row">
              <div className="about-farsight-stat-box">
                <p className="about-farsight-stat-label">SUCCESS PROJECT</p>
                <p className="about-farsight-stat-value">+97%</p>
              </div>
              <div className="about-farsight-stat-box">
                <p className="about-farsight-stat-label">CLIENT SATISFACTION</p>
                <p className="about-farsight-stat-value">+4.8</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Vision, Mission, Purpose Section */}
      <Container fluid className="about-farsight-vmp-section">
        <Row className="w-100 justify-content-around g-4">
          <Col md={3} className="about-farsight-vmp-card">
            <div className="about-farsight-vmp-icon-wrapper">
              <BarChart2 size={48} className="about-farsight-vmp-icon" />
            </div>
            <h3 className="about-farsight-vmp-title">Vision</h3>
            <p className="about-farsight-content-text">
              Farsight Solution envisions a business ecosystem where technology creates equal opportunities, 
              enabling organizations of all sizes to compete and thrive in the digital economy through 
              innovative, accessible solutions.
            </p>
          </Col>
          <Col md={3} className="about-farsight-vmp-card">
            <div className="about-farsight-vmp-icon-wrapper">
              <FileText size={48} className="about-farsight-vmp-icon" />
            </div>
            <h3 className="about-farsight-vmp-title">Mission</h3>
            <p className="about-farsight-content-text">
              Our mission is to deliver transformative technology services that simplify operations, 
              reduce costs, and accelerate growth. We combine cutting-edge solutions with exceptional 
              service to help clients focus on their core business objectives.
            </p>
          </Col>
          <Col md={3} className="about-farsight-vmp-card">
            <div className="about-farsight-vmp-icon-wrapper">
              <Globe size={48} className="about-farsight-vmp-icon" />
            </div>
            <h3 className="about-farsight-vmp-title">Purpose</h3>
            <p className="about-farsight-content-text">
              We exist to bridge the technology gap for businesses, providing the tools and expertise 
              needed to compete effectively while maintaining agility and innovation in a rapidly 
              evolving marketplace.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Our Friendly Service Section */}
        <section className="services-section py-5 bg-white">
  <div className="container text-center">
    <p className="section-subtitle text-uppercase">Services</p>
    <h2 className="section-title fw-bold mb-5">
      Farsight Solution's Comprehensive Services
    </h2>

    <div className="row g-5">
      {/* IT Solutions */}
      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop"
            alt="Software Development"
            className="service-image card-img-top"
          />
          <div className="card-body text-center">
            <h5 className="fw-bold service-title">Software Development</h5>
            <p className="text-muted service-description">
              Custom software solutions tailored to business needs.
            </p>
            <a href="/it-solutions/software-development" className="explore-btn">
              <span>Learn More</span>
              <span>Explore →</span>
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
          <img
            src="https://images.unsplash.com/photo-1593642532973-d31b6557fa68?w=400&h=200&fit=crop"
            alt="App Development"
            className="service-image card-img-top"
          />
          <div className="card-body text-center">
            <h5 className="fw-bold service-title">App Development</h5>
            <p className="text-muted service-description">
              Mobile and web apps built with modern technologies.
            </p>
            <a href="/it-solutions/app-development" className="explore-btn">
              <span>Learn More</span>
              <span>Explore →</span>
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
          <img
            src="https://images.unsplash.com/photo-1522199710521-72d69614c702?w=400&h=200&fit=crop"
            alt="Marketing & Branding"
            className="service-image card-img-top"
          />
          <div className="card-body text-center">
            <h5 className="fw-bold service-title">Marketing & Branding</h5>
            <p className="text-muted service-description">
              Creative strategies to build and grow your brand.
            </p>
            <a href="/it-solutions/marketing-branding" className="explore-btn">
              <span>Learn More</span>
              <span>Explore →</span>
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=200&fit=crop"
            alt="Website Development"
            className="service-image card-img-top"
          />
          <div className="card-body text-center">
            <h5 className="fw-bold service-title">Website Development</h5>
            <p className="text-muted service-description">
              High-performing websites that engage and convert.
            </p>
            <a href="/it-solutions/website-development" className="explore-btn">
              <span>Learn More</span>
              <span>Explore →</span>
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
          <img
            src="https://images.unsplash.com/photo-1581090700227-4c4f50b1a0c1?w=400&h=200&fit=crop"
            alt="Web Hosting"
            className="service-image card-img-top"
          />
          <div className="card-body text-center">
            <h5 className="fw-bold service-title">Web Hosting</h5>
            <p className="text-muted service-description">
              Secure, fast, and scalable hosting services.
            </p>
            <a href="/it-solutions/web-hosting" className="explore-btn">
              <span>Learn More</span>
              <span>Explore →</span>
            </a>
          </div>
        </div>
      </div>

      {/* BPO Services */}
      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=200&fit=crop"
            alt="Customer Support"
            className="service-image card-img-top"
          />
          <div className="card-body text-center">
            <h5 className="fw-bold service-title">Customer Support</h5>
            <p className="text-muted service-description">
              24/7 support for enhanced customer satisfaction.
            </p>
            <a href="/bpo-services/customer-support" className="explore-btn">
              <span>Learn More</span>
              <span>Explore →</span>
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop"
            alt="Back Office"
            className="service-image card-img-top"
          />
          <div className="card-body text-center">
            <h5 className="fw-bold service-title">Back Office</h5>
            <p className="text-muted service-description">
              Efficient management of administrative operations.
            </p>
            <a href="/bpo-services/back-office" className="explore-btn">
              <span>Learn More</span>
              <span>Explore →</span>
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=200&fit=crop"
            alt="Content Management"
            className="service-image card-img-top"
          />
          <div className="card-body text-center">
            <h5 className="fw-bold service-title">Content Management</h5>
            <p className="text-muted service-description">
              Organize and optimize business content efficiently.
            </p>
            <a href="/bpo-services/content-management" className="explore-btn">
              <span>Learn More</span>
              <span>Explore →</span>
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
          <img
            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=400&h=200&fit=crop"
            alt="IT Help Desk"
            className="service-image card-img-top"
          />
          <div className="card-body text-center">
            <h5 className="fw-bold service-title">IT Help Desk</h5>
            <p className="text-muted service-description">
              Reliable help desk support for IT operations.
            </p>
            <a href="/bpo-services/it-helpdesk" className="explore-btn">
              <span>Learn More</span>
              <span>Explore →</span>
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
          <img
            src="https://images.unsplash.com/photo-1590608897129-79da98d1592a?w=400&h=200&fit=crop"
            alt="Backend Outsourcing"
            className="service-image card-img-top"
          />
          <div className="card-body text-center">
            <h5 className="fw-bold service-title">Backend Outsourcing</h5>
            <p className="text-muted service-description">
              Streamline backend processes and operations.
            </p>
            <a
              href="/bpo-services/backend-outsourcing"
              className="explore-btn"
            >
              <span>Learn More</span>
              <span>Explore →</span>
            </a>
          </div>
        </div>
      </div>

      {/* HR Outsource */}
      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop"
            alt="RPO"
            className="service-image card-img-top"
          />
          <div className="card-body text-center">
            <h5 className="fw-bold service-title">Recruitment Process Outsourcing</h5>
            <p className="text-muted service-description">
              End-to-end hiring and staffing solutions.
            </p>
            <a href="/hr-outsource/rpo" className="explore-btn">
              <span>Learn More</span>
              <span>Explore →</span>
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
          <img
            src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=400&h=200&fit=crop"
            alt="Training & Development"
            className="service-image card-img-top"
          />
          <div className="card-body text-center">
            <h5 className="fw-bold service-title">Training & Development</h5>
            <p className="text-muted service-description">
              Enhance skills with structured workforce training.
            </p>
            <a href="/hr-outsource/training-development" className="explore-btn">
              <span>Learn More</span>
              <span>Explore →</span>
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
          <img
            src="https://images.unsplash.com/photo-1522204502191-9f38d1b3d0af?w=400&h=200&fit=crop"
            alt="Talent Development"
            className="service-image card-img-top"
          />
          <div className="card-body text-center">
            <h5 className="fw-bold service-title">Talent Development</h5>
            <p className="text-muted service-description">
              Professional growth and leadership development.
            </p>
            <a href="/hr-outsource/talent-development" className="explore-btn">
              <span>Learn More</span>
              <span>Explore →</span>
            </a>
          </div>
        </div>
      </div>

      {/* Explore More */}
      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
          <img
            src="https://images.unsplash.com/photo-1581092334482-82c4f838c6e5?w=400&h=200&fit=crop"
            alt="Legal & Compliance"
            className="service-image card-img-top"
          />
          <div className="card-body text-center">
            <h5 className="fw-bold service-title">Legal & Compliance</h5>
            <p className="text-muted service-description">
              Advisory and compliance services for businesses.
            </p>
            <a href="/explore-more/legal-compliance" className="explore-btn">
              <span>Learn More</span>
              <span>Explore →</span>
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop"
            alt="Financial Services"
            className="service-image card-img-top"
          />
          <div className="card-body text-center">
            <h5 className="fw-bold service-title">Financial Services</h5>
            <p className="text-muted service-description">
              Payroll, accounting, and financial planning.
            </p>
            <a href="/explore-more/financial-services" className="explore-btn">
              <span>Learn More</span>
              <span>Explore →</span>
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
          <img
            src="https://images.unsplash.com/photo-1523952578875-1d7c5aee81c0?w=400&h=200&fit=crop"
            alt="Business Consultancy"
            className="service-image card-img-top"
          />
          <div className="card-body text-center">
            <h5 className="fw-bold service-title">Business Consultancy</h5>
            <p className="text-muted service-description">
              Expert advice to scale and optimize operations.
            </p>
            <a href="/explore-more/business-consultancy" className="explore-btn">
              <span>Learn More</span>
              <span>Explore →</span>
            </a>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-lg-4">
        <div className="card h-100 shadow-sm border-0 rounded-4 service-card">
          <img
            src="https://images.unsplash.com/photo-1581091012184-5c73c31f3d79?w=400&h=200&fit=crop"
            alt="Angel Investors"
            className="service-image card-img-top"
          />
          <div className="card-body text-center">
            <h5 className="fw-bold service-title">Angel Investors</h5>
            <p className="text-muted service-description">
              Connecting startups with investors and guidance.
            </p>
            <a href="/explore-more/angel-investors" className="explore-btn">
              <span>Learn More</span>
              <span>Explore →</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Our Core Values Section */}
      <Container fluid className="core-values-section text-center">
  <p className="section-subtitle">OUR CORE VALUES</p>
  <div className="container">
  <Row className="g-4 justify-content-center">
    <Col lg={4} md={6}>
      <div className="value-card">
        <div className="value-icon">
          <Users size={28} />
        </div>
        <h5 className="value-title">Client-Centric Approach</h5>
        <p className="value-text">
          We prioritize our clients' success, tailoring solutions to their unique needs and 
          building long-term partnerships based on trust and measurable results.
        </p>
      </div>
    </Col>

    <Col lg={4} md={6}>
      <div className="value-card">
        <div className="value-icon">
          <TrendingUp size={28} />
        </div>
        <h5 className="value-title">Innovation Driven</h5>
        <p className="value-text">
          Our team continuously explores emerging technologies and methodologies to deliver 
          forward-thinking solutions that keep our clients ahead of the curve.
        </p>
      </div>
    </Col>

    <Col lg={4} md={6}>
      <div className="value-card">
        <div className="value-icon">
          <Lightbulb size={28} />
        </div>
        <h5 className="value-title">Operational Excellence</h5>
        <p className="value-text">
          We maintain the highest standards of quality and efficiency in all our services, 
          ensuring reliable, scalable solutions that deliver consistent value.
        </p>
      </div>
    </Col>

    <Col lg={4} md={6}>
      <div className="value-card">
        <div className="value-icon">
          <Handshake size={28} />
        </div>
        <h5 className="value-title">Integrity First</h5>
        <p className="value-text">
          Transparency, honesty, and ethical practices form the foundation of all our 
          business relationships and service delivery models.
        </p>
      </div>
    </Col>

    <Col lg={4} md={6}>
      <div className="value-card">
        <div className="value-icon">
          <Users size={28} />
        </div>
        <h5 className="value-title">Collaborative Culture</h5>
        <p className="value-text">
          We foster teamwork both within our organization and with our clients, believing 
          that the best solutions emerge from shared knowledge and diverse perspectives.
        </p>
      </div>
    </Col>

    <Col lg={4} md={6}>
      <div className="value-card">
        <div className="value-icon">
          <FileText size={28} />
        </div>
        <h5 className="value-title">Continuous Learning</h5>
        <p className="value-text">
          Our commitment to professional development ensures our team stays at the forefront 
          of industry trends and technological advancements.
        </p>
      </div>
    </Col>

    <Col lg={4} md={6}>
      <div className="value-card">
        <div className="value-icon">
          <Globe size={28} />
        </div>
        <h5 className="value-title">Social Responsibility</h5>
        <p className="value-text">
          We believe in using our expertise and resources to make positive contributions 
          to the communities we serve and the broader business ecosystem.
        </p>
      </div>
    </Col>
  </Row>
  </div>
</Container>

      {/* Statistics Section */}
      <Container className="about-farsight-stats-section">
        <Row className="w-100 justify-content-around g-4">
          <Col md={3} className="about-farsight-stat-item">
            <div className="about-farsight-stat-icon-wrapper">
              <BarChart2 size={64} className="about-farsight-stat-large-icon" />
            </div>
            <p className="about-farsight-stat-large-number">500+</p>
            <p className="about-farsight-stat-description">SATISFIED CLIENTS ANNUALLY</p>
          </Col>
          <Col md={3} className="about-farsight-stat-item">
            <div className="about-farsight-stat-icon-wrapper">
              <Headset size={64} className="about-farsight-stat-large-icon" />
            </div>
            <p className="about-farsight-stat-large-number">50+</p>
            <p className="about-farsight-stat-description">CERTIFIED CONSULTANTS</p>
          </Col>
          <Col md={3} className="about-farsight-stat-item">
            <div className="about-farsight-stat-icon-wrapper">
              <MapPin size={64} className="about-farsight-stat-large-icon" />
            </div>
            <p className="about-farsight-stat-large-number">5+</p>
            <p className="about-farsight-stat-description">OPERATIONAL CENTERS ACROSS INDIA</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutFarsight;
