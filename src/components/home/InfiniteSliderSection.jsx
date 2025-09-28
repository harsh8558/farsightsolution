import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/scss/pages/home.scss';

const InfiniteSliderSection = () => {
  const services = [
    {
      title: "Software Development",
      icon: "assets/images/slider/ai.png",
      link: "/it-solutions/software-development",
      description: "Custom software solutions tailored to your business"
    },
    {
      title: "App Development",
      icon: "assets/images/slider/ai.png",
      link: "/it-solutions/app-development",
      description: "Mobile apps for iOS and Android platforms"
    },
    {
      title: "Website Development",
      icon: "assets/images/slider/ai.png",
      link: "/it-solutions/website-development",
      description: "Responsive and modern website solutions"
    },
    {
      title: "Marketing & Branding",
      icon: "assets/images/slider/ai.png",
      link: "/it-solutions/marketing-branding",
      description: "Comprehensive digital marketing strategies"
    },
    {
      title: "Web Hosting",
      icon: "assets/images/slider/ai.png",
      link: "/it-solutions/web-hosting",
      description: "Reliable and secure hosting services"
    },
    {
      title: "Customer Support",
      icon: "assets/images/slider/ai.png",
      link: "/bpo-services/customer-support",
      description: "24/7 customer service solutions"
    },
    {
      title: "HR Outsourcing",
      icon: "assets/images/slider/ai.png",
      link: "/hr-outsource",
      description: "End-to-end HR management services"
    },
    {
      title: "BPO Services",
      icon: "assets/images/slider/ai.png",
      link: "/bpo-services",
      description: "Business process optimization"
    },
    {
      title: "Back Office",
      icon: "assets/images/slider/ai.png",
      link: "/bpo-services/back-office",
      description: "Efficient back-office operations"
    },
    {
      title: "Content Management",
      icon: "assets/images/slider/ai.png",
      link: "/bpo-services/content-management",
      description: "Professional content creation services"
    },
    {
      title: "IT Helpdesk",
      icon: "assets/images/slider/ai.png",
      link: "/bpo-services/it-helpdesk",
      description: "Technical support solutions"
    },
    {
      title: "RPO",
      icon: "assets/images/slider/ai.png",
      link: "/hr-outsource/rpo",
      description: "Recruitment process outsourcing"
    },
    {
      title: "Training & Development",
      icon: "assets/images/slider/ai.png",
      link: "/hr-outsource/training-development",
      description: "Employee skill enhancement programs"
    },
    {
      title: "Legal Compliance",
      icon: "assets/images/slider/ai.png",
      link: "/explore-more/legal-compliance",
      description: "Regulatory compliance solutions"
    },
    {
      title: "Financial Services",
      icon: "assets/images/slider/ai.png",
      link: "/explore-more/financial-services",
      description: "Accounting and financial management"
    }
  ];

  return (
    <section className="farsight-slider-section">
      <div className="farsight-slider-heading">
        <h2>Our Comprehensive Services</h2>
        <p>Explore our wide range of business solutions</p>
      </div>
      <div className="farsight-slider-container">
        <div className="farsight-slider-track ">
          {[...services, ...services].map((service, index) => (
            <div className="farsight-slide-card" key={`slide-${index}`}>
              <div className="farsight-slide-content pb-3">
                <img 
                  src={service.icon} 
                  alt={service.title} 
                  className="farsight-slide-icon"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "assets/images/slider/ai.png";
                  }}
                />
                <h3 className="farsight-slide-title">{service.title}</h3>
                <p className="farsight-slide-description">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="farsight-slide-button"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfiniteSliderSection; 