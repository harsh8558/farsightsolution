
"use client"
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap"
import { Home, Check, Users, Award, TrendingUp, Target, BookOpen, Lightbulb, Star, Zap } from "lucide-react"
import { motion } from "framer-motion"
import HROutsourcingSidebar from "../../components/HR/HROutsourcingSidebar"
import FAQAccordion from "../../components/HR/FAQAccordion"
import "../../assets/scss/pages/talent-development.scss"

const TalentDevelopment = () => {
  const faqItems = [
    {
      question: "What are the comprehensive benefits of talent development programs offered by Farsight Solution LLP?",
      answer:
        "Farsight Solution LLP's talent development programs deliver transformative benefits including improved employee performance by up to 45%, increased retention rates by 60%, enhanced employee engagement scores, better succession planning capabilities, and a stronger organizational culture. Our programs help employees acquire cutting-edge skills, adapt to industry changes, and contribute more effectively to business goals while building a future-ready workforce that drives sustainable competitive advantage.",
    },
    {
      question: "What are the core pillars of Farsight Solution LLP's talent development framework?",
      answer:
        "Our talent development framework is built on four strategic pillars: 1. Comprehensive Learning & Development (upskilling, reskilling, continuous education), 2. Performance Excellence Management (goal setting, regular feedback, performance optimization), 3. Strategic Career Management (career pathing, mentoring, coaching, leadership development), and 4. Succession Planning & Leadership Pipeline (identifying and developing future leaders, knowledge transfer, organizational continuity).",
    },
    {
      question:
        "How can Farsight Solution LLP customize talent development strategies for different organizational needs?",
      answer:
        "Farsight Solution LLP provides fully customized talent development solutions through comprehensive needs assessment, industry-specific program design, leadership development initiatives, performance management system implementation, and personalized career coaching. We analyze your organizational culture, business objectives, skill gaps, and growth plans to create tailored strategies that align with your strategic goals and foster a culture of continuous learning, innovation, and professional excellence.",
    },
    {
      question:
        "Does Farsight Solution LLP's talent development focus only on high-potential employees or include all workforce levels?",
      answer:
        "Our talent development philosophy is inclusive and comprehensive, covering all workforce levels from entry-level employees to senior executives. While we offer specialized programs for high-potential employees and future leaders, we believe in developing the entire workforce. This inclusive approach leads to a more skilled, engaged, and adaptable organization where every employee has opportunities for growth, contributing to overall organizational success and creating a positive, development-focused culture.",
    },
  ]

  const developmentTypes = [
    {
      icon: <BookOpen className="text-primary" size={40} />,
      title: "Formal Training Programs",
      description:
        "Structured courses, workshops, and certifications designed to impart specific skills and knowledge with measurable outcomes.",
      features: ["Certified curricula", "Measurable outcomes", "Industry recognition"],
    },
    {
      icon: <Users className="text-success" size={40} />,
      title: "On-the-Job Training",
      description:
        "Practical learning through real-world experience and mentorship within the actual work environment.",
      features: ["Immediate application", "Real-world scenarios", "Peer learning"],
    },
    {
      icon: <Target className="text-info" size={40} />,
      title: "Mentoring & Coaching",
      description:
        "Personalized guidance from experienced professionals to accelerate career development and skill enhancement.",
      features: ["One-on-one guidance", "Career acceleration", "Knowledge transfer"],
    },
    {
      icon: <TrendingUp className="text-warning" size={40} />,
      title: "Cross-Functional Training",
      description:
        "Exposure to different departments and roles to broaden skills and enhance organizational understanding.",
      features: ["Holistic perspective", "Enhanced collaboration", "Skill diversification"],
    },
    {
      icon: <Award className="text-danger" size={40} />,
      title: "Leadership Development",
      description:
        "Comprehensive programs to cultivate leadership skills and prepare employees for future leadership roles.",
      features: ["Strategic thinking", "Decision-making skills", "People management"],
    },
    {
      icon: <Lightbulb className="text-secondary" size={40} />,
      title: "Innovation & Creativity Training",
      description: "Programs focused on fostering innovation, creative thinking, and problem-solving capabilities.",
      features: ["Creative problem-solving", "Innovation methodologies", "Future-ready skills"],
    },
  ]

  const benefits = [
    {
      icon: <Star className="text-warning" size={30} />,
      title: "Enhanced Skill Development",
      description:
        "Comprehensive development of both technical and soft skills essential for career advancement and organizational success.",
      metric: "45% improvement in performance",
    },
    {
      icon: <Zap className="text-primary" size={30} />,
      title: "Operational Excellence",
      description: "Improved productivity and efficiency through streamlined processes and reduced errors.",
      metric: "60% increase in efficiency",
    },
    {
      icon: <Users className="text-success" size={30} />,
      title: "Talent Retention",
      description:
        "Significantly higher retention rates through demonstrated investment in employee growth and development.",
      metric: "70% reduction in turnover",
    },
    {
      icon: <Target className="text-info" size={30} />,
      title: "Succession Planning",
      description: "Strategic preparation of future leaders ensuring business continuity and organizational growth.",
      metric: "90% internal promotion rate",
    },
    {
      icon: <TrendingUp className="text-danger" size={30} />,
      title: "Adaptability & Resilience",
      description:
        "Enhanced ability to navigate change and respond effectively to market challenges and opportunities.",
      metric: "80% faster adaptation to change",
    },
    {
      icon: <Award className="text-secondary" size={30} />,
      title: "Engagement Culture",
      description:
        "Foster a culture of continuous learning leading to higher job satisfaction and organizational commitment.",
      metric: "85% employee satisfaction",
    },
  ]

  return (
    <div className="talent-development-page-wrapper">
      {/* Hero Section */}
      <Container fluid className="talent-development-hero">
        <Row className="w-100 align-items-center justify-content-between h-100">
          <Col md={6} className="talent-development-hero-content">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h1 className="talent-development-hero-title">
                Strategic Talent <br /> Development Solutions
              </h1>
              <p className="hero-subtitle mb-4">
                Unlock your organization's potential with Farsight Solution LLP's comprehensive talent development
                programs. Build a future-ready workforce through strategic learning and continuous growth initiatives.
              </p>
              <div className="talent-development-breadcrumbs">
                <Home size={16} className="talent-development-breadcrumb-icon" />
                <span className="talent-development-breadcrumb-text">Home</span>
                <span className="talent-development-breadcrumb-separator">|</span>
                <span className="talent-development-breadcrumb-text">Talent Development</span>
              </div>
            </motion.div>
          </Col>
          <Col md={6} className="talent-development-hero-image-container">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/diverse-team-of-professionals-in-talent-developmen.jpg"
                alt="Strategic Talent Development - Farsight Solution LLP"
                width={600}
                height={400}
                className="talent-development-hero-image"
              />
            </motion.div>
          </Col>
        </Row>
      </Container>

      {/* Main Content Section */}
      <Container className="talent-development-main-content">
        <Row>
          <Col lg={8}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h2 className="talent-development-section-heading">
                Building a Culture of Continuous Learning and Professional Excellence
              </h2>
              <p className="talent-development-content-text">
                Talent development represents a strategic investment in your organization's most valuable asset—your
                people. At Farsight Solution LLP, we understand that effective talent development goes beyond
                traditional training; it's about creating a comprehensive ecosystem that fosters continuous learning,
                professional growth, and organizational excellence. Our approach transforms individual potential into
                collective organizational strength.
              </p>
              <p className="talent-development-content-text">
                In today's rapidly evolving business environment, organizations must cultivate adaptive, skilled, and
                engaged workforces to maintain competitive advantage. Our talent development programs are designed to
                address this critical need by creating structured pathways for employee growth, skill enhancement, and
                career advancement while aligning individual aspirations with organizational objectives.
              </p>
              <p className="talent-development-content-text">
                We believe that a robust talent development culture creates a virtuous cycle of engagement, performance,
                and retention. When employees see clear investment in their growth and development, they become more
                committed, productive, and innovative, ultimately driving superior business results and organizational
                success.
              </p>
            </motion.div>

            {/* Development Types Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="talent-development-section-heading">
                Comprehensive Talent Development Programs for Every Career Stage
              </h2>
              <p className="talent-development-content-text mb-4">
                Farsight Solution LLP offers a complete spectrum of talent development solutions designed to meet
                diverse learning needs and career objectives. Our programs combine proven methodologies with innovative
                approaches to ensure maximum impact and sustainable growth.
              </p>

              <Row className="g-4 mb-5">
                {developmentTypes.map((type, index) => (
                  <Col md={6} key={index}>
                    <motion.div whileHover={{ scale: 1.02, y: -5 }} transition={{ duration: 0.3 }}>
                      <Card className="h-100 shadow-sm border-0 talent-card">
                        <Card.Body className="p-4">
                          <div className="text-center mb-3">{type.icon}</div>
                          <h5 className="fw-semibold mb-3 text-center">{type.title}</h5>
                          <p className="text-muted fw-light small mb-3">{type.description}</p>
                          <div className="d-flex flex-wrap gap-1">
                            {type.features.map((feature, idx) => (
                              <span key={idx} className="badge bg-light text-dark fw-light small">
                                {feature}
                              </span>
                            ))}
                          </div>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>

            {/* Benefits with Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="talent-development-section-heading">
                Measurable Impact: Benefits of Strategic Talent Development
              </h2>
              <p className="talent-development-content-text mb-4">
                Our talent development programs deliver quantifiable business value through improved performance,
                enhanced engagement, and sustainable organizational growth. Experience the transformative power of
                strategic talent investment.
              </p>

              <Row className="g-4 mb-5">
                {benefits.map((benefit, index) => (
                  <Col md={6} key={index}>
                    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
                      <Card className="border-0 shadow-sm h-100 benefit-card">
                        <Card.Body className="p-4">
                          <div className="d-flex align-items-center mb-3">
                            <div className="me-3">{benefit.icon}</div>
                            <div>
                              <h6 className="fw-semibold mb-1">{benefit.title}</h6>
                              <small className="text-success fw-semibold">{benefit.metric}</small>
                            </div>
                          </div>
                          <p className="text-muted fw-light small mb-0">{benefit.description}</p>
                        </Card.Body>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>

            {/* Implementation Process */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="talent-development-section-heading">
                Our Strategic Talent Development Implementation Framework
              </h2>
              <p className="talent-development-content-text mb-4">
                Farsight Solution LLP follows a systematic, evidence-based approach to talent development that ensures
                sustainable results and continuous improvement. Our methodology is designed to create lasting
                organizational transformation.
              </p>

              <Row className="g-4 mb-5">
                <Col md={6}>
                  <Card className="border-start border-primary border-4 border-0 h-100">
                    <Card.Body>
                      <h5 className="fw-semibold text-primary">1. Comprehensive Assessment & Analysis</h5>
                      <p className="text-muted fw-light small">
                        Conduct thorough organizational analysis including skill gap assessment, performance evaluation,
                        career aspiration mapping, and strategic alignment to create a foundation for targeted
                        development.
                      </p>
                      <ProgressBar variant="primary" now={100} className="mb-2" style={{ height: "4px" }} />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-start border-success border-4 border-0 h-100">
                    <Card.Body>
                      <h5 className="fw-semibold text-success">2. Customized Program Design</h5>
                      <p className="text-muted fw-light small">
                        Develop tailored learning pathways, competency frameworks, and development programs that align
                        with individual career goals and organizational strategic objectives.
                      </p>
                      <ProgressBar variant="success" now={85} className="mb-2" style={{ height: "4px" }} />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-start border-info border-4 border-0 h-100">
                    <Card.Body>
                      <h5 className="fw-semibold text-info">3. Multi-Modal Implementation</h5>
                      <p className="text-muted fw-light small">
                        Execute development programs through diverse delivery methods including workshops, mentoring,
                        e-learning, project-based learning, and experiential development opportunities.
                      </p>
                      <ProgressBar variant="info" now={70} className="mb-2" style={{ height: "4px" }} />
                    </Card.Body>
                  </Card>
                </Col>
                <Col md={6}>
                  <Card className="border-start border-warning border-4 border-0 h-100">
                    <Card.Body>
                      <h5 className="fw-semibold text-warning">4. Continuous Monitoring & Optimization</h5>
                      <p className="text-muted fw-light small">
                        Implement robust tracking systems, performance metrics, and feedback mechanisms to ensure
                        program effectiveness and continuous improvement of development initiatives.
                      </p>
                      <ProgressBar variant="warning" now={90} className="mb-2" style={{ height: "4px" }} />
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
              <h2 className="talent-development-section-heading">
                Why Farsight Solution LLP is Your Strategic Talent Development Partner
              </h2>
              <p className="talent-development-content-text">
                Farsight Solution LLP combines deep industry expertise, innovative methodologies, and a proven track
                record of success to deliver talent development solutions that create lasting organizational impact. Our
                commitment to excellence, personalized approach, and focus on measurable results make us the preferred
                partner for organizations seeking transformative talent development outcomes.
              </p>
              <p className="talent-development-content-text">
                We understand that every organization has unique challenges, culture, and objectives. Our approach is
                highly collaborative and customized, ensuring that our talent development solutions align perfectly with
                your strategic vision and deliver sustainable competitive advantage through human capital excellence.
              </p>

              <Row className="g-3">
                {[
                  "Customized Solutions Tailored to Organizational Culture",
                  "Expert Guidance from Certified Development Professionals",
                  "Proven Results with 95% Client Satisfaction Rate",
                  "Holistic Approach Covering All Development Aspects",
                  "Long-Term Partnership and Continuous Support",
                  "Industry Expertise Across Multiple Sectors",
                  "Measurable Outcomes with ROI-Focused Methodology",
                ].map((item, index) => (
                  <Col md={6} key={index}>
                    <motion.div
                      className="d-flex align-items-center mb-2"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Check size={20} className="talent-development-check-icon me-3" />
                      <span className="fw-light">{item}</span>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>

            <FAQAccordion items={faqItems} />
          </Col>
          <Col lg={4}>
            <HRServicesSidebar currentPage="/talent-development" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default TalentDevelopment
