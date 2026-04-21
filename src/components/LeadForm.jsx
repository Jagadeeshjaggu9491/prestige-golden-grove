import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './LeadForm.css';

const CONTACT_API_URL =
  process.env.REACT_APP_CONTACT_API_URL ||
  'https://tattvarealty.co.in/backend-files/prestige/contact-prestige.php';

const LeadForm = ({ title, subtitle, source = 'Global' }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    try {
      const payload = new URLSearchParams();
      payload.append('name', formData.name.trim());
      payload.append('phone', formData.phone.trim());
      payload.append('mobile', formData.phone.trim());
      payload.append('email', formData.email.trim());
      payload.append('message', 'Interested in brochure, price sheet and site visit.');
      payload.append('source', source);
      payload.append('project', 'Prestige Golden Grove');

      const response = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: payload.toString()
      });

      const rawResult = await response.text();
      let result = {};

      try {
        result = rawResult ? JSON.parse(rawResult) : {};
      } catch (parseError) {
        result = {};
      }

      if (!response.ok || result.status !== 'success') {
        throw new Error(result.message || 'Unable to submit your enquiry right now.');
      }

      setFormData({ name: '', phone: '', email: '' });
      window.location.hash = '/thank-you';
      return;
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error.message || 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
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

        <Button type="submit" className="btn-luxury w-100 py-3" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Get Instant Details'}
        </Button>
        {submitStatus.type === 'error' && submitStatus.message && (
          <p className="small text-center mt-3 text-danger">
            {submitStatus.message}
          </p>
        )}
      </Form>
    </div>
  );
};

export default LeadForm;
