"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Home, Check } from "lucide-react";
import ItSolutionSidebar from "../../components/ITsolutions/ItSolutionSidebar";
import FaqAccordion from "../../components/ITSolutions/FaqAccordion";
import "../../assets/scss/pages/backend-outsourcing.scss";

const BackendOutsourcing = () => {
  const faqItems = [
    { question: "What is backend outsourcing?", answer: "Backend outsourcing is delegating operational tasks such as IT support, data management, or administrative work to a specialized provider." },
    { question: "How does BPO help my business?", answer: "BPO services improve efficiency, reduce costs, and allow your team to focus on core business activities." },
    { question: "Which industries can benefit from BPO services?", answer: "Banking, healthcare, IT, e-commerce, retail, and startups can leverage backend outsourcing to streamline operations." },
    { question: "Is my data secure with outsourced services?", answer: "We follow strict data security protocols, compliance standards, and encryption methods to ensure confidentiality." },
    { question: "Can BPO services scale as my business grows?", answer: "Our solutions are designed to scale easily, adapting to increased workloads and changing requirements." },
    { question: "Do you provide 24/7 support?", answer: "Yes, our dedicated team is available round-the-clock to handle technical, operational, and customer support tasks." },
    { question: "What technologies do you use in backend operations?", answer: "We use advanced software, cloud platforms, and automation tools to ensure reliable and efficient backend performance." },
    { question: "Do you handle finance and HR processes?", answer: "Yes, our BPO services include payroll, accounts management, recruitment support, and administrative assistance." },
    { question: "How quickly can you start a project?", answer: "After understanding your requirements, we can deploy a dedicated team within a few days to begin backend operations immediately." },
    { question: "Why choose Farsight Solution for backend outsourcing?", answer: "Our expertise, global talent network, cost-effective solutions, and commitment to quality make us the ideal partner for backend and BPO services." },
  ];

  return (
    <div className="backend-outsourcing-page-wrapper">
      
      {/* Hero Section */}
      <Container fluid className="backend-outsourcing-hero py-md-2">
        <Row className="align-items-center justify-content-between">
          <Col md={6} className="backend-outsourcing-hero-content">
            <h1 className="backend-outsourcing-hero-title">Backend Outsourcing & BPO <br /> Services</h1>
            <div className="backend-outsourcing-breadcrumbs mt-3">
              <Home size={16} className="backend-outsourcing-breadcrumb-icon" />
              <span className="backend-outsourcing-breadcrumb-text">Home</span>
              <span className="backend-outsourcing-breadcrumb-separator">|</span>
              <span className="backend-outsourcing-breadcrumb-text">Backend Outsourcing & BPO Services</span>
            </div>
            <p className="backend-outsourcing-hero-subtitle mt-3">
              Efficient, scalable, and cost-effective solutions to streamline your business operations.
            </p>
          </Col>
          <Col md={6} className="backend-outsourcing-hero-image-container">
            <img
              src="https://razorinfotech.com/assets/img/razor-img/banners/IT-Helpdesk-service-banner.webp"
              alt="Backend Outsourcing Services"
              width={500}
              height={300}
              className="backend-outsourcing-hero-image"
            />
          </Col>
        </Row>
      </Container>

      {/* Main Content Section */}
      <Container className="backend-outsourcing-main-content py-5">
        <Row>
          <Col lg={8}>
            {/* Introduction */}
            <h2 className="backend-outsourcing-section-heading">Best Backend Outsourcing & BPO Services for Your Business</h2>
            <p className="backend-outsourcing-content-text">
              Farsight Solution delivers professional backend outsourcing and BPO services to help businesses focus on growth while we handle essential operational tasks. From IT support and data management to customer service and administrative processes, we provide end-to-end solutions.
            </p>

            {/* About Section */}
            <h2 className="backend-outsourcing-section-heading">What is Backend Outsourcing & BPO?</h2>
            <p className="backend-outsourcing-content-text">
              Backend outsourcing and BPO involve delegating business processes and IT operations to a specialized service provider. Farsight Solution ensures that database management, server hosting, customer support, and software development are handled efficiently and securely.
            </p>

            {/* Benefits */}
            <h2 className="backend-outsourcing-section-heading">Why Choose Backend Outsourcing & BPO Services?</h2>
            <ul className="backend-outsourcing-checklist">
              <li className="backend-outsourcing-checklist-item"><Check size={20} className="backend-outsourcing-check-icon" /> Cost Efficiency – reduce operational costs without compromising quality.</li>
              <li className="backend-outsourcing-checklist-item"><Check size={20} className="backend-outsourcing-check-icon" /> Access to Skilled Professionals – work with a dedicated team of experts.</li>
              <li className="backend-outsourcing-checklist-item"><Check size={20} className="backend-outsourcing-check-icon" /> Scalability – adjust services based on business growth.</li>
              <li className="backend-outsourcing-checklist-item"><Check size={20} className="backend-outsourcing-check-icon" /> Focus on Core Business – spend time on strategic goals.</li>
              <li className="backend-outsourcing-checklist-item"><Check size={20} className="backend-outsourcing-check-icon" /> Enhanced Productivity – streamline processes and reduce delays.</li>
              <li className="backend-outsourcing-checklist-item"><Check size={20} className="backend-outsourcing-check-icon" /> Data Security & Compliance – ensure confidentiality and regulatory compliance.</li>
            </ul>

            {/* Services */}
            <h2 className="backend-outsourcing-section-heading">Our Backend Outsourcing & BPO Services</h2>
            <ul className="backend-outsourcing-checklist">
              <li className="backend-outsourcing-checklist-item"><Check size={20} className="backend-outsourcing-check-icon" /> Customer Support & Call Center Services – 24/7 support for queries and complaints.</li>
              <li className="backend-outsourcing-checklist-item"><Check size={20} className="backend-outsourcing-check-icon" /> Data Entry & Management – accurate handling of large-scale data.</li>
              <li className="backend-outsourcing-checklist-item"><Check size={20} className="backend-outsourcing-check-icon" /> IT & Technical Support – server monitoring, cloud management, and troubleshooting.</li>
              <li className="backend-outsourcing-checklist-item"><Check size={20} className="backend-outsourcing-check-icon" /> Finance & Accounting Processes – payroll, invoice management, and accounts reconciliation.</li>
              <li className="backend-outsourcing-checklist-item"><Check size={20} className="backend-outsourcing-check-icon" /> HR & Administrative Support – recruitment, onboarding, and document management.</li>
              <li className="backend-outsourcing-checklist-item"><Check size={20} className="backend-outsourcing-check-icon" /> Software & Application Backend Development – custom backend solutions for web and mobile.</li>
            </ul>

            {/* Why Choose Us */}
            <h2 className="backend-outsourcing-section-heading">Why Choose Farsight Solution?</h2>
            <ul className="backend-outsourcing-checklist">
              <li className="backend-outsourcing-checklist-item"><Check size={20} className="backend-outsourcing-check-icon" /> Experienced Team – industry experts handling backend and BPO services.</li>
              <li className="backend-outsourcing-checklist-item"><Check size={20} className="backend-outsourcing-check-icon" /> Cost-Effective Solutions – high-quality services at affordable rates.</li>
              <li className="backend-outsourcing-checklist-item"><Check size={20} className="backend-outsourcing-check-icon" /> Full Control & Transparency – track project progress easily.</li>
              <li className="backend-outsourcing-checklist-item"><Check size={20} className="backend-outsourcing-check-icon" /> State-of-the-Art Tools – ensuring security, monitoring, and reporting.</li>
              <li className="backend-outsourcing-checklist-item"><Check size={20} className="backend-outsourcing-check-icon" /> Proven Track Record – helping businesses optimize backend operations successfully.</li>
            </ul>
          </Col>

          {/* Sidebar */}
          <Col lg={4} className="mt-4 mt-lg-0">
            <ItSolutionSidebar />
          </Col>
        </Row>
      </Container>

      {/* FAQ Section */}
      <section className="py-md-1">
        <Container>
          <FaqAccordion items={faqItems} />
        </Container>
      </section>
    </div>
  );
};

export default BackendOutsourcing;
