import React, { useState } from 'react';
import { Container, Modal } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import './Gallery.css';

// Importing local images
import Gal1 from '../images/gal-1.jpeg';
import Gal2 from '../images/gal-2.jpeg';
import Gal3 from '../images/gal-3.jpeg';
import Gal4 from '../images/gal-4.jpeg';
import Gal5 from '../images/gal-5.jpeg';
import Gal6 from '../images/gal-6.jpeg';
import Gal7 from '../images/gal-7.jpeg';
import Gal8 from '../images/gal-8.jpeg';

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: Gal1, alt: "Prestige Golden Grove Hyderabad exterior tower view" },
    { src: Gal2, alt: "Prestige Golden Grove clubhouse and recreation lounge" },
    { src: Gal3, alt: "Prestige Golden Grove premium apartment interior design" },
    { src: Gal4, alt: "Prestige Golden Grove Kollur aerial masterplan perspective" },
    { src: Gal5, alt: "Prestige Golden Grove project lifestyle amenities zone" },
    { src: Gal6, alt: "Prestige Golden Grove spacious living room concept" },
    { src: Gal7, alt: "Prestige Golden Grove luxury bedroom suite concept" },
    { src: Gal8, alt: "Prestige Golden Grove landscaped garden and open spaces" }
  ];

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => setIsOpen(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
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
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="gallery" className="gallery-section py-5">
      <Container fluid className="px-md-5">
        <div className="section-title text-center mb-5">
          <span className="subtitle tracking-widest text-uppercase d-block mb-2" style={{ color: 'var(--primary-gold)', letterSpacing: '3px' }}>Life at Golden Grove</span>
          <h2 className="display-4 fw-bold text-white mb-4">THE <span className="gold-text">GALLERY</span></h2>
          <div className="divider mx-auto mt-4" style={{ width: '60px', height: '3px', background: 'var(--primary-gold)' }}></div>
        </div>
        
        <motion.div 
          className="gallery-grid-lux mt-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {images.map((img, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="gallery-item-lux"
              onClick={() => openLightbox(index)}
            >
              <div className="gallery-img-wrapper-lux">
                <img src={img.src} alt={img.alt} loading="lazy" />
                <div className="gallery-overlay-lux">
                  <div className="overlay-content">
                    <span className="gold-text fw-bold">Prestige Grove</span>
                    <p className="smaller text-white-50 mb-0">{img.alt}</p>
                  </div>
                  <div className="zoom-icon">+</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Lightbox Modal */}
      <Modal
        show={isOpen}
        onHide={closeLightbox}
        centered
        size="xl"
        className="gallery-lightbox"
        contentClassName="bg-transparent border-0"
      >
        <Modal.Body className="p-0 position-relative">
          <button className="lightbox-close" onClick={closeLightbox}>
            <FaTimes />
          </button>
          
          <div className="lightbox-content">
            <button className="nav-btn prev" onClick={(e) => { e.stopPropagation(); prevImage(); }}>
              <FaChevronLeft />
            </button>
            
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="img-fluid main-lightbox-img"
              />
            </AnimatePresence>

            <button className="nav-btn next" onClick={(e) => { e.stopPropagation(); nextImage(); }}>
              <FaChevronRight />
            </button>

            <div className="lightbox-caption">
              <h4>{images[currentIndex].alt}</h4>
              <p>{currentIndex + 1} / {images.length}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </section>
  );
};

export default Gallery;
