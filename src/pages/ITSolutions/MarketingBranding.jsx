"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Home, Check } from "lucide-react";
import ItSolutionSidebar from "../../components/ITsolutions/ItSolutionSidebar";
import FaqAccordion from "../../components/ITSolutions/FaqAccordion";
import "../../assets/scss/pages/marketing-branding.scss";

const MarketingBranding = () => {
  const faqItems = [
    {
      question:
        "What digital marketing services does Farsight Solution provide?",
      answer:
        "Farsight Solution offers a complete range of digital marketing services, including SEO, SEM, Social Media Marketing, Content Marketing, Email Marketing, Online Reputation Management (ORM), and E-commerce Marketing. We design tailored strategies that align with your business goals and help your brand grow online.",
    },
    {
      question: "How can digital marketing help my business grow?",
      answer:
        "Digital marketing increases your online visibility, attracts the right audience, generates quality leads, and improves your brand credibility. With data-driven campaigns, your business can scale globally while achieving measurable ROI and sustainable long-term growth.",
    },
    {
      question: "Do you provide social media marketing services?",
      answer:
        "Yes. We offer complete social media marketing services including strategy development, engaging content creation, community management, influencer collaboration, paid advertising campaigns, and analytics. We help your brand build trust, connect with the audience, and increase sales.",
    },
    {
      question: "How do you measure the success of campaigns?",
      answer:
        "We track multiple KPIs such as website traffic, lead generation, conversions, cost per acquisition, engagement metrics, customer lifetime value (CLV), and overall ROI. Regular reports ensure full transparency and allow you to see campaign progress at every step.",
    },
    {
      question: "Can Farsight Solution help with eCommerce marketing?",
      answer:
        "Absolutely. We specialize in eCommerce SEO, Google Shopping Ads, product listing optimization, social commerce strategies, and personalized email automation to help online stores grow sales and retain customers.",
    },
    {
      question: "Do you provide branding services along with marketing?",
      answer:
        "Yes. We combine digital marketing with strong brand identity development. Our services include brand positioning, storytelling, logo & visual design, and reputation management to ensure your business builds authority online.",
    },
  ];

  return (
    <div className="marketing-branding-wrapper">
      {/* Hero Section */}
      <section className="marketing-branding-hero">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="hero-title">Marketing & Branding</h1>
              <div className="breadcrumbs">
                <Home size={16} className="breadcrumb-icon" />
                <span className="breadcrumb-text">Home</span>
                <span className="breadcrumb-separator">|</span>
                <span className="breadcrumb-text">Marketing & Branding</span>
              </div>
            </Col>
            <Col md={6}>
              <img
                src="https://razorinfotech.com/assets/img/razor-img/banners/software-development-service-banner.webp"
                alt="Marketing & Branding by Farsight Solution"
                className="hero-image img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Main Content */}
      <section className="main-content">
        <Container>
          <Row>
            {/* Main Content Column */}
            <Col lg={8}>
              <h2 className="section-heading">
                Digital Marketing & Branding Services by Farsight Solution
              </h2>
              <h3 className="sub-heading">
                Grow Your Business With Targeted & Data-Driven Strategies
              </h3>
              <p className="content-text">
                Farsight Solution is a results-driven digital marketing company
                that focuses on transparency, performance, and measurable
                growth. We specialize in delivering customized marketing
                solutions that help businesses increase visibility, engage with
                the right audience, and achieve long-term growth.
              </p>

              <h2 className="section-heading">
                Our Core Digital Marketing Services
              </h2>

              <h3 className="sub-heading">Search Engine Optimization (SEO)</h3>
              <p className="content-text">
                We optimize your website to rank higher on search engines,
                generate organic traffic, and build long-term visibility using
                white-hat SEO techniques.
              </p>

              <h3 className="sub-heading">Social Media Marketing (SMM)</h3>
              <p className="content-text">
                Our social media experts create engaging campaigns on platforms
                like Facebook, Instagram, LinkedIn, and Twitter to grow your
                community and increase brand loyalty.
              </p>

              <h3 className="sub-heading">Content Marketing</h3>
              <p className="content-text">
                High-quality content builds authority. Our team creates blogs,
                articles, case studies, and videos that educate your audience
                while improving conversions.
              </p>

              <h3 className="sub-heading">Email Marketing</h3>
              <p className="content-text">
                We design automated and personalized email campaigns that help
                nurture leads, retain customers, and increase revenue.
              </p>

              <h3 className="sub-heading">Online Reputation Management</h3>
              <p className="content-text">
                Protect your brand with proactive monitoring, review management,
                and reputation-building strategies.
              </p>

              <h3 className="sub-heading">E-Commerce Marketing</h3>
              <p className="content-text">
                From product SEO to paid advertising, we help online stores
                boost sales and customer retention.
              </p>
            </Col>

            {/* Sidebar Column */}
            <Col lg={4} className="mt-4 mt-lg-0">
              <ItSolutionSidebar />
            </Col>
          </Row>
        </Container>

        <Container className="mt-5">
          <Row>
            <Col lg={12}>
              <h2 className="section-heading">
                Why Businesses Choose Farsight Solution
              </h2>
              <Row className="g-4">
                <Col md={6}>
                  <div className="feature-box">
                    <h3 className="feature-title">
                      Data-Driven Marketing Campaigns
                    </h3>
                    <p className="content-text">
                      We use analytics & AI tools to ensure your campaigns
                      achieve measurable growth.
                    </p>
                  </div>
                </Col>
                <Col md={6}>
                  <div className="feature-box">
                    <h3 className="feature-title">Industry Experts</h3>
                    <p className="content-text">
                      Our experienced team brings proven strategies across
                      multiple industries.
                    </p>
                  </div>
                </Col>
              </Row>

              {/* FAQ Section */}
              <FaqAccordion items={faqItems} />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default MarketingBranding;
