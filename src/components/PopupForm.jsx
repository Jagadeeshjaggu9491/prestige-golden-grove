import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useModal } from '../context/ModalContext';
import LeadForm from './LeadForm';
import './PopupForm.css';
import { FaWhatsapp } from 'react-icons/fa';
import Prestige from "../images/about-img.jpg"

const PopupForm = () => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const [hasAutoTriggered, setHasAutoTriggered] = useState(false);

  const handleWhatsApp = () => {
    const phoneNumber = "911234567890"; // Placeholder, replace with actual number
    const message = "Hi, I'm interested in Prestige Golden Grove. Please share more details.";
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`, '_blank');
  };

  useEffect(() => {
    // 1. Trigger on Page Load after 8 seconds
    const timer = setTimeout(() => {
      if (!hasAutoTriggered) {
        openModal();
        setHasAutoTriggered(true);
      }
    }, 8000);

    // 2. Trigger on Scroll (40%)
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      if (scrollPercent > 40 && !hasAutoTriggered) {
        openModal();
        setHasAutoTriggered(true);
      }
    };

    // 3. Trigger on Exit Intent
    const handleExitIntent = (e) => {
      if (e.clientY < 10 && !hasAutoTriggered) {
        openModal();
        setHasAutoTriggered(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mouseleave', handleExitIntent);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleExitIntent);
    };
  }, [hasAutoTriggered, openModal]);

  return (
    <>
      <Modal
        show={isModalOpen}
        onHide={closeModal}
        centered
        className="luxury-modal"
      >
        <Modal.Body className="p-0 overflow-hidden">
          <div className="popup-container">
            <div className="mobile-popup-bg d-md-none" style={{ backgroundImage: `url(${Prestige})` }}>
              <div className="mobile-overlay"></div>
            </div>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            <div className="popup-image d-none d-md-block">
              <img src={Prestige} alt="Prestige" />
              <div className="overlay"></div>
              <div className="text-overlay">
                <h4 className="serif gold-text">Exclusive Offer</h4>
                <p>Register for Pre-Launch Pricing</p>
              </div>
            </div>
            <div className="popup-form p-4 p-md-5">
              <LeadForm
                title="Prestige Golden Grove"
                subtitle="Register for a private tour and brochures."
                source="Modal Popup"
              />
              <p className="small text-muted text-center mt-3">Priority allotment for early registrations.</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Sticky Floating CTA Button */}
      <button className="sticky-cta-btn" onClick={handleWhatsApp}>
        <span className="icon"><FaWhatsapp /></span>
        <span className="text">WhatsApp</span>
      </button>
    </>
  );
};

export default PopupForm;
