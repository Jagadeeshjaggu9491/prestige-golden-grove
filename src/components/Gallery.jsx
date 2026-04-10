import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
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
  const images = [
    { src: Gal1, alt: "Prestige Golden Grove Exterior" },
    { src: Gal2, alt: "Luxury Clubhouse" },
    { src: Gal3, alt: "Premium Interior" },
    { src: Gal4, alt: "Aerial View" },
    { src: Gal5, alt: "Amenities" },
    { src: Gal6, alt: "Living Space" },
    { src: Gal7, alt: "Bedroom Suite" },
    { src: Gal8, alt: "Landscape Gardens" }
  ];

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
    </section>
  );
};

export default Gallery;
