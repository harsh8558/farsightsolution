import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ItSolutionSidebar from "../../components/ITsolutions/ItSolutionSidebar";
import FaqAccordion from "../../components/ITSolutions/FaqAccordion";
import "../../assets/scss/pages/back-office.scss";

const BackOffice = () => {
  const faqItems = [
    { question: "What is Back Office Outsourcing?", answer: "Back office outsourcing involves hiring an external team to handle non-customer-facing tasks like data entry, accounting, payroll, HR, and other administrative duties, allowing businesses to focus on their core functions." },
    { question: "Which industries can benefit from Back Office BPO services?", answer: "E-commerce, retail, IT, banking & finance, healthcare, and manufacturing can leverage back office BPO services to streamline operations, reduce costs, and improve overall efficiency." },
    { question: "What are the cost benefits of outsourcing back office operations?", answer: "Outsourcing back office functions reduces operational expenses, including recruitment, infrastructure, and employee training costs, while improving efficiency and service quality." },
    { question: "Do you provide multilingual support?", answer: "Yes, our team can assist in multiple languages, including English, Hindi, Spanish, French, and others, enabling seamless operations across different regions." },
    { question: "Is data security maintained?", answer: "Yes, we follow strict data security protocols, encryption methods, and compliance standards (such as GDPR and HIPAA) to ensure that all business and customer data is handled securely and confidentially." },
    { question: "Do you provide 24/7 back office support?", answer: "Yes, we provide round-the-clock back office services to ensure uninterrupted business operations, handling tasks like data processing, payroll, and administrative support without delays." },
    { question: "How quickly can you deploy a back office team?", answer: "After understanding your specific requirements, we can deploy a dedicated back office team within a few days, ensuring a smooth transition and immediate support." },
    { question: "Can the back office team scale with my business?", answer: "Yes, our back office services are fully scalable. Whether you need to scale up during peak seasons or reduce the team size during slower periods, we can adjust quickly." },
    { question: "What back office functions do you cover?", answer: "We handle a wide range of back office tasks, including data entry, accounting, payroll processing, HR functions, document management, and other administrative support services." },
    { question: "Why choose Farsight Solution for back office outsourcing?", answer: "We offer a dedicated team with expertise in back office operations, cost-effective solutions, advanced technology, data security, and compliance with industry standards, helping you optimize your business operations." },
];

  return (
    <div className="back-office-page">
      {/* Hero Section */}
      <section className="back-office-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="back-office-hero-content">
                <h1 className="back-office-hero-title">
                  Professional Back Office Services by Farsight Solution
                </h1>
                <p className="back-office-hero-description">
                  Streamline your business operations with our comprehensive back office services. 
                  We provide data entry, document management, administrative support, and process 
                  optimization solutions that enhance efficiency and reduce operational costs.
                </p>
                <button className="explore-btn">
                  <span>Get Quote</span>
                  <span>Contact Us</span>
                </button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="back-office-hero-image">
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop&crop=center"
                  alt="Professional Back Office Services by Farsight Solution"
                  className="back-office-hero-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="back-office-stats">
        <Container>
          <Row className="justify-content-center">
            <Col md={3} sm={6} className="text-center mb-4">
              <div className="back-office-stat-item">
                <div className="back-office-stat-icon">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=80&h=80&fit=crop&crop=center"
                    alt="Projects Completed"
                    className="back-office-stat-img"
                  />
                </div>
                <div className="back-office-stat-number">2000+</div>
                <div className="back-office-stat-text">Projects Completed Successfully</div>
              </div>
            </Col>
            <Col md={3} sm={6} className="text-center mb-4">
              <div className="back-office-stat-item">
                <div className="back-office-stat-icon">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=80&h=80&fit=crop&crop=center"
                    alt="Expert Professionals"
                    className="back-office-stat-img"
                  />
                </div>
                <div className="back-office-stat-number">200+</div>
                <div className="back-office-stat-text">Expert Back Office Professionals</div>
              </div>
            </Col>
            <Col md={3} sm={6} className="text-center mb-4">
              <div className="back-office-stat-item">
                <div className="back-office-stat-icon">
                  <img
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=80&h=80&fit=crop&crop=center"
                    alt="Service Centers"
                    className="back-office-stat-img"
                  />
                </div>
                <div className="back-office-stat-number">3+</div>
                <div className="back-office-stat-text">Service Centers Pan India</div>
              </div>
            </Col>
            <Col md={3} sm={6} className="text-center mb-4">
              <div className="back-office-stat-item">
                <div className="back-office-stat-icon">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=80&h=80&fit=crop&crop=center"
                    alt="Years Experience"
                    className="back-office-stat-img"
                  />
                </div>
                <div className="back-office-stat-number">8+</div>
                <div className="back-office-stat-text">Years of Industry Experience</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Content with Sidebar */}
      <section className="back-office-main">
        <Container>
          <Row>
            <Col lg={8}>
              {/* Services Section */}
              <div className="back-office-services">
                <div className="back-office-services-header">
                  <span className="back-office-services-subtitle">OUR EXPERTISE</span>
                  <h2 className="back-office-services-title">
                    Comprehensive Back Office Solutions
                  </h2>
                  <p className="back-office-services-description">
                    Farsight Solution provides end-to-end back office services designed to optimize 
                    your business operations. Our expert team handles administrative tasks, data management, 
                    and process optimization, allowing you to focus on core business activities.
                  </p>
                </div>

                <Row className="mb-5">
                  <Col lg={6} md={6} className="mb-4">
                    <Card className="back-office-service-card h-100">
                      <Card.Img 
                        variant="top" 
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop&crop=center"
                        alt="Data Entry Services"
                      />
                      <Card.Body>
                        <Card.Title className="back-office-service-name">
                          Data Entry Services
                        </Card.Title>
                        <Card.Text className="back-office-service-text">
                          Accurate and efficient data entry services including online/offline data entry, 
                          form processing, database management, and data conversion from various formats.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={6} md={6} className="mb-4">
                    <Card className="back-office-service-card h-100">
                      <Card.Img 
                        variant="top" 
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop&crop=center"
                        alt="Document Management Services"
                      />
                      <Card.Body>
                        <Card.Title className="back-office-service-name">
                          Document Management
                        </Card.Title>
                        <Card.Text className="back-office-service-text">
                          Complete document lifecycle management including digitization, indexing, 
                          storage, retrieval, and archive management with secure access controls.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={6} md={6} className="mb-4">
                    <Card className="back-office-service-card h-100">
                      <Card.Img 
                        variant="top" 
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop&crop=center"
                        alt="Administrative Support Services"
                      />
                      <Card.Body>
                        <Card.Title className="back-office-service-name">
                          Administrative Support
                        </Card.Title>
                        <Card.Text className="back-office-service-text">
                          Virtual assistance, appointment scheduling, email management, travel coordination, 
                          and general administrative tasks to streamline your operations.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={6} md={6} className="mb-4">
                    <Card className="back-office-service-card h-100">
                      <Card.Img 
                        variant="top" 
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop&crop=center"
                        alt="Finance and Accounting Services"
                      />
                      <Card.Body>
                        <Card.Title className="back-office-service-name">
                          Finance & Accounting
                        </Card.Title>
                        <Card.Text className="back-office-service-text">
                          Bookkeeping, accounts payable/receivable, payroll processing, tax preparation, 
                          financial reporting, and compliance management services.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={6} md={6} className="mb-4">
                    <Card className="back-office-service-card h-100">
                      <Card.Img 
                        variant="top" 
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=center"
                        alt="Human Resources Services"
                      />
                      <Card.Body>
                        <Card.Title className="back-office-service-name">
                          Human Resources
                        </Card.Title>
                        <Card.Text className="back-office-service-text">
                          Recruitment support, employee onboarding, benefits administration, 
                          performance tracking, and HR documentation management.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={6} md={6} className="mb-4">
                    <Card className="back-office-service-card h-100">
                      <Card.Img 
                        variant="top" 
                        src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=250&fit=crop&crop=center"
                        alt="Process Optimization Services"
                      />
                      <Card.Body>
                        <Card.Title className="back-office-service-name">
                          Process Optimization
                        </Card.Title>
                        <Card.Text className="back-office-service-text">
                          Business process analysis, workflow optimization, automation implementation, 
                          and continuous improvement strategies to enhance efficiency.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                {/* Benefits Section */}
                <div className="back-office-benefits">
                  <div className="back-office-benefits-header">
                    <span className="back-office-benefits-subtitle">KEY ADVANTAGES</span>
                    <h2 className="back-office-benefits-title">
                      Why Choose Farsight Solution Back Office Services?
                    </h2>
                  </div>

                  <Row>
                    <Col lg={6} className="mb-4">
                      <div className="back-office-benefit-item">
                        <div className="back-office-benefit-icon">
                          <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=60&h=60&fit=crop&crop=center"
                            alt="Cost Efficiency"
                            className="back-office-benefit-img"
                          />
                        </div>
                        <div className="back-office-benefit-content">
                          <h4 className="back-office-benefit-name">Cost Efficiency</h4>
                          <p className="back-office-benefit-text">
                            Reduce operational costs by up to 40% with our optimized back office solutions. 
                            Eliminate overhead expenses while maintaining high-quality service delivery.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} className="mb-4">
                      <div className="back-office-benefit-item">
                        <div className="back-office-benefit-icon">
                          <img
                            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=60&h=60&fit=crop&crop=center"
                            alt="Scalability"
                            className="back-office-benefit-img"
                          />
                        </div>
                        <div className="back-office-benefit-content">
                          <h4 className="back-office-benefit-name">Flexible Scalability</h4>
                          <p className="back-office-benefit-text">
                            Scale your operations up or down based on business needs. Our flexible 
                            resource allocation ensures optimal efficiency during peak and low seasons.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} className="mb-4">
                      <div className="back-office-benefit-item">
                        <div className="back-office-benefit-icon">
                          <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=60&h=60&fit=crop&crop=center"
                            alt="Quality Assurance"
                            className="back-office-benefit-img"
                          />
                        </div>
                        <div className="back-office-benefit-content">
                          <h4 className="back-office-benefit-name">Quality Assurance</h4>
                          <p className="back-office-benefit-text">
                            99.9% accuracy guarantee with multi-level quality checks, standardized processes, 
                            and continuous monitoring to ensure error-free deliverables.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} className="mb-4">
                      <div className="back-office-benefit-item">
                        <div className="back-office-benefit-icon">
                          <img
                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=60&h=60&fit=crop&crop=center"
                            alt="Technology Integration"
                            className="back-office-benefit-img"
                          />
                        </div>
                        <div className="back-office-benefit-content">
                          <h4 className="back-office-benefit-name">Advanced Technology</h4>
                          <p className="back-office-benefit-text">
                            State-of-the-art technology stack including automation tools, cloud platforms, 
                            and AI-powered solutions for enhanced productivity and efficiency.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="back-office-sidebar">
                <ItSolutionSidebar />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Section */}
      <section className="back-office-choose">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="back-office-choose-image">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop&crop=center"
                  alt="Why Choose Farsight Solution for Back Office Services"
                  className="back-office-choose-img"
                />
                <div className="back-office-choose-badge">
                  <div className="back-office-choose-years">8+</div>
                  <div className="back-office-choose-experience">Years Experience</div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="back-office-choose-content">
                <span className="back-office-choose-subtitle">WHY CHOOSE US</span>
                <h2 className="back-office-choose-title">
                  Why Farsight Solution is Your Best Choice?
                </h2>
                <p className="back-office-choose-description">
                  Farsight Solution delivers exceptional back office services with proven expertise 
                  across industries. Our commitment to quality, security, and client satisfaction 
                  makes us the preferred choice for businesses worldwide.
                </p>
                <ul className="back-office-choose-list">
                  <li className="back-office-choose-item">
                    <strong>24/7 Operations:</strong> Round-the-clock service delivery
                  </li>
                  <li className="back-office-choose-item">
                    <strong>Multi-language Support:</strong> Services in 25+ languages
                  </li>
                  <li className="back-office-choose-item">
                    <strong>Dedicated Teams:</strong> Specialized consultants for each project
                  </li>
                  <li className="back-office-choose-item">
                    <strong>99.9% Accuracy:</strong> Guaranteed precision in all deliverables
                  </li>
                  <li className="back-office-choose-item">
                    <strong>Performance Monitoring:</strong> Real-time tracking and reporting
                  </li>
                  <li className="back-office-choose-item">
                    <strong>Industry Expertise:</strong> Domain knowledge across sectors
                  </li>
                  <li className="back-office-choose-item">
                    <strong>100% Compliance:</strong> Fully statutory and legally compliant
                  </li>
                  <li className="back-office-choose-item">
                    <strong>Secure Infrastructure:</strong> ISO certified data security protocols
                  </li>
                </ul>
                <div className="back-office-choose-cta">
                  <button className="explore-btn">
                    <span>Learn More</span>
                    <span>Explore Services</span>
                  </button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="back-office-faq">
        <Container>
          {/* <div className="back-office-faq-header text-center">
            <span className="back-office-faq-subtitle">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="back-office-faq-title">
              Back Office Services FAQs
            </h2>
            <p className="back-office-faq-description">
              Get answers to common questions about our back office services and solutions.
            </p>
          </div> */}
          <Row className="justify-content-center">
            <Col lg={10}>
              <FaqAccordion items={faqItems} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default BackOffice;