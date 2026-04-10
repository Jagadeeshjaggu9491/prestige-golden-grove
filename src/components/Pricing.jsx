import React, { useState } from 'react';
import { Container, Row, Col, Tabs, Tab, Button, Badge } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInfoCircle, FaFileContract, FaRegCheckCircle, FaProjectDiagram, FaArrowRight } from 'react-icons/fa';
import './Pricing.css';

import { useModal } from '../context/ModalContext';

const Pricing = () => {
  const { openModal } = useModal();
  const [activeTab, setActiveTab] = useState('pricelist');

  const pricingData = [
    { type: "2 BHK", size: "1,169 – 1,281", price: "₹93 Lakhs onwards", features: "Perfect for Families", cat: "standard" },
    { type: "2.5 BHK (with Study)", size: "1,450 – 1,570", price: "₹1.10 Crore onwards", features: "WFH Optimized", cat: "standard" },
    { type: "3 BHK Smart", size: "1,516 – 1,648", price: "₹1.31 Crore onwards", features: "Core Value", cat: "premium" },
    { type: "3 BHK Premia", size: "1,837 – 2,162", price: "₹1.49 Crore onwards", features: "Extended Balconies", cat: "premium" },
    { type: "3 BHK Ultima (+ Study)", size: "2,462", price: "₹1.96 Crore onwards", features: "Executive Suite", cat: "premium" },
    { type: "4 BHK Supreme", size: "2,723 – 2,728", price: "₹2.20 Crore onwards", features: "Sky-Villament", cat: "luxury" },
    { type: "4 BHK Ultima (+ Staff)", size: "2,900 – 3,013", price: "₹2.39 Crore onwards", features: "Grand Lifestyle", cat: "luxury" }
  ];

  const additionalCosts = [
    { title: "Floor Rise Charges", desc: "Applicable above 5th floor, ₹20 - ₹50 per sq. ft. per floor." },
    { title: "PLC (Preferential Location)", desc: "Extras for corner units or Central Park/Pool views." },
    { title: "Mandatory Charges", desc: "Car Parking (~₹3-5L), Clubhouse (~₹1.5-2.5L), & Maintenance." },
    { title: "Statutory Taxes", desc: "GST (5%) and Stamp Duty/Registration (~7.5% in TS)." }
  ];

  const paymentSteps = [
    { stage: "Expression of Interest", value: "₹2 Lakhs", detail: "Priority allotment token amount" },
    { stage: "Official Booking", value: "10%", detail: "Due at time of booking" },
    { stage: "Agreement of Sale", value: "10%", detail: "Payable during agreement" },
    { stage: "Milestone Linked", value: "80%", detail: "Installments as building progress occurs" }
  ];

  return (
    <section id="pricing" className="pricing-section py-5">
      <Container>
        <div className="section-title text-center mb-5">
          <span className="subtitle tracking-widest text-uppercase d-block mb-2" style={{ color: 'var(--primary-gold)' }}>Investment Opportunity</span>
          <h2 className="display-4 fw-bold text-white mb-3">PRICE <span className="gold-text">GUIDE</span></h2>
          <div className="rera-badge-wrapper d-inline-block mt-2">
            <Badge bg="dark" className="p-3 border-gold border">
              <span className="text-muted text-uppercase smaller d-block mb-1" style={{ fontSize: '0.65rem', letterSpacing: '1px' }}>Official RERA Status</span>
              <span className="text-white fw-bold">P01100010708</span>
              <span className="ms-2" style={{ color: '#2ecc71' }}><FaRegCheckCircle /></span>
            </Badge>
          </div>
          <p className="text-muted mx-auto mt-4" style={{ maxWidth: '800px' }}>
            Prestige Golden Grove is currently in the <strong>Pre-Launch Phase</strong>.
            Base prices range from <strong>₹8,500 – ₹9,000 per sq. ft.</strong>
            Formal launch scheduled for April 20, 2026.
          </p>
          <div className="divider mx-auto mt-4" style={{ width: '60px', height: '3px', background: 'var(--primary-gold)' }}></div>
        </div>

        <div className="luxury-pricing-tabs mt-5">
          <Tabs
            activeKey={activeTab}
            onSelect={(k) => setActiveTab(k)}
            className="justify-content-center mb-5 custom-tabs"
          >
            <Tab eventKey="pricelist" title="Price Matrix" />
            <Tab eventKey="costs" title="Extra Components" />
            <Tab eventKey="payment" title="Payment Roadmap" />
          </Tabs>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {activeTab === 'pricelist' && (
                <div className="price-matrix-grid">
                  <Row className="g-4">
                    {pricingData.map((item, idx) => (
                      <Col key={idx} lg={4} md={6}>
                        <div className={`price-card-lux glass-card p-4 h-100 ${item.cat}`}>
                          <div className="d-flex justify-content-between align-items-start mb-3">
                            <h5 className="text-white mb-0">{item.type}</h5>
                            <span className={`cat-label ${item.cat}`}>{item.cat}</span>
                          </div>
                          <div className="size-info mb-4">
                            <span className="text-muted smaller">Size Range</span>
                            <p className="text-white fw-bold mb-0">{item.size} Sq.Ft.</p>
                          </div>
                          <div className="price-tag mb-4">
                            <span className="text-gold smaller" style={{ color: 'var(--primary-gold)' }}>Starting Price</span>
                            <h3 className="gold-text mb-0" style={{ fontSize: '1.5rem' }}>{item.price}</h3>
                          </div>
                          <p className="text-muted smaller mb-4"><FaInfoCircle className="me-1" /> {item.features}</p>
                          <Button onClick={openModal} variant="outline-gold" className="btn-luxury-sm w-100">Request All-In Cost</Button>
                        </div>
                      </Col>
                    ))}
                    <Col lg={4} md={6}>
                      <div className="price-card-lux glass-card p-4 h-100 d-flex flex-column justify-content-center align-items-center text-center special-promo">
                        <div className="promo-icon mb-3"><FaFileContract size={40} color="var(--primary-gold)" /></div>
                        <h5 className="text-white">Floor Rise & PLC</h5>
                        <p className="text-muted smaller">Custom quotes available for higher floors and corner units.</p>
                        <Button onClick={openModal} className="btn-luxury py-2">Speak to Advisor</Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              )}

              {activeTab === 'costs' && (
                <div className="additional-costs-view">
                  <Row className="g-4">
                    {additionalCosts.map((item, idx) => (
                      <Col key={idx} md={6}>
                        <div className="cost-card glass-card p-4 d-flex align-items-center h-100">
                          <div className="cost-icon-box me-4"><FaInfoCircle /></div>
                          <div>
                            <h6 className="text-white mb-2">{item.title}</h6>
                            <p className="text-muted smaller mb-0">{item.desc}</p>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                  <div className="cost-alert-box mt-5 p-4 text-center glass-card border-gold">
                    <p className="text-white mb-0">
                      <FaInfoCircle className="me-2 text-gold" />
                      Indicative pricing excludes statutory charges like registration, stamp duty, and GST as per government norms.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'payment' && (
                <div className="payment-plan-view px-lg-5">
                  <div className="clp-roadmap position-relative py-4">
                    <div className="roadmap-line d-none d-lg-block"></div>
                    <Row className="gy-5">
                      {paymentSteps.map((step, idx) => (
                        <Col key={idx} lg={3} md={6}>
                          <div className="roadmap-step text-center px-3">
                            <div className="step-marker mb-3 mx-auto">{idx + 1}</div>
                            <h6 className="text-white mb-2" style={{ minHeight: '3rem' }}>{step.stage}</h6>
                            <div className="value-box p-3 glass-card mb-3">
                              <span className="gold-text fw-bold" style={{ fontSize: '1.2rem' }}>{step.value}</span>
                            </div>
                            <p className="text-muted smaller mb-0">{step.detail}</p>
                            {idx < 3 && <FaArrowRight className="d-lg-none mt-4 text-gold opacity-50" />}
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </div>
                  <div className="text-center mt-5">
                    <p className="text-muted lead">Securing your home is structured & stress-free.</p>
                    <Button onClick={openModal} className="btn-luxury-solid px-5 py-3">Download Payment Schedule PDF</Button>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
};

export default Pricing;
