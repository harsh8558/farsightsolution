"use client";

import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { Plus, Minus } from "lucide-react";
import "../../assets/scss/components/faq-accordion.scss";

const FaqAccordion = ({ items = [] }) => {
  const [activeKey, setActiveKey] = useState(null);

  return (
    <section className="faq-accordion-wrapper container py-1">
      {/* SEO Friendly Title */}
      <div className="text-center mb-5">
        <h2 className="fw-bold display-5 text-dark">
          Frequently Asked Questions
        </h2>
        <p className="text-muted fs-5">
          Find answers to common questions about our products and services.
        </p>
      </div>

      {/* Bootstrap Accordion */}
      <Accordion
        activeKey={activeKey}
        onSelect={(key) => setActiveKey(key)}
        flush
      >
        {items.map(({ question, answer }, index) => (
          <Accordion.Item eventKey={String(index)} key={index} className="mb-3 shadow-sm rounded border">
            <Accordion.Header>
              <span className="fw-semibold">{question}</span>
              {activeKey === String(index) ? (
                <Minus size={20} className="text-primary ms-auto" />
              ) : (
                <Plus size={20} className="text-primary ms-auto" />
              )}
            </Accordion.Header>
            <Accordion.Body className="text-secondary fs-6 lh-lg">
              {answer}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </section>
  );
};

export default FaqAccordion;
