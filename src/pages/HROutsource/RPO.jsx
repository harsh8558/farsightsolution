"use client";

import React from 'react';
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Home, Check, Users, Target, TrendingUp, Clock, Award, Shield } from "lucide-react";
import { motion } from "framer-motion";
import HROutsourcingSidebar from "../../components/HR/HROutsourcingSidebar"
import FAQAccordion from "../../components/HR/FAQAccordion"
import '../../assets/scss/pages/rpo.scss';
const RPO = () => {
  const faqItems = [
    {
      question: "What is RPO and how can Farsight Solution LLP transform your recruitment process?",
      answer:
        "Recruitment Process Outsourcing (RPO) is a strategic business model where Farsight Solution LLP becomes your dedicated recruitment partner, managing all or part of your hiring processes. Our RPO services can transform your recruitment by reducing costs by up to 40%, improving hiring efficiency by 60%, providing access to specialized talent pools, and scaling recruitment efforts seamlessly based on your business needs. We become an extension of your team, ensuring consistent quality and faster time-to-hire.",
    },
    {
      question: "How does Farsight Solution LLP ensure superior quality and compliance in RPO services?",
      answer:
        "Farsight Solution LLP maintains exceptional quality through our certified recruitment specialists, proprietary assessment methodologies, advanced AI-powered screening technology, and continuous performance monitoring. We ensure compliance with industry regulations, maintain detailed audit trails, and focus on understanding your company culture and specific requirements. Our quality assurance includes background verification, skills assessment, cultural fit evaluation, and post-hire performance tracking to guarantee optimal candidate-organization alignment.",
    },
    {
      question: "What types of roles and industries can Farsight Solution LLP support through RPO services?",
      answer:
        "Our comprehensive RPO services cover the entire spectrum of roles across multiple industries including Information Technology, Healthcare, Finance & Banking, Manufacturing, Retail, Telecommunications, and Professional Services. We handle everything from entry-level positions to C-suite executive searches, technical specialists, sales professionals, healthcare practitioners, and specialized consultants. Our industry expertise ensures we understand sector-specific requirements and can source candidates with the right skills and experience.",
    },
    {
      question: "Is Farsight Solution LLP's RPO suitable for businesses of all sizes and how do we scale?",
      answer:
        "Our RPO solutions are designed to be scalable and beneficial for organizations of all sizes. Small businesses gain access to enterprise-level recruitment expertise without overhead costs, while large enterprises benefit from our ability to handle high-volume hiring efficiently. We offer flexible engagement models including project-based RPO for specific initiatives, on-demand RPO for fluctuating needs, and full-service RPO for comprehensive recruitment management. Our scalable technology platform and global talent network ensure we can adapt to your changing requirements.",
    },
  ]

  const rpoTypes = [
    {
      icon: <Target className="text-primary" size={40} />,
      title: "End-to-End RPO",
      description:
        "Complete recruitment lifecycle management from job requisition to successful onboarding and beyond.",
      features: ["Full recruitment ownership", "Dedicated account management", "Comprehensive reporting"],
    },
    {
      icon: <Clock className="text-success" size={40} />,
      title: "Project-Based RPO",
      description:
        "Specialized recruitment support for specific projects, expansions, or time-sensitive hiring initiatives.",
      features: ["Rapid deployment", "Project-specific expertise", "Flexible duration"],
    },
    {
      icon: <TrendingUp className="text-info" size={40} />,
      title: "On-Demand RPO",
      description: "Flexible recruitment support that scales up or down based on your fluctuating hiring needs.",
      features: ["Scalable resources", "Pay-per-use model", "Quick activation"],
    },
    {
      icon: <Users className="text-warning" size={40} />,
      title: "Blended RPO",
      description:
        "Strategic combination of in-house recruitment with our specialized external support for optimal results.",
      features: ["Hybrid approach", "Skill complementarity", "Cost optimization"],
    },
  ]

  const benefits = [
    {
      icon: <Award className="text-success" size={30} />,
      title: "Cost Optimization",
      description: "Reduce recruitment costs by up to 40% while improving quality of hires and time-to-fill metrics.",
    },
    {
      icon: <TrendingUp className="text-primary" size={30} />,
      title: "Enhanced Efficiency",
      description:
        "Streamlined processes with 60% faster time-to-hire through expert recruiters and advanced technology.",
    },
    {
      icon: <Users className="text-info" size={30} />,
      title: "Access to Premium Talent",
      description:
        "Tap into our extensive network of qualified candidates including passive talent and industry specialists.",
    },
    {
      icon: <Target className="text-warning" size={30} />,
      title: "Scalable Solutions",
      description: "Easily scale recruitment efforts up or down based on business needs and market fluctuations.",
    },
    {
      icon: <Shield className="text-danger" size={30} />,
      title: "Risk Mitigation",
      description: "Reduce hiring risks through comprehensive screening, background checks, and compliance management.",
    },
    {
      icon: <Clock className="text-secondary" size={30} />,
      title: "Strategic Focus",
      description:
        "Free up internal resources to focus on core business activities while we handle recruitment excellence.",
    },
  ]

  return (
    <div className="rpo-page-wrapper">
      {/* Hero Section */}
      <Container fluid className="rpo-hero">
        <Row className="w-100 align-items-center justify-content-between h-100">
          <Col md={6} className="rpo-hero-content">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="rpo-hero-title">
                Recruitment Process <br /> Outsourcing Excellence
              </h1>
              <p className="hero-subtitle mb-4">
                Transform your hiring strategy with Farsight Solution LLP's comprehensive RPO services. Access top
                talent faster, reduce costs, and scale efficiently with our proven recruitment expertise.
              </p>
              <div className="rpo-breadcrumbs">
                <Home size={16} className="rpo-breadcrumb-icon" />
                <span className="rpo-breadcrumb-text">Home</span>
                <span className="rpo-breadcrumb-separator">|</span>
                <span className="rpo-breadcrumb-text">RPO Services</span>
              </div>
            </motion.div>
          </Col>
          <Col md={6} className="rpo-hero-image-container">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/professional-recruitment-team-conducting-interview.jpg"
                alt="Recruitment Process Outsourcing - Farsight Solution LLP"
                width={600}
                height={400}
                className="rpo-hero-image"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Main Content Section */}
      <Container className="rpo-main-content">
        <Row>
          <Col lg={8}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="rpo-section-heading">
                How Farsight Solution LLP's RPO Services Revolutionize Your Hiring Process
              </h2>
              <p className="rpo-content-text">
                Recruitment Process Outsourcing (RPO) represents a strategic transformation in how organizations
                approach talent acquisition. At Farsight Solution LLP, we don't just fill positions—we become your
                strategic recruitment partner, delivering comprehensive solutions that significantly improve hiring
                efficiency, reduce costs, and enhance the quality of your workforce.
              </p>
              <p className="rpo-content-text">
                Our RPO services leverage cutting-edge technology, data-driven insights, and deep industry expertise to
                streamline your entire recruitment process. From initial candidate sourcing and screening to final
                onboarding and performance tracking, we handle every aspect of recruitment with precision and
                excellence, allowing your internal team to focus on core business objectives while we deliver
                exceptional talent.
              </p>
            </motion.div>

            {/* RPO Types */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="rpo-section-heading">Comprehensive RPO Solutions Tailored to Your Business Needs</h2>
              <p className="rpo-content-text mb-4">
                Farsight Solution LLP offers flexible RPO models designed to meet diverse organizational requirements.
                Whether you need complete recruitment outsourcing or targeted support for specific functions, our
                scalable solutions adapt to your unique business context and hiring objectives.
              </p>

              <Row className="g-4 mb-5">
                {rpoTypes.map((type, index) => (
                  <Col md={6} key={index}>
                    <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }}>
                      <Card className="h-100 shadow-sm border-0 rpo-card">
                        <Card.Body className="p-4">
                          <div className="text-center mb-3">{type.icon}</div>
                          <h5 className="fw-semibold mb-3 text-center">{type.title}</h5>
                          <p className="text-muted fw-light small mb-3">{type.description}</p>
                          <div className="d-flex flex-wrap gap-1">
                            {type.features.map((feature, idx) => (
                              <Badge key={idx} bg="light" text="dark" className="fw-light">
                                {feature}
                              </Badge>
                            ))}
                          </div>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="rpo-section-heading">Transformative Benefits of RPO with Farsight Solution LLP</h2>
              <p className="rpo-content-text mb-4">
                Our RPO services deliver measurable business value through improved efficiency, cost reduction, and
                access to premium talent. Experience the competitive advantage of strategic recruitment outsourcing.
              </p>

              <Row className="g-4 mb-5">
                {benefits.map((benefit, index) => (
                  <Col md={6} key={index}>
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                      <Card className="border-0 shadow-sm h-100">
                        <Card.Body className="d-flex align-items-start p-4">
                          <div className="me-3 flex-shrink-0">{benefit.icon}</div>
                          <div>
                            <h6 className="fw-semibold mb-2">{benefit.title}</h6>
                            <p className="text-muted fw-light small mb-0">{benefit.description}</p>
                          </div>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>

            {/* Process Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="rpo-section-heading">Our Strategic RPO Implementation Process</h2>
              <p className="rpo-content-text mb-4">
                Farsight Solution LLP follows a proven methodology to ensure seamless RPO implementation and optimal
                results for your organization. Our systematic approach guarantees successful outcomes and continuous
                improvement.
              </p>

              <Row className="g-4 mb-5">
                <Col md={6}>
                  <Card className="border-start border-primary border-4 border-0 h-100">
                    <Card.Body>
                      <h5 className="fw-semibold text-primary">1. Strategic Discovery & Planning</h5>
                      <p className="text-muted fw-light small">
                        Comprehensive analysis of your business requirements, company culture, hiring challenges, and
                        strategic objectives to develop a tailored RPO strategy and implementation roadmap.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-start border-success border-4 border-0 h-100">
                    <Card.Body>
                      <h5 className="fw-semibold text-success">2. Advanced Sourcing & Screening</h5>
                      <p className="text-muted fw-light small">
                        Utilize our extensive talent network, AI-powered sourcing tools, and rigorous screening
                        processes to identify, attract, and evaluate top-tier candidates that align with your
                        requirements.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-start border-info border-4 border-0 h-100">
                    <Card.Body>
                      <h5 className="fw-semibold text-info">3. Comprehensive Interview Management</h5>
                      <p className="text-muted fw-light small">
                        End-to-end interview coordination including scheduling, candidate preparation, interview
                        facilitation, feedback collection, and decision support to ensure optimal hiring outcomes.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-start border-warning border-4 border-0 h-100">
                    <Card.Body>
                      <h5 className="fw-semibold text-warning">4. Seamless Onboarding & Integration</h5>
                      <p className="text-muted fw-light small">
                        Complete offer management, negotiation support, background verification, and structured
                        onboarding processes to ensure smooth transition and successful integration of new hires.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="rpo-section-heading">Why Farsight Solution LLP is Your Ideal RPO Partner</h2>
              <p className="rpo-content-text">
                Farsight Solution LLP combines industry-leading expertise, innovative technology, and a client-centric
                approach to deliver RPO services that drive measurable business results. Our proven track record,
                comprehensive service portfolio, and commitment to excellence make us the preferred choice for
                organizations seeking transformative recruitment solutions.
              </p>

              <Row className="g-3">
                {[
                  "Proven Track Record with 95% Client Satisfaction Rate",
                  "Certified Expert Recruiters with Industry Specialization",
                  "Advanced AI-Powered Recruitment Technology Platform",
                  "Client-Centric Approach with Dedicated Account Management",
                  "Scalable Solutions Adaptable to Business Growth",
                  "Comprehensive Compliance and Risk Management",
                  "Data-Driven Insights and Performance Analytics",
                ].map((item, index) => (
                  <Col md={6} key={index}>
                    <motion.div
                      className="d-flex align-items-center mb-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Check size={20} className="rpo-check-icon me-3" />
                      <span className="fw-light">{item}</span>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>

            {/* <FAQAccordion items={faqItems} /> */}
          </Col>
          <Col lg={4}>
            <HROutsourcingSidebar currentPage="/rpo" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default RPO
