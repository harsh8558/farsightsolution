import React from "react";

import { Container, Row, Col, Button, Card, Tab, Tabs } from "react-bootstrap"
import "../../assets/scss/pages/content-management.scss"
const ContentManagement = () => {
  return (
    <div className="content-management-page">
      {/* Hero Section */}
      <section className="content-management-hero">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className="content-management-hero-title">Content Management Services</h1>
            </Col>
            <Col lg={6}>
              <div className="content-management-hero-image">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Content Management Services"
                  className="content-management-hero-img"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Statistics Section */}
      <section className="content-management-stats">
        <Container>
          <Row>
            <Col md={4}>
              <div className="content-management-stat-item text-center">
                <div className="content-management-stat-icon">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Customers"
                    className="content-management-stat-img"
                  />
                </div>
                <div className="content-management-stat-number">5L+</div>
                <div className="content-management-stat-text">CUSTOMERS CONNECT PER YEAR</div>
              </div>
            </Col>
            <Col md={4}>
              <div className="content-management-stat-item text-center">
                <div className="content-management-stat-icon">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Expert Computer"
                    className="content-management-stat-img"
                  />
                </div>
                <div className="content-management-stat-number">334+</div>
                <div className="content-management-stat-text">Expert Computer</div>
              </div>
            </Col>
            <Col md={4}>
              <div className="content-management-stat-item text-center">
                <div className="content-management-stat-icon">
                  <img
                    src="/placeholder.svg?height=60&width=60"
                    alt="Delivery Centers"
                    className="content-management-stat-img"
                  />
                </div>
                <div className="content-management-stat-number">2+</div>
                <div className="content-management-stat-text">DELIVERY CENTERS DELHI & NOIDA</div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className="content-management-services">
        <Container>
          <div className="content-management-services-header">
            <div className="content-management-services-subtitle">CONTENT MANAGEMENT SERVICE</div>
            <h2 className="content-management-services-title">We Provide Best Content Management Service</h2>
          </div>
          <Row>
            <Col lg={6} className="mb-4">
              <div className="content-management-service-card">
                <div className="content-management-service-image">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Content Creation Services"
                    className="content-management-service-img"
                  />
                </div>
                <div className="content-management-service-footer">
                  <h4 className="content-management-service-name">Content Creation Services</h4>
                </div>
              </div>
            </Col>
            <Col lg={6} className="mb-4">
              <div className="content-management-service-card">
                <div className="content-management-service-image">
                  <img
                    src="/placeholder.svg?height=200&width=400"
                    alt="Content Moderation Services"
                    className="content-management-service-img"
                  />
                </div>
                <div className="content-management-service-footer">
                  <h4 className="content-management-service-name">Content Moderation Services</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Advantages Section */}
      <section className="content-management-advantages">
        <Container>
          <div className="content-management-advantages-header">
            <div className="content-management-advantages-subtitle">CONTENT MANAGEMENT SERVICES</div>
            <h2 className="content-management-advantages-title">
              Unlock the Advantages Of Content Management Services
            </h2>
          </div>
          <Row>
            <Col lg={4} className="mb-4">
              <div className="content-management-advantage-card">
                <div className="content-management-advantage-icon">
                  <img
                    src="/placeholder.svg?height=50&width=50"
                    alt="Flexibility"
                    className="content-management-advantage-img"
                  />
                </div>
                <div className="content-management-advantage-content">
                  <h4 className="content-management-advantage-name">Flexibility</h4>
                  <p className="content-management-advantage-text">
                    Scale your workforce up or down quickly based on project needs. Back Office Services allows
                    businesses to adjust to changing demands without the commitment of permanent hires.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <div className="content-management-advantage-card">
                <div className="content-management-advantage-icon">
                  <img
                    src="/placeholder.svg?height=50&width=50"
                    alt="Cost-Effective"
                    className="content-management-advantage-img"
                  />
                </div>
                <div className="content-management-advantage-content">
                  <h4 className="content-management-advantage-name">Cost-Effective</h4>
                  <p className="content-management-advantage-text">
                    Reduce hiring and onboarding costs by bringing in talent only when needed. This approach helps you
                    save on full-time salaries and benefits, making it budget-friendly.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <div className="content-management-advantage-card">
                <div className="content-management-advantage-icon">
                  <img
                    src="/placeholder.svg?height=50&width=50"
                    alt="Access to Expertise"
                    className="content-management-advantage-img"
                  />
                </div>
                <div className="content-management-advantage-content">
                  <h4 className="content-management-advantage-name">Access to Expertise</h4>
                  <p className="content-management-advantage-text">
                    Gain specialized skills for specific projects without long-term commitments. Contract professionals
                    bring targeted expertise that can enhance project quality.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <div className="content-management-advantage-card">
                <div className="content-management-advantage-icon">
                  <img
                    src="/placeholder.svg?height=50&width=50"
                    alt="Faster Hiring Process"
                    className="content-management-advantage-img"
                  />
                </div>
                <div className="content-management-advantage-content">
                  <h4 className="content-management-advantage-name">Faster Hiring Process</h4>
                  <p className="content-management-advantage-text">
                    Quickly fill roles to meet urgent project demands and deadlines. Back Office Services agencies
                    streamline the recruitment process, helping you find talent fast.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <div className="content-management-advantage-card">
                <div className="content-management-advantage-icon">
                  <img
                    src="/placeholder.svg?height=50&width=50"
                    alt="Reduced Risk"
                    className="content-management-advantage-img"
                  />
                </div>
                <div className="content-management-advantage-content">
                  <h4 className="content-management-advantage-name">Reduced Risk</h4>
                  <p className="content-management-advantage-text">
                    Minimize risks associated with full-time hiring and long-term employment. Temporary hires allow
                    businesses to avoid the challenges of permanent staff adjustments.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={4} className="mb-4">
              <div className="content-management-advantage-card">
                <div className="content-management-advantage-icon">
                  <img
                    src="/placeholder.svg?height=50&width=50"
                    alt="Focus on Core Business"
                    className="content-management-advantage-img"
                  />
                </div>
                <div className="content-management-advantage-content">
                  <h4 className="content-management-advantage-name">Focus on Core Business</h4>
                  <p className="content-management-advantage-text">
                    Free up resources to concentrate on growth and productivity. With our Back Office Services services,
                    your core team can focus on strategic goals.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Why Choose Section */}
      <section className="content-management-choose">
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="content-management-choose-image">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Why Choose Razor Infotech"
                  className="content-management-choose-img"
                />
                <div className="content-management-choose-badge">
                  <div className="content-management-choose-years">0+</div>
                  <div className="content-management-choose-experience">Years Experience</div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="content-management-choose-content">
                <div className="content-management-choose-subtitle">ABOUT US</div>
                <h2 className="content-management-choose-title">Why Choose Razor Infotech ?</h2>
                <ul className="content-management-choose-list">
                  <li className="content-management-choose-item">24*7 coverage</li>
                  <li className="content-management-choose-item">60+ languages</li>
                  <li className="content-management-choose-item">Dedicated or shared support consultant</li>
                  <li className="content-management-choose-item">Reliable service</li>
                  <li className="content-management-choose-item">Constant analysis of your business performance</li>
                  <li className="content-management-choose-item">Brand development expertise</li>
                  <li className="content-management-choose-item">
                    100% Guaranteed Statutory & Legal Compliant Solution
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default ContentManagement
