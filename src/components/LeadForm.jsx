import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './LeadForm.css';

const LeadForm = ({ title, subtitle, source = 'Global' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Lead from ${source}:`, formData);
    alert('Thank you for your interest! Our representative will contact you shortly.');
    setFormData({ name: '', phone: '', email: '' });
  };

  return (
    <div className="lead-form-container">
      {title && <h3 className="serif gold-text mb-2 text-center">{title}</h3>}
      {subtitle && <p className=" text-center mb-4">{subtitle}</p>}

      <Form onSubmit={handleSubmit} className="luxury-lead-form">
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Your Name"
            required
            className="luxury-input"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="tel"
            placeholder="Phone Number"
            required
            className="luxury-input"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-4">
          <Form.Control
            type="email"
            placeholder="Email Address"
            required
            className="luxury-input"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </Form.Group>

        <Button type="submit" className="btn-luxury w-100 py-3">
          Get Instant Details
        </Button>
      </Form>
    </div>
  );
};

export default LeadForm;
