import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../assets/scss/pages/home.scss';



const ISOExcellenceSection = () => {
  return (
    <div className="iso-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={4} md={5} sm={12} className="iso-logo-col">
            <div className="iso-badge">
              <div className="iso-circle">
                <div className="iso-text-top">International Organization for Standardization</div>
                <div className="iso-globe">
                  <div className="globe-lines">
                    <div className="line horizontal-1"></div>
                    <div className="line horizontal-2"></div>
                    <div className="line horizontal-3"></div>
                    <div className="line vertical-1"></div>
                    <div className="line vertical-2"></div>
                    <div className="line vertical-3"></div>
                  </div>
                  <div className="iso-main-text">ISO</div>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={8} md={7} sm={12} className="iso-content-col">
            <div className="iso-content">
              <h2 className="iso-title">ISO-Certified Excellence</h2>
              <p className="iso-description">
                At Razor Infotech, we prioritize security and quality in everything we create. All our products are
                ISO-certified, ensuring they meet global standards for information security management and quality
                assurance. From Development to deployment, we guarantee top-tier security measures and industry-leading
                quality, giving our clients the confidence that their solutions are robust, reliable, and fully
                compliant with international standards.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ISOExcellenceSection

