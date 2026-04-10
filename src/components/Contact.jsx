import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your enquiry. Our luxury concierge will contact you shortly.');
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="contact" className="contact-section py-5">
      <Container>
        <div className="section-title text-center mb-5">
          <span className="subtitle gold-text text-uppercase tracking-widest d-block mb-2">Concierge Support</span>
          <h2 className="display-4 fw-bold text-white mb-4">CONNECT <span className="gold-text">WITH US</span></h2>
          <div className="divider mx-auto" style={{ width: '60px', height: '3px', background: 'var(--primary-gold)' }}></div>
        </div>

        <Row className="justify-content-center mt-5">
          <Col lg={11}>
            <div className="contact-wrapper-lux glass-card overflow-hidden">
              <Row className="g-0">
                <Col lg={5} className="contact-info-panel-lux p-4 p-md-5">
                  <div className="info-header mb-5">
                    <h3 className="text-white serif fw-bold mb-3">Priority Concierge</h3>
                    <p className="text-muted small">
                      Experience the pinnacle of luxury living. Contact us today 
                      for an exclusive private tour and pre-launch benefits.
                    </p>
                  </div>
                  
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="channels-wrapper"
                  >
                    <motion.div variants={itemVariants} className="channel-item-lux d-flex align-items-center mb-4">
                      <div className="channel-icon-lux">
                        <FaPhoneAlt />
                      </div>
                      <div className="channel-text">
                        <small className="text-muted d-block text-uppercase tracking-wider" style={{ fontSize: '0.65rem' }}>Direct Line</small>
                        <span className="text-white fw-bold fs-5">+91 91234 56789</span>
                      </div>
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="channel-item-lux d-flex align-items-center mb-4">
                      <div className="channel-icon-lux">
                        <FaEnvelope />
                      </div>
                      <div className="channel-text">
                        <small className="text-muted d-block text-uppercase tracking-wider" style={{ fontSize: '0.65rem' }}>Digital Inquiries</small>
                        <span className="text-white fw-bold fs-6">sales@prestigegoldengrove.info</span>
                      </div>
                    </motion.div>
                    
                    <motion.div variants={itemVariants} className="channel-item-lux d-flex align-items-center">
                      <div className="channel-icon-lux">
                        <FaClock />
                      </div>
                      <div className="channel-text">
                        <small className="text-muted d-block text-uppercase tracking-wider" style={{ fontSize: '0.65rem' }}>Experience Centre</small>
                        <span className="text-white fw-bold fs-6">10:00 AM - 07:00 PM Daily</span>
                      </div>
                    </motion.div>
                  </motion.div>

                  <div className="site-badge mt-5 p-4 rounded-4 border border-white border-opacity-10 bg-black bg-opacity-20">
                    <p className="smaller text-muted mb-0">Official RERA ID:</p>
                    <p className="gold-text fw-bold mb-0">P01100010708</p>
                  </div>
                </Col>
                
                <Col lg={7} className="contact-form-panel p-4 p-md-5 bg-black bg-opacity-25 shadow-sm">
                  <h3 className="serif text-white mb-4">Personalized Inquiry</h3>
                  <Form onSubmit={handleSubmit} className="luxury-form">
                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <label className="text-muted smaller text-uppercase mb-2 d-block">Full Name</label>
                          <Form.Control 
                            type="text" 
                            placeholder="e.g. Rahul Sharma"
                            className="luxury-input-v2"
                            required 
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-4">
                          <label className="text-muted smaller text-uppercase mb-2 d-block">Phone Number</label>
                          <Form.Control 
                            type="tel" 
                            placeholder="+91 00000 00000"
                            className="luxury-input-v2"
                            required 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-4">
                      <label className="text-muted smaller text-uppercase mb-2 d-block">Email Address</label>
                      <Form.Control 
                        type="email" 
                        placeholder="your@email.com"
                        className="luxury-input-v2"
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </Form.Group>
                    
                    <Form.Group className="mb-4">
                      <label className="text-muted smaller text-uppercase mb-2 d-block">Message (Optional)</label>
                      <Form.Control 
                        as="textarea" 
                        rows={3} 
                        placeholder="Tell us about your requirements..."
                        className="luxury-input-v2"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </Form.Group>
                    
                    <Button type="submit" className="btn-luxury w-100 py-3 mt-2 shadow-lg shimmer-effect">
                      Submit Interest
                    </Button>
                    <p className="text-center smaller text-muted mt-3">Priority response for digital inquiries.</p>
                  </Form>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
