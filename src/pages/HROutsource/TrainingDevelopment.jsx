"use client";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  Home,
  Check,
  Users,
  Award,
  TrendingUp,
  Target,
  BookOpen,
  Lightbulb,
} from "lucide-react";
import { motion } from "framer-motion";
import HROutsourcingSidebar from "../../components/HR/HROutsourcingSidebar";
import FAQAccordion from "../../components/HR/FAQAccordion";
import "../../assets/scss/pages/training-development.scss";


const TrainingDevelopment = () => {
  const faqItems = [
    {
      question: "What is the role of training and development in modern business management?",
      answer:
        "Training and development play a crucial role in modern business management by enhancing employee skills, improving productivity, fostering innovation, and ensuring regulatory compliance. At Farsight Solution LLP, we help organizations adapt to market changes, retain top talent, and achieve strategic goals by building a competent, motivated, and future-ready workforce that drives sustainable business growth.",
    },
    {
      question: "How can Farsight Solution LLP's training programs help improve employee retention rates?",
      answer:
        "Our comprehensive training and development programs significantly boost employee retention by demonstrating organizational commitment to career growth and professional advancement. When employees see that Farsight Solution LLP is invested in their development, they feel valued and are more likely to remain loyal. Our programs increase job satisfaction, provide clear career progression paths, and reduce the likelihood of employees seeking opportunities elsewhere.",
    },
    {
      question: "What types of specialized training programs does Farsight Solution LLP offer to businesses?",
      answer:
        "Farsight Solution LLP offers an extensive range of training programs including technical skills development, leadership training, soft skills enhancement (communication, teamwork, problem-solving), compliance and regulatory training, digital transformation workshops, and fully customized programs tailored to specific industry needs. We utilize various delivery methods including online learning platforms, interactive workshops, blended learning approaches, and on-site training sessions.",
    },
    {
      question: "How does Farsight Solution LLP measure the effectiveness and ROI of training programs?",
      answer:
        "We measure training effectiveness through comprehensive evaluation methods including pre- and post-training assessments, performance metrics analysis, employee engagement surveys, productivity measurements, skill gap analysis, and long-term career progression tracking. Our data-driven approach ensures that every training investment delivers measurable business value and contributes to organizational success.",
    },
  ]

  const trainingTypes = [
    {
      icon: <Award className="text-primary" size={40} />,
      title: "Excellence in Instruction",
      description:
        "World-class training programs delivered by certified industry experts with proven track records in their respective fields.",
    },
    {
      icon: <TrendingUp className="text-success" size={40} />,
      title: "Sales & Marketing Training",
      description:
        "Comprehensive programs focused on enhancing sales techniques, negotiation skills, customer relationship management, and digital marketing strategies.",
    },
    {
      icon: <Users className="text-info" size={40} />,
      title: "Soft Skills Development",
      description:
        "Essential interpersonal skills training including communication, teamwork, emotional intelligence, problem-solving, and leadership capabilities.",
    },
    {
      icon: <Target className="text-warning" size={40} />,
      title: "Technology & Digital Skills",
      description:
        "Cutting-edge technology training to keep your team updated with the latest digital tools, software applications, and emerging technologies.",
    },
    {
      icon: <BookOpen className="text-danger" size={40} />,
      title: "Leadership Development",
      description:
        "Comprehensive leadership programs designed to develop management skills, strategic thinking, and executive capabilities for current and future leaders.",
    },
    {
      icon: <Lightbulb className="text-secondary" size={40} />,
      title: "Custom Training Solutions",
      description:
        "Tailored training programs designed specifically for your organization's unique requirements, industry challenges, and business objectives.",
    },
  ]

  const benefits = {
    employees: [
      "Enhanced professional skills and technical competencies",
      "Improved job satisfaction and workplace engagement",
      "Clear career advancement and progression opportunities",
      "Increased confidence, motivation, and job performance",
      "Better work-life balance and stress management skills",
      "Access to industry certifications and credentials",
    ],
    employers: [
      "Significantly increased productivity and operational efficiency",
      "Reduced employee turnover and recruitment costs",
      "Improved customer satisfaction and service quality",
      "Enhanced company reputation and employer branding",
      "Stronger competitive advantage in the marketplace",
      "Better compliance with industry regulations and standards",
    ],
  }

  return (
    <div className="training-development-page-wrapper">
      {/* Hero Section */}
      <Container fluid className="training-development-hero">
        <Row className="w-100 align-items-center justify-content-between h-100">
          <Col md={6} className="training-development-hero-content">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="training-development-hero-title">
                Professional Training <br /> & Development Solutions
              </h1>
              <p className="hero-subtitle mb-4">
                Empowering organizations with comprehensive training programs that drive growth, enhance performance,
                and build future-ready teams.
              </p>
              <div className="training-development-breadcrumbs">
                <Home size={16} className="training-development-breadcrumb-icon" />
                <span className="training-development-breadcrumb-text">Home</span>
                <span className="training-development-breadcrumb-separator">|</span>
                <span className="training-development-breadcrumb-text">Training & Development</span>
              </div>
            </motion.div>
          </Col>
          <Col md={6} className="training-development-hero-image-container">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/professional-training-and-development-team-in-mode.jpg"
                alt="Professional Training & Development - Farsight Solution LLP"
                width={600}
                height={400}
                className="training-development-hero-image"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Main Content Section */}
      <Container className="training-development-main-content">
        <Row>
          <Col lg={8}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="training-development-section-heading">
                The Strategic Role of Training and Development in Modern Business Management
              </h2>
              <p className="training-development-content-text">
                In today's rapidly evolving business landscape, training and development programs have become essential
                strategic investments for organizations seeking sustainable growth and competitive advantage. At
                Farsight Solution LLP, we understand that effective training programs are not just about skill
                enhancement—they're about transforming your workforce into a dynamic, adaptable, and high-performing
                team that drives business success.
              </p>
              <p className="training-development-content-text">
                Our comprehensive training and development solutions are meticulously designed to address the unique
                challenges facing modern businesses, from digital transformation and technological advancement to
                changing market dynamics and evolving customer expectations. We help organizations build learning
                cultures that promote continuous improvement, innovation, and sustainable growth.
              </p>
            </motion.div>

            {/* Training Types Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="training-development-section-heading">
                Comprehensive Training and Development Programs Tailored for Success
              </h2>
              <p className="training-development-content-text mb-4">
                Farsight Solution LLP offers a diverse portfolio of training programs designed to meet the specific
                needs of your organization and industry. Our expert-led programs combine theoretical knowledge with
                practical application to ensure maximum learning impact and business value.
              </p>

              <Row className="g-4 mb-5">
                {trainingTypes.map((type, index) => (
                  <Col md={6} key={index}>
                    <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }}>
                      <Card className="h-100 shadow-sm border-0 training-card">
                        <Card.Body className="text-center p-4">
                          <div className="mb-3">{type.icon}</div>
                          <h5 className="fw-semibold mb-3">{type.title}</h5>
                          <p className="text-muted fw-light small">{type.description}</p>
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
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="training-development-section-heading">Our Proven Training and Development Methodology</h2>
              <p className="training-development-content-text">
                At Farsight Solution LLP, we follow a systematic, data-driven approach to training and development that
                ensures maximum effectiveness and measurable results for your organization.
              </p>

              <Row className="g-4 mb-5">
                <Col md={6}>
                  <Card className="border-start border-primary border-4 border-0 h-100">
                    <Card.Body>
                      <h5 className="fw-semibold text-primary">1. Comprehensive Needs Assessment</h5>
                      <p className="text-muted fw-light small">
                        Conduct thorough analysis to identify skill gaps, performance challenges, and training
                        requirements through surveys, interviews, and performance data analysis.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-start border-success border-4 border-0 h-100">
                    <Card.Body>
                      <h5 className="fw-semibold text-success">2. Strategic Program Design</h5>
                      <p className="text-muted fw-light small">
                        Develop customized training content, methodologies, and delivery formats based on identified
                        needs and organizational objectives.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-start border-info border-4 border-0 h-100">
                    <Card.Body>
                      <h5 className="fw-semibold text-info">3. Multi-Modal Delivery</h5>
                      <p className="text-muted fw-light small">
                        Implement training through various formats including workshops, online modules, blended
                        learning, and hands-on practical sessions.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-start border-warning border-4 border-0 h-100">
                    <Card.Body>
                      <h5 className="fw-semibold text-warning">4. Continuous Evaluation & Improvement</h5>
                      <p className="text-muted fw-light small">
                        Measure effectiveness through assessments, feedback, and performance metrics, continuously
                        refining programs for optimal results.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </motion.div>

            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="training-development-section-heading">
                Transformative Benefits of Training and Development with Farsight Solution LLP
              </h2>

              <Row className="g-4 mb-5">
                <Col md={6}>
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Header className="bg-primary text-white">
                      <h5 className="mb-0 fw-semibold">Benefits for Employees</h5>
                    </Card.Header>
                    <Card.Body>
                      <ul className="training-development-checklist">
                        {benefits.employees.map((benefit, index) => (
                          <li key={index} className="training-development-checklist-item">
                            <Check size={20} className="training-development-check-icon" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Header className="bg-success text-white">
                      <h5 className="mb-0 fw-semibold">Benefits for Employers</h5>
                    </Card.Header>
                    <Card.Body>
                      <ul className="training-development-checklist">
                        {benefits.employers.map((benefit, index) => (
                          <li key={index} className="training-development-checklist-item">
                            <Check size={20} className="training-development-check-icon" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
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
              <h2 className="training-development-section-heading">
                Why Choose Farsight Solution LLP for Training and Development Excellence
              </h2>
              <p className="training-development-content-text">
                Farsight Solution LLP stands as your trusted partner in organizational transformation through strategic
                training and development. Our commitment to excellence, innovation, and measurable results sets us apart
                in the industry. We combine deep industry expertise with cutting-edge methodologies to deliver training
                solutions that drive real business impact.
              </p>

              <Row className="g-3">
                {[
                  "Customized Training Programs Tailored to Your Industry",
                  "Certified Expert Instructors with Proven Track Records",
                  "Measurable Results and ROI-Focused Approach",
                  "Flexible Multi-Modal Delivery Options",
                  "Continuous Support and Program Optimization",
                  "Deep Industry Expertise Across Multiple Sectors",
                  "Cost-Effective Solutions with Maximum Impact",
                ].map((item, index) => (
                  <Col md={6} key={index}>
                    <motion.div
                      className="d-flex align-items-center mb-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Check size={20} className="training-development-check-icon me-3" />
                      <span className="fw-light">{item}</span>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>

            {/* <FAQAccordion items={faqItems} /> */}
          </Col>
          {/* <Col lg={4}>
            <HRServicesSidebar currentPage="/training-development" />
          </Col> */}
        </Row>
      </Container>
    </div>
  )
}

export default TrainingDevelopment
