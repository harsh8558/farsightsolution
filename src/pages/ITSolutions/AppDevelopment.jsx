"use client";

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Home, Check } from 'lucide-react';
import ItSolutionSidebar from "../../components/ITsolutions/ItSolutionSidebar";
import FaqAccordion from "../../components/ITSolutions/FaqAccordion";
import '../../assets/scss/pages/app-development.scss';

const AppDevelopment = () => {
  const faqItems = [
    {
      question: 'What types of app development services does Farsight Solution provide?',
      answer: 'Farsight Solution provides complete mobile app development for Android and iOS platforms. Our services include UI/UX design, native and hybrid app development, backend API integration, testing, deployment, and post-launch support. We build custom apps that align with your business objectives.'
    },
    {
      question: 'How long does it take to build a mobile app with Farsight Solution?',
      answer: 'The development time depends on the complexity of the project. A basic app may take 4-6 weeks, while advanced enterprise-level apps can take 3-6 months. After requirement gathering, we share a detailed timeline with clear milestones.'
    },
    {
      question: 'Do you provide app maintenance and updates?',
      answer: 'Yes, Farsight Solution ensures your app stays up to date with regular updates, bug fixes, performance optimization, security patches, and feature enhancements.'
    },
    {
      question: 'How do you ensure app security?',
      answer: 'We follow industry-standard security practices, including secure coding, SSL encryption, secure API integration, and data privacy compliance (GDPR/ISO standards). Regular audits and penetration testing are performed.'
    },
    {
      question: 'Can you develop cross-platform mobile apps?',
      answer: 'Yes, we specialize in both native (Swift, Kotlin) and cross-platform (React Native, Flutter) mobile app development to reduce cost and development time.'
    },
    {
      question: 'Do you assist with app store publishing?',
      answer: 'Absolutely. We help you publish your app on Google Play Store and Apple App Store, following all guidelines to ensure smooth approval.'
    },
    {
      question: 'Which industries do you serve?',
      answer: 'We have delivered apps across industries such as Finance, Education, Healthcare, E-commerce, Real Estate, Travel, and IT Services.'
    },
  ];

  return (
    <div className="app-development-page">
      {/* Hero Section */}
      <section className="app-hero bg-dark text-white py-5">
        <Container>
          <Row className="align-items-center text-center text-md-start">
            <Col md={6} className="mb-4 mb-md-0">
              <h1 className="fw-bold mb-3 hero-title">
                Mobile App Development
              </h1>
              <div className="d-flex justify-content-center justify-content-md-start align-items-center breadcrumb-wrap">
                <Home size={16} className="me-2" />
                <span>Home</span>
                <span className="mx-2">|</span>
                <span>App Development</span>
              </div>
            </Col>
            <Col md={6}>
              <img
                src="https://razorinfotech.com/assets/img/razor-img/banners/software-development-service-banner.webp"
                alt="Farsight Solution Mobile App Development"
                className="img-fluid rounded shadow hero-img"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="py-5 bg-light">
        <Container>
          <Row>
            <Col lg={8}>
              <h2 className="fw-bold mb-4 section-heading">
                Leading Mobile App Development Services by Farsight Solution
              </h2>
              <p className="section-text">
                Farsight Solution is a trusted mobile app development company in India offering scalable, user-friendly, and innovative apps for startups, enterprises, and growing businesses. Our expertise ensures seamless user experiences, high performance, and strong security standards.
              </p>
              <p className="section-text">
                From idea to launch, our developers create apps that help you increase customer engagement, enhance brand visibility, and accelerate business growth. Whether it is Android, iOS, or cross-platform apps, Farsight Solution delivers excellence.
              </p>
            </Col>
            <Col lg={4} className="mt-4 mt-lg-0">
              <ItSolutionSidebar />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold mb-4 section-heading">
            Business Benefits of Custom Mobile Apps
          </h2>
          <ul className="list-unstyled checklist">
            <li><Check size={18} className="text-success me-2" /> Full control over app features and scalability</li>
            <li><Check size={18} className="text-success me-2" /> Strong brand presence with personalized experiences</li>
            <li><Check size={18} className="text-success me-2" /> Seamless integration with third-party APIs</li>
            <li><Check size={18} className="text-success me-2" /> Improved data security and compliance</li>
            <li><Check size={18} className="text-success me-2" /> Scalable apps designed for future growth</li>
          </ul>
        </Container>
      </section>

      {/* Comparison Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold mb-4 section-heading">
            Mobile Application vs Responsive Website
          </h2>
          <Row>
            <Col md={6} className="mb-4 mb-md-0">
              <div className="p-4 border rounded bg-white h-100 shadow-sm comparison-box">
                <h3 className="fw-semibold mb-3 comparison-title">Mobile Application</h3>
                <ul className="list-unstyled checklist">
                  <li><Check size={18} className="text-success me-2" /> Convenient for daily use</li>
                  <li><Check size={18} className="text-success me-2" /> Personalized user experience</li>
                  <li><Check size={18} className="text-success me-2" /> Works offline with stored data</li>
                  <li><Check size={18} className="text-success me-2" /> Optimized performance</li>
                  <li><Check size={18} className="text-success me-2" /> Push notification support</li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <div className="p-4 border rounded bg-white h-100 shadow-sm comparison-box">
                <h3 className="fw-semibold mb-3 comparison-title">Responsive Website</h3>
                <ul className="list-unstyled checklist">
                  <li><Check size={18} className="text-success me-2" /> Easy access via browser</li>
                  <li><Check size={18} className="text-success me-2" /> Requires internet connection</li>
                  <li><Check size={18} className="text-success me-2" /> Lower development cost</li>
                  <li><Check size={18} className="text-success me-2" /> Faster updates & maintenance</li>
                  <li><Check size={18} className="text-success me-2" /> Best for information-driven platforms</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-md-3">
        <Container>
          <FaqAccordion items={faqItems} />
        </Container>
      </section>
    </div>
  );
};

export default AppDevelopment;
