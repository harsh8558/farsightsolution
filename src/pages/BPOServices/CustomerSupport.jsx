import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import ItSolutionSidebar from "../../components/ITsolutions/ItSolutionSidebar";
import FaqAccordion from "../../components/ITSolutions/FaqAccordion";
import "../../assets/scss/pages/customer-support.scss";

const CustomerSupport = () => {
   const faqItems = [
    { question: "What is Customer Support Outsourcing?", answer: "Customer support outsourcing involves hiring a professional external team to handle customer queries, complaints, and technical support efficiently, allowing businesses to focus on their core activities." },
    { question: "Which industries can benefit from BPO services?", answer: "E-commerce, retail, IT, banking & finance, healthcare, and startups can leverage BPO services to improve operational efficiency and provide seamless customer support." },
    { question: "What are the cost benefits of outsourcing?", answer: "Outsourcing reduces expenses on recruitment, infrastructure, employee training, and overheads. You only pay for the services you need, saving significant operational costs." },
    { question: "Do you provide multilingual support?", answer: "Yes, our team can communicate in multiple languages including English, Hindi, Spanish, French, and more, ensuring global customer satisfaction." },
    { question: "Is customer data secure?", answer: "We follow strict security protocols, encryption methods, and compliance standards to ensure that all customer and business data remains confidential." },
    { question: "Do you provide 24/7 support?", answer: "Yes, our customer support team operates around the clock to handle queries, complaints, and technical issues without delays." },
    { question: "How quickly can you deploy a support team?", answer: "After understanding your requirements, we can deploy a dedicated team within a few days to start your customer support operations immediately." },
    { question: "Can the team scale with my business?", answer: "Yes, our services are fully scalable. You can expand or reduce team size as per business demand and seasonal requirements." },
    { question: "What support channels do you cover?", answer: "We cover voice calls, emails, live chat, social media, and omnichannel support to provide a seamless customer experience." },
    { question: "Why choose Farsight Solution for customer support?", answer: "We provide a dedicated and experienced team, cost-effective solutions, advanced tools, multilingual support, and strict adherence to quality and compliance standards." },
  ];
  return (
    <div className="customer-support-page">
      {/* Hero Section */}
      <section className="customer-support-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="customer-support-hero-content">
                <h1 className="customer-support-hero-title">
                  Expert Customer Support Services by Farsight Solution
                </h1>
                <p className="customer-support-hero-description">
                  Deliver exceptional customer experiences with our comprehensive support services. 
                  We provide 24/7 multilingual support solutions that enhance customer satisfaction 
                  and drive business growth through professional service delivery.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="customer-support-hero-image">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop&crop=center"
                  alt="Professional Customer Support Services by Farsight Solution"
                  className="customer-support-hero-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="customer-support-stats">
        <Container>
          <Row className="justify-content-center">
            <Col md={3} sm={6} className="text-center mb-4">
              <div className="customer-support-stat-item">
                <div className="customer-support-stat-icon">
                  <img
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=80&h=80&fit=crop&crop=center"
                    alt="Global Customers"
                    className="customer-support-stat-img"
                  />
                </div>
                <div className="customer-support-stat-number">10K+</div>
                <div className="customer-support-stat-text">Happy Customers Worldwide</div>
              </div>
            </Col>
            <Col md={3} sm={6} className="text-center mb-4">
              <div className="customer-support-stat-item">
                <div className="customer-support-stat-icon">
                  <img
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=80&h=80&fit=crop&crop=center"
                    alt="Expert Professionals"
                    className="customer-support-stat-img"
                  />
                </div>
                <div className="customer-support-stat-number">150+</div>
                <div className="customer-support-stat-text">Expert Support Professionals</div>
              </div>
            </Col>
            <Col md={3} sm={6} className="text-center mb-4">
              <div className="customer-support-stat-item">
                <div className="customer-support-stat-icon">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=80&h=80&fit=crop&crop=center"
                    alt="Service Centers"
                    className="customer-support-stat-img"
                  />
                </div>
                <div className="customer-support-stat-number">5+</div>
                <div className="customer-support-stat-text">Service Centers Pan India</div>
              </div>
            </Col>
            <Col md={3} sm={6} className="text-center mb-4">
              <div className="customer-support-stat-item">
                <div className="customer-support-stat-icon">
                  <img
                    src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=80&h=80&fit=crop&crop=center"
                    alt="Years Experience"
                    className="customer-support-stat-img"
                  />
                </div>
                <div className="customer-support-stat-number">8+</div>
                <div className="customer-support-stat-text">Years of Excellence</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Content with Sidebar */}
      <section className="customer-support-main">
        <Container>
          <Row>
            <Col lg={8}>
              {/* Services Section */}
              <div className="customer-support-services">
                <div className="customer-support-services-header">
                  <span className="customer-support-services-subtitle">OUR EXPERTISE</span>
                  <h2 className="customer-support-services-title">
                    Comprehensive Customer Support Solutions
                  </h2>
                  <p className="customer-support-services-description">
                    Farsight Solution delivers world-class customer support services designed to enhance 
                    customer satisfaction and business efficiency. Our expert team provides seamless 
                    support across multiple channels and languages.
                  </p>
                </div>

                <Row className="mb-5">
                  <Col lg={6} md={6} className="mb-4">
                    <Card className="customer-support-service-card h-100">
                      <Card.Img 
                        variant="top" 
                        src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&h=250&fit=crop&crop=center"
                        alt="Inbound Customer Support Services"
                      />
                      <Card.Body>
                        <Card.Title className="customer-support-service-name">
                          Inbound Support Services
                        </Card.Title>
                        <Card.Text className="customer-support-service-text">
                          Handle incoming customer queries, complaints, and requests with professional 
                          expertise. Our trained agents provide immediate assistance and resolution.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={6} md={6} className="mb-4">
                    <Card className="customer-support-service-card h-100">
                      <Card.Img 
                        variant="top" 
                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=250&fit=crop&crop=center"
                        alt="Outbound Customer Support Services"
                      />
                      <Card.Body>
                        <Card.Title className="customer-support-service-name">
                          Outbound Support Services
                        </Card.Title>
                        <Card.Text className="customer-support-service-text">
                          Proactive customer outreach for follow-ups, feedback collection, and service 
                          updates. Build stronger customer relationships through strategic communication.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={6} md={6} className="mb-4">
                    <Card className="customer-support-service-card h-100">
                      <Card.Img 
                        variant="top" 
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop&crop=center"
                        alt="Omnichannel Customer Support"
                      />
                      <Card.Body>
                        <Card.Title className="customer-support-service-name">
                          Omnichannel Support
                        </Card.Title>
                        <Card.Text className="customer-support-service-text">
                          Seamless support across phone, email, chat, social media, and mobile apps. 
                          Provide consistent customer experience across all touchpoints.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col lg={6} md={6} className="mb-4">
                    <Card className="customer-support-service-card h-100">
                      <Card.Img 
                        variant="top" 
                        src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=250&fit=crop&crop=center"
                        alt="Email Support Services"
                      />
                      <Card.Body>
                        <Card.Title className="customer-support-service-name">
                          Email Support Services
                        </Card.Title>
                        <Card.Text className="customer-support-service-text">
                          Professional email support with quick response times and detailed solutions. 
                          Manage high-volume email queries efficiently and effectively.
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                {/* Benefits Section */}
                <div className="customer-support-benefits">
                  <div className="customer-support-benefits-header">
                    <span className="customer-support-benefits-subtitle">KEY ADVANTAGES</span>
                    <h2 className="customer-support-benefits-title">
                      Why Choose Farsight Solution Customer Support?
                    </h2>
                  </div>

                  <Row>
                    <Col lg={6} className="mb-4">
                      <div className="customer-support-benefit-item">
                        <div className="customer-support-benefit-icon">
                          <img
                            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=60&h=60&fit=crop&crop=center"
                            alt="24/7 Support"
                            className="customer-support-benefit-img"
                          />
                        </div>
                        <div className="customer-support-benefit-content">
                          <h4 className="customer-support-benefit-name">24/7 Global Support</h4>
                          <p className="customer-support-benefit-text">
                            Round-the-clock customer support ensuring your customers receive assistance 
                            whenever they need it, across different time zones and regions.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} className="mb-4">
                      <div className="customer-support-benefit-item">
                        <div className="customer-support-benefit-icon">
                          <img
                            src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=60&h=60&fit=crop&crop=center"
                            alt="Multilingual Support"
                            className="customer-support-benefit-img"
                          />
                        </div>
                        <div className="customer-support-benefit-content">
                          <h4 className="customer-support-benefit-name">Multilingual Expertise</h4>
                          <p className="customer-support-benefit-text">
                            Support in 25+ languages with native speakers ensuring cultural sensitivity 
                            and accurate communication with your global customer base.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} className="mb-4">
                      <div className="customer-support-benefit-item">
                        <div className="customer-support-benefit-icon">
                          <img
                            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=60&h=60&fit=crop&crop=center"
                            alt="Scalable Solutions"
                            className="customer-support-benefit-img"
                          />
                        </div>
                        <div className="customer-support-benefit-content">
                          <h4 className="customer-support-benefit-name">Scalable Solutions</h4>
                          <p className="customer-support-benefit-text">
                            Flexible support infrastructure that scales with your business growth, 
                            handling peak volumes and seasonal demands efficiently.
                          </p>
                        </div>
                      </div>
                    </Col>
                    <Col lg={6} className="mb-4">
                      <div className="customer-support-benefit-item">
                        <div className="customer-support-benefit-icon">
                          <img
                            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=60&h=60&fit=crop&crop=center"
                            alt="Advanced Technology"
                            className="customer-support-benefit-img"
                          />
                        </div>
                        <div className="customer-support-benefit-content">
                          <h4 className="customer-support-benefit-name">Advanced Technology</h4>
                          <p className="customer-support-benefit-text">
                            Latest CRM systems, AI-powered tools, and analytics platforms for 
                            enhanced service delivery and performance monitoring.
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="customer-support-sidebar">
                <ItSolutionSidebar />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Section */}
      <section className="customer-support-choose">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="customer-support-choose-image">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=500&fit=crop&crop=center"
                  alt="Why Choose Farsight Solution for Customer Support"
                  className="customer-support-choose-img"
                />
                <div className="customer-support-choose-badge">
                  <div className="customer-support-choose-years">8+</div>
                  <div className="customer-support-choose-experience">Years Experience</div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="customer-support-choose-content">
                <span className="customer-support-choose-subtitle">WHY CHOOSE US</span>
                <h2 className="customer-support-choose-title">
                  Why Farsight Solution is Your Best Choice?
                </h2>
                <p className="customer-support-choose-description">
                  Farsight Solution stands out as a premier customer support service provider with 
                  proven expertise in delivering exceptional customer experiences across industries.
                </p>
                <ul className="customer-support-choose-list">
                  <li className="customer-support-choose-item">
                    <strong>24/7 Global Coverage:</strong> Uninterrupted support across time zones
                  </li>
                  <li className="customer-support-choose-item">
                    <strong>25+ Languages:</strong> Native language support for global reach
                  </li>
                  <li className="customer-support-choose-item">
                    <strong>Dedicated Teams:</strong> Specialized consultants for your business
                  </li>
                  <li className="customer-support-choose-item">
                    <strong>99.9% Reliability:</strong> Consistent, dependable service delivery
                  </li>
                  <li className="customer-support-choose-item">
                    <strong>Performance Analytics:</strong> Detailed reporting and insights
                  </li>
                  <li className="customer-support-choose-item">
                    <strong>Industry Expertise:</strong> Deep domain knowledge across sectors
                  </li>
                  <li className="customer-support-choose-item">
                    <strong>100% Compliance:</strong> Fully statutory and legally compliant solutions
                  </li>
                  <li className="customer-support-choose-item">
                    <strong>Cost-Effective:</strong> Competitive pricing with maximum ROI
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="customer-support-faq">
        <Container>
          {/* <div className="customer-support-faq-header text-center">
            <span className="customer-support-faq-subtitle">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="customer-support-faq-title">
              Customer Support Services FAQs
            </h2>
            <p className="customer-support-faq-description">
              Get answers to common questions about our customer support services and solutions.
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

export default CustomerSupport;