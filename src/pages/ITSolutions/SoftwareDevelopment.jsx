"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Home } from "lucide-react";
import ItSolutionSidebar from "../../components/ITsolutions/ItSolutionSidebar";
import FaqAccordion from "../../components/ITSolutions/FaqAccordion";
import "../../assets/scss/pages/software-development.scss";

const SoftwareDevelopment = () => {
  const faqItems = [
    {
      question: "What Software Development Services Does Farsight Solution Offer?",
      answer:
        "Farsight Solution provides complete software development services such as custom applications, mobile apps, web solutions, enterprise software, and IT consulting. We design scalable and secure solutions that meet modern business requirements.",
    },
    {
      question: "How long does a Software Development Project Take?",
      answer:
        "The timeline depends on project complexity. Small-scale projects may take a few weeks, while enterprise-level solutions can take several months. A detailed schedule is shared after the planning stage.",
    },
    {
      question: "Which Technologies Does Farsight Solution Work With?",
      answer:
        "Our team works with React, Angular, Node.js, Python, Java, .NET, PHP, and database systems like SQL and NoSQL. We carefully select the best stack for performance and scalability.",
    },
    {
      question: "Does Farsight Solution Provide Post-Launch Support?",
      answer:
        "Yes, we provide long-term support, including bug fixes, performance improvements, upgrades, and security updates to keep your software reliable and up-to-date.",
    },
  ];

  return (
    <div className="software-dev-wrapper">
      {/* Hero Section */}
      <section className="software-dev-hero">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="text-md-start text-center">
              <h1 className="hero-title">Software Development</h1>
              <p className="hero-subtitle">
                Build secure, scalable, and high-performance software with{" "}
                <strong>Farsight Solution</strong> – your trusted technology partner.
              </p>
              <div className="breadcrumbs">
                <Home size={16} className="me-2" />
                <span>Home</span>
                <span className="mx-2">/</span>
                <span>Software Development</span>
              </div>
            </Col>
            <Col md={6} className="text-center mt-4 mt-md-0">
              <img
                src="https://razorinfotech.com/assets/img/razor-img/banners/software-development-service-banner.webp"
                alt="Farsight Solution - Software Development Services"
                className="img-fluid hero-img"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-5 bg-white">
        <Container>
          <Row>
            {/* Left Content */}
            <Col lg={8}>
              <h2 className="section-heading">
                Leading Software Development Company
              </h2>
              <p className="section-text">
                Farsight Solution is a trusted software development company
                delivering innovative and cost-effective solutions for businesses
                worldwide. Whether you are launching a SaaS product or building
                enterprise-grade applications, we help you achieve faster
                time-to-market with secure, scalable, and performance-driven
                technology.
              </p>

              <p className="section-text">
                With industry expertise in healthcare, finance, retail, and
                logistics, our team of developers, designers, and project managers
                ensures software that matches your business goals and growth.
              </p>

              <h2 className="section-heading">Why Choose Farsight Solution?</h2>
              <p className="section-text">
                We follow agile methodologies to deliver software with
                transparency, flexibility, and on-time execution. Our experienced
                professionals use modern technologies to deliver robust, scalable,
                and user-friendly applications.
              </p>

              <h2 className="section-heading">Grow Your Business With Us</h2>
              <p className="section-text">
                Our dedicated software team helps you transform ideas into digital
                products. We focus on innovation, cost-effectiveness, and
                long-term success, ensuring your business stays ahead in today’s
                competitive market.
              </p>

              <h2 className="section-heading">Our Commitment</h2>
              <ul className="checklist">
                <li>✔ Scalable & Secure Solutions</li>
                <li>✔ 24/7 Technical Assistance</li>
                <li>✔ Customer-Centric Approach</li>
                <li>✔ Fast & Reliable Delivery</li>
              </ul>

              {/* FAQ Section */}
              <FaqAccordion items={faqItems} />
            </Col>

            {/* Sidebar */}
            <Col lg={4}>
              <ItSolutionSidebar />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default SoftwareDevelopment;
