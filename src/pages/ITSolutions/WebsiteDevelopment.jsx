"use client";

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Home, Check } from 'lucide-react';
import ItSolutionSidebar from "../../components/ITsolutions/ItSolutionSidebar";
import FaqAccordion from "../../components/ITSolutions/FaqAccordion";
import '../../assets/scss/pages/website-development.scss';

const WebsiteDevelopment = () => {
  const faqItems = [
    {
      question: 'What website development services does Farsight Solution offer?',
      answer: 'Farsight Solution offers a wide range of professional website development services including custom website design, e-commerce website development, CMS integration (WordPress, Drupal), website maintenance, and SEO optimization. Our expert developers create websites that are visually appealing, fully responsive, and optimized for search engines, helping businesses improve their online presence and attract more customers.',
    },
    {
      question: 'How long does it take to develop a website with Farsight Solution?',
      answer: 'The website development timeline at Farsight Solution depends on the complexity and features of your project. A basic informational website can typically be delivered in 3-4 weeks, while complex e-commerce or custom web applications may take 2-4 months. We provide a detailed project plan after assessing your specific requirements to ensure timely delivery without compromising quality.',
    },
    {
      question: 'Does Farsight Solution provide website maintenance after launch?',
      answer: 'Yes, Farsight Solution offers comprehensive post-launch support and website maintenance. This includes regular updates, security monitoring, bug fixes, performance optimization, and adding new features. Our goal is to ensure your website remains secure, functional, and up-to-date at all times.',
    },
    {
      question: 'Will my website be mobile-friendly and SEO-optimized?',
      answer: 'Absolutely. All websites developed by Farsight Solution are fully responsive, ensuring a seamless experience across desktops, tablets, and smartphones. We also implement SEO best practices during development, including on-page optimization, fast loading speed, and proper structure, helping your website rank higher in search engine results and attract organic traffic.',
    },
    {
      question: 'Do you offer custom web development solutions?',
      answer: 'Yes, Farsight Solution specializes in custom web development solutions tailored to your business needs. We work closely with clients to understand their goals, target audience, and brand identity, then build a website or web application from scratch that aligns perfectly with your objectives, delivering a unique online presence.',
    },
    {
      question: 'Can Farsight Solution develop e-commerce websites?',
      answer: 'Yes, we provide professional e-commerce website development services. Our solutions include user-friendly online stores, secure payment gateways, product catalog management, and SEO-friendly design. We ensure your e-commerce platform drives sales, improves customer engagement, and scales with your business.',
    },
    {
      question: 'What technologies does Farsight Solution use for website development?',
      answer: 'Farsight Solution uses the latest technologies including HTML5, CSS3, JavaScript, React, Bootstrap, WordPress, and other modern frameworks and CMS platforms. Our developers ensure that your website is fast, secure, and scalable while providing an excellent user experience.',
    },
    {
      question: 'Why should I choose Farsight Solution for website development?',
      answer: 'Choosing Farsight Solution means partnering with a professional team committed to delivering high-quality websites that are visually appealing, fully responsive, and optimized for SEO. We focus on understanding your business objectives, providing expert guidance, and offering reliable support to ensure your website helps you achieve online success.',
    },
  ];

  return (
    <div className="website-development-page-wrapper">

      {/* Hero Section */}
      <section className="website-development-hero text-white">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="website-development-hero-title">Professional Website Development <br /> For Your Business</h1>
              <p className="website-development-hero-subtitle">
                Farsight Solution delivers cutting-edge web development solutions to elevate your brand and grow your online presence.
              </p>
              <div className="d-flex align-items-center website-development-breadcrumbs">
                <Home size={16} className="me-2" />
                <span>Home</span>
                <span className="mx-2">|</span>
                <span>Website Development</span>
              </div>
              <Button className="mt-3 btn-primary px-4 py-2">Get Started</Button>
            </Col>
            <Col md={6} className="text-center">
              <img 
                src="https://razorinfotech.com/assets/img/razor-img/banners/website-development-banner.webp" 
                alt="Website Development" 
                className="img-fluid website-development-hero-image"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Content Section */}
      <section className="website-development-main-content">
        <Container>
          <Row>
            <Col lg={12} md={12}>
              <Row>
                {/* Main content */}
                <Col lg={8} md={12}>
                  <h2 className="website-development-section-heading">Boost Your Business with Expert Website Development</h2>
                  <p>
                    Farsight Solution specializes in building custom websites that are visually stunning, user-friendly, and SEO-optimized. Our goal is to help your business achieve maximum online visibility and engagement.
                  </p>
                  <p>
                    Whether you need a corporate website, e-commerce store, or web application, we create solutions tailored to your business needs.
                  </p>
                </Col>

                {/* Sidebar */}
                <Col lg={4} md={12}>
                  <ItSolutionSidebar />
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col lg={12} md={12}>
              <h2 className="website-development-section-heading">Our Services Include:</h2>
              <ul className="website-development-checklist">
                <li><Check className="me-2 text-success" /> Custom Website Development</li>
                <li><Check className="me-2 text-success" /> Responsive Web Design for all devices</li>
                <li><Check className="me-2 text-success" /> E-commerce Development & Secure Payment Integration</li>
                <li><Check className="me-2 text-success" /> CMS Integration (WordPress, Drupal)</li>
                <li><Check className="me-2 text-success" /> Web Application Development</li>
                <li><Check className="me-2 text-success" /> UI/UX Design for high engagement</li>
                <li><Check className="me-2 text-success" /> SEO Optimization for better search ranking</li>
                <li><Check className="me-2 text-success" /> Ongoing Maintenance & Support</li>
              </ul>
              <FaqAccordion items={faqItems} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default WebsiteDevelopment;
