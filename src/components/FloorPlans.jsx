import React, { useState } from 'react';
import { Container, Row, Col, Tabs, Tab, Button } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import './FloorPlans.css';

import { useModal } from '../context/ModalContext';

import TwoBHK1 from '../images/floor-plans/2bhk-1.png';
import TwoBHK2 from '../images/floor-plans/2bhk-2.png';
import TwoBHK3 from '../images/floor-plans/2bhk-3.png';

import ThreeBHK1 from '../images/floor-plans/3bhk-1.png';
import ThreeBHK2 from '../images/floor-plans/3bhk-2.png';
import ThreeBHK3 from '../images/floor-plans/3bhk-3.png';

import FourBHK1 from '../images/floor-plans/4bhk-1.png';
import FourBHK2 from '../images/floor-plans/4bhk-2.png';
import FourBHK3 from '../images/floor-plans/4bhk-3.png';

const FloorPlans = () => {
  const { openModal } = useModal();
  const [key, setKey] = useState('2bhk');
  const [activeImg, setActiveImg] = useState(0);

  const handleTabChange = (k) => {
    setKey(k);
    setActiveImg(0);
  };

  const plans = {
    '2bhk': {
      title: "2 BHK Apartments",
      subtitle: "Smart & Efficient Living",
      description: "Ideal for nuclear families and investors, these units are designed for maximum efficiency with 'zero-waste' corridors.",
      variants: [
        { name: "2 BHK Classic", size: "1,169 – 1,281 sq. ft.", desc: "Perfectly optimized living spaces." },
        { name: "2 BHK + Study", size: "1,450 – 1,570 sq. ft.", desc: "Catering to those needing a compact work-from-home space." }
      ],
      highlights: ["Most stacks are positioned to face the 11-acre Central Park."],
      price: "₹93 Lakhs - ₹1.05 Cr*",
      images: [
        TwoBHK1,
        TwoBHK2,
        TwoBHK3
      ],
    },
    '3bhk': {
      title: "3 BHK Apartments",
      subtitle: "The Signature Collection",
      description: "The most popular family choice, these units often feature private foyers and large master suites.",
      variants: [
        { name: "3 BHK Smart", size: "1,516 – 1,700 sq. ft.", desc: "Intelligently designed for modern families." },
        { name: "3 BHK Prima", size: "1,837 – 2,162 sq. ft.", desc: "Featuring extended 6.5ft deck balconies." },
        { name: "3 BHK Ultima (+ Study)", size: "2,462 sq. ft.", desc: "Offering a separate office space for executives." }
      ],
      highlights: ["Wide sit-out decks providing 180-degree views of the skyline."],
      price: "₹1.31 Cr - ₹1.36 Cr*",
      images: [
        ThreeBHK1,
        ThreeBHK2,
        ThreeBHK3
      ],
    },
    '4bhk': {
      title: "4 BHK Sky-Villaments",
      subtitle: "Pinnacle of Luxury",
      description: "Premium residences occupying corner stacks for absolute exclusivity and maximum privacy.",
      variants: [
        { name: "4 BHK Supreme/Luxury", size: "2,723 – 2,950 sq. ft.", desc: "Expansive living areas with premium finishes." },
        { name: "4 BHK Ultima (+ Staff)", size: "2,900 – 3,013 sq. ft.", desc: "The ultimate luxury statement with dedicated staff quarters." }
      ],
      highlights: ["270-degree views", "No common shared walls", "Dedicated servant/maid quarters"],
      price: "₹2.20 Cr - ₹2.45 Cr*",
      images: [
        FourBHK1,
        FourBHK2,
        FourBHK3
      ],
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section id="floorplans" className="floorplans-section py-5">
      <Container>
        <div className="section-title text-center mb-5">
          <span className="subtitle tracking-widest text-uppercase text-gold mb-2 d-block" style={{ letterSpacing: '3px', color: 'var(--primary-gold, #cfa86e)' }}>Masterplan Details</span>
          <h2 className="display-4 fw-bold text-white mb-4">ARCHITECTURAL <span className="gold-text" style={{ color: 'var(--primary-gold, #cfa86e)' }}>BRILLIANCE</span></h2>
          <p className="text-light-muted mx-auto" style={{ maxWidth: '800px', fontSize: '1.1rem', color: '#fff', lineHeight: 1.8 }}>
            Featuring a wide range of luxury configurations across 10 high-rise towers, with sizes ranging from 1,169 to 3,013 sq. ft.
            Designed with Vaastu principles, ensuring no units face each other for maximum privacy.
          </p>
          <div className="divider mx-auto mt-4" style={{ width: '60px', height: '3px', background: 'var(--primary-gold, #cfa86e)' }}></div>
        </div>

        <div className="luxury-tabs-wrapper mt-5 mb-5 d-flex justify-content-center">
          <Tabs
            activeKey={key}
            onSelect={handleTabChange}
            className="luxury-tabs"
          >
            <Tab eventKey="2bhk" title="2 BHK" />
            <Tab eventKey="3bhk" title="3 BHK" />
            <Tab eventKey="4bhk" title="4 BHK" />
          </Tabs>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="plan-content-wrapper mt-4"
          >
            <Row className="align-items-stretch">
              <Col lg={5} className="mb-5 mb-lg-0">
                <div className="d-flex flex-column h-100">
                  <div className="plan-main-image-wrapper flex-grow-1 position-relative overflow-hidden shadow-xl mb-4" style={{ borderRadius: '1.5rem', minHeight: '400px' }}>
                    <div className="image-overlay"></div>
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeImg}
                        src={plans[key].images[activeImg]}
                        alt={`Prestige Golden Grove ${plans[key].title} floor plan layout ${activeImg + 1}`}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="img-fluid w-100 h-100 object-fit-cover position-absolute top-0 start-0"
                      />
                    </AnimatePresence>

                    <div className="hover-enquire-overlay">
                      <Button onClick={openModal} className="btn-enquire-hover text-uppercase fw-bold shadow-lg">
                        Enquire Now
                      </Button>
                    </div>

                    <div className="price-tag-floating">
                      <span className="tag-label">Starting Price</span>
                      <span className="tag-price">{plans[key].price}</span>
                    </div>
                  </div>

                  <div className="plan-thumbnails d-flex gap-3 mt-auto">
                    {plans[key].images.map((img, idx) => (
                      <div
                        key={idx}
                        onClick={() => setActiveImg(idx)}
                        className={`thumbnail-box ${activeImg === idx ? 'active' : ''}`}
                      >
                        <img src={img} alt={`${plans[key].title} floor plan thumbnail ${idx + 1}`} className="w-100 h-100 object-fit-cover" />
                        <div className="thumbnail-overlay"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </Col>

              <Col lg={7}>
                <div className="plan-details-lux h-100 d-flex flex-column justify-content-center">
                  <div className="plan-header mb-4">
                    <h4 className="text-uppercase tracking-wider mb-2" style={{ fontSize: '0.9rem', letterSpacing: '2px', color: 'var(--primary-gold, #cfa86e)' }}>{plans[key].subtitle}</h4>
                    <h3 className="display-6 fw-bold text-white mb-3">{plans[key].title}</h3>
                    <p className="lead" style={{ color: '#adb5bd', fontSize: '1.1rem' }}>{plans[key].description}</p>
                  </div>

                  <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="variants-grid mb-4"
                  >
                    {plans[key].variants.map((v, i) => (
                      <motion.div variants={itemVariants} key={i} className="variant-card p-4 mx-1 mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-2">
                          <h5 className="variant-name text-white mb-0 fw-bold">{v.name}</h5>
                          <span className="variant-size fw-bold" style={{ color: 'var(--primary-gold, #cfa86e)', fontSize: '1.1rem' }}>{v.size}</span>
                        </div>
                        <p className="variant-desc mb-0 small" style={{ color: '#8892b0' }}>{v.desc}</p>
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="highlights-box p-4 mb-4 mt-2">
                    <h6 className="text-white text-uppercase mb-3 d-flex align-items-center" style={{ letterSpacing: '1px' }}>
                      <span style={{ color: 'var(--primary-gold, #cfa86e)', marginRight: '10px' }}>✦</span> Key Highlights
                    </h6>
                    <ul className="highlight-list mb-0">
                      {plans[key].highlights.map((h, i) => (
                        <li key={i} className="d-flex align-items-start mb-2" style={{ color: '#adb5bd' }}>
                          <span className="me-2 mt-1" style={{ color: 'var(--primary-gold, #cfa86e)', fontSize: '0.8em' }}>▶</span> {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-4">
                    <Button onClick={openModal} className="btn-luxury-solid w-100 w-md-auto px-5 py-3 text-uppercase fw-bold shadow-lg">
                      Enquire Full Floor Plans
                    </Button>
                  </div>
                </div>
              </Col>
            </Row>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};

export default FloorPlans;
