import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import '../../assets/scss/pages/home.scss';

const EmpoweringStartupsSection = () => {
  const processSteps = [
    {
      icon: "assets/images/aboutus.png",
      title: "Understanding Needs",
      description:
        "At Farsight Solutions, we begin by analyzing your objectives, industry challenges, and growth ambitions to craft customized solutions that align with your vision.",
    },
    {
      icon: "assets/images/aboutus.png",
      title: "Strategizing Solutions",
      description:
        "With Farsight Solutions' expertise, we design comprehensive strategies that combine our knowledge in BPO, IT, finance, compliance, and more for your business.",
    },
    {
      icon: "assets/images/aboutus.png",
      title: "Implementing with Precision",
      description:
        "Farsight Solutions' experienced teams deploy solutions with precision, ensuring seamless integration and immediate impact on your operations.",
    },
    {
      icon: "assets/images/aboutus.png",
      title: "Continuous Support & Optimization",
      description:
        "Farsight Solutions provides ongoing support, monitoring, and optimization to keep your business agile and prepared for future growth.",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  }

  return (
    <div className="working-process-section">
      <Container>
        <motion.div 
          className="process-header-top"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="process-line"></span>
          <span className="process-text">Work Process</span>
        </motion.div>

        <motion.h2 
          className="process-main-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {"Our Working Process at Farsight Solutions".split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.03 }}
              viewport={{ once: true }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div 
          className="process-steps-row"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Row>
            {processSteps.map((step, index) => (
              <Col lg={3} md={6} sm={12} key={index} className="process-step-col">
                <motion.div className="process-step-content" variants={stepVariants}>
                  <motion.div 
                    className="icon-circle"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <img src={step.icon} alt={step.title} className="step-icon" />
                  </motion.div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </motion.div>

                {index < processSteps.length - 1 && (
                  <motion.div 
                    className="arrow-container"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="dashed-arrow"></div>
                  </motion.div>
                )}
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </div>
  )
}

export default EmpoweringStartupsSection;
