"use client";

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Home, Check } from 'lucide-react';
import ItSolutionSidebar from "../../components/ITsolutions/ItSolutionSidebar";
import FaqAccordion from "../../components/ITSolutions/FaqAccordion";
import '../../assets/scss/pages/web-hosting.scss';

const WebHosting = () => {
  const faqItems = [
    {
      question: 'What types of web hosting services does Farsight Solution provide?',
      answer: 'Farsight Solution provides shared hosting, VPS hosting, dedicated hosting, cloud hosting, WordPress hosting, and managed hosting solutions tailored for businesses of all sizes.'
    },
    {
      question: 'How reliable is Farsight Solution\'s web hosting?',
      answer: 'Our web hosting is highly reliable with 99.9% uptime, advanced server monitoring, and redundant infrastructure to ensure your website stays online at all times.'
    },
    {
      question: 'Can I upgrade my hosting plan later?',
      answer: 'Yes, all hosting plans are scalable. As your website grows, you can easily upgrade to higher plans without downtime or data loss.'
    },
    {
      question: 'Do you provide SSL and security features?',
      answer: 'Absolutely. Farsight Solution offers SSL certificates, DDoS protection, malware scanning, and daily backups to ensure maximum website security.'
    },
    {
      question: 'Do you support WordPress websites?',
      answer: 'Yes, we offer specialized WordPress hosting with optimized performance, automatic updates, and expert support for WordPress websites.'
    },
    {
      question: 'Is customer support available for hosting issues?',
      answer: 'Yes, our expert support team is available 24/7 via phone, email, and live chat to help with any hosting-related queries.'
    },
    {
      question: 'What is the uptime guarantee?',
      answer: 'Farsight Solution guarantees 99.9% uptime with our state-of-the-art servers and proactive monitoring to prevent any downtime.'
    },
    {
      question: 'Can you migrate my existing website?',
      answer: 'Yes, we offer smooth website migration services without data loss, ensuring your website remains accessible during the transfer.'
    },
    {
      question: 'Do you offer eCommerce hosting?',
      answer: 'Yes, our eCommerce hosting solutions are optimized for fast loading, secure transactions, and seamless shopping experience.'
    },
    {
      question: 'Are your hosting servers environmentally friendly?',
      answer: 'Farsight Solution uses energy-efficient servers and data centers, following green hosting practices to reduce carbon footprint.'
    },
  ];

  return (
    <div className="web-hosting-page">
      {/* Hero Section */}
      <section className="web-hosting-hero bg-dark text-white py-5">
        <Container>
          <Row className="align-items-center text-center text-md-start">
            <Col md={6} className="mb-4 mb-md-0">
              <h1 className="fw-bold mb-3 hero-title">
                Web Hosting Solutions
              </h1>
              <div className="d-flex justify-content-center justify-content-md-start align-items-center breadcrumb-wrap">
                <Home size={16} className="me-2" />
                <span>Home</span>
                <span className="mx-2">|</span>
                <span>Web Hosting</span>
              </div>
            </Col>
            <Col md={6}>
              <img
                src="https://razorinfotech.com/assets/img/razor-img/banners/web-hosting-banner.webp"
                alt="Farsight Solution Web Hosting"
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
                Reliable Web Hosting Services by Farsight Solution
              </h2>
              <p className="section-text">
                Farsight Solution provides premium web hosting services that ensure high performance, security, and reliability for businesses of all sizes. Our hosting solutions are designed to meet modern website needs, from small business blogs to high-traffic eCommerce platforms.
              </p>
              <p className="section-text">
                With optimized servers, scalable resources, and 24/7 expert support, we guarantee your website runs smoothly and securely. Whether you need shared hosting, VPS, dedicated servers, or cloud solutions, Farsight Solution has you covered.
              </p>
            </Col>
            <Col lg={4} className="mt-4 mt-lg-0">
              <ItSolutionSidebar />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="py-5">
        <Container>
          <h2 className="fw-bold mb-4 section-heading">
            Our Web Hosting Services
          </h2>
          <ul className="list-unstyled checklist">
            <li><Check size={18} className="text-success me-2" /> Shared Hosting: Affordable and reliable hosting for small websites and blogs.</li>
            <li><Check size={18} className="text-success me-2" /> VPS Hosting: Dedicated resources for better performance and flexibility.</li>
            <li><Check size={18} className="text-success me-2" /> Dedicated Hosting: Entire servers for high-traffic websites requiring maximum control.</li>
            <li><Check size={18} className="text-success me-2" /> Cloud Hosting: Flexible, scalable, and highly available cloud-based solutions.</li>
            <li><Check size={18} className="text-success me-2" /> WordPress Hosting: Optimized hosting for WordPress sites with automatic updates.</li>
            <li><Check size={18} className="text-success me-2" /> eCommerce Hosting: High-speed and secure hosting for online stores.</li>
            <li><Check size={18} className="text-success me-2" /> Managed Hosting: Server management, security, and updates handled by our experts.</li>
          </ul>
        </Container>
      </section>

      {/* Why Choose Section */}
      <section className="py-5 bg-light">
        <Container>
          <h2 className="fw-bold mb-4 section-heading">
            Why Choose Farsight Solution
          </h2>
          <ul className="list-unstyled checklist">
            <li><Check size={18} className="text-success me-2" /> 24/7 Expert Support to resolve hosting issues quickly.</li>
            <li><Check size={18} className="text-success me-2" /> High Performance Servers optimized for speed and uptime.</li>
            <li><Check size={18} className="text-success me-2" /> Scalable Solutions to accommodate website growth seamlessly.</li>
            <li><Check size={18} className="text-success me-2" /> Advanced Security with SSL, DDoS protection, and daily backups.</li>
            <li><Check size={18} className="text-success me-2" /> SEO-Friendly Hosting Infrastructure for faster loading and better search rankings.</li>
          </ul>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-5">
        <Container>
          <FaqAccordion items={faqItems} />
        </Container>
      </section>
    </div>
  );
};

export default WebHosting;
