import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaSwimmingPool, FaDumbbell, FaRunning,
  FaTree, FaShieldAlt, FaLaptopCode, FaSpa, FaTheaterMasks,
  FaCoffee, FaChargingStation, FaShoppingBag, FaLeaf,
  FaVrCardboard, FaBiking, FaDog, FaOm
} from 'react-icons/fa';
import './Amenities.css';

const Amenities = () => {
  const [activeTab, setActiveTab] = useState('clubhouse');

  const amenityData = {
    clubhouse: [
      { title: "Twin Clubhouses", icon: <FaSwimmingPool />, desc: "One of Hyderabad's largest clubs with temperature-controlled indoor pool." },
      { title: "Elite Fitness", icon: <FaDumbbell />, desc: "State-of-the-art gym, aerobics studio, and specialized meditation rooms." },
      { title: "Indoor Sports", icon: <FaRunning />, desc: "Professional badminton and squash courts for year-round active lifestyle." },
      { title: "Social Hub", icon: <FaTheaterMasks />, desc: "Mini theatre, café, juice bar, library, and grand banquet halls." },
      { title: "Co-working Lounge", icon: <FaLaptopCode />, desc: "Professional workspaces with meeting rooms and high-speed Wi-Fi." },
      { title: "Luxury Spa", icon: <FaSpa />, desc: "Dedicated wellness zone with steam, sauna, and massage facilities." }
    ],
    outdoor: [
      { title: "11-Acre Central Park", icon: <FaTree />, desc: "Continuous green belt featuring a Miyawaki forest and Zen garden." },
      { title: "Sports Arena", icon: <FaRunning />, desc: "Tennis courts, basketball, cricket pitch, and dedicated skating area." },
      { title: "Health Tracks", icon: <FaBiking />, desc: "Dedicated jogging and cycling tracks plus a forest nature trail." },
      { title: "Water Features", icon: <FaSwimmingPool />, desc: "Multiple leisure and lap pools with sun decks and kids' pool." },
      { title: "Pet Park", icon: <FaDog />, desc: "Secured pet zone with grooming station for your furry friends." },
      { title: "Reflexology Path", icon: <FaOm />, desc: "Dedicated senior citizen walking tracks and reflexology paths." }
    ],
    lifestyle: [
      { title: "Integrated Mall", icon: <FaShoppingBag />, desc: "High-street retail and dining options right at project boundary." },
      { title: "Smart Infrastructure", icon: <FaChargingStation />, desc: "EV charging stations and solar-powered common area lighting." },
      { title: "3-Tier Security", icon: <FaShieldAlt />, desc: "24/7 CCTV, digital surveillance, and video door phone integration." },
      { title: "EV Charging", icon: <FaChargingStation />, desc: "Sustainable infrastructure for modern electric vehicle owners." },
      { title: "High-Speed Lifts", icon: <FaVrCardboard />, desc: "Advanced destination control elevators for minimum wait times." },
      { title: "Green Energy", icon: <FaLeaf />, desc: "Extensive solar power systems for sustainable community living." }
    ]
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="amenities" className="amenities-section">
      <div className="bg-decor-circle"></div>
      <Container>
        <div className="section-title">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="subtitle"
          >
            Signature Lifestyle
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            WORLD-CLASS <span className="gold-text">AMENITIES</span>
          </motion.h2>
          <div className="divider"></div>
        </div>

        <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
          <Nav className="luxury-tabs-nav justify-content-center mb-5 mt-4">
            <Nav.Item>
              <Nav.Link eventKey="clubhouse" className="luxury-tab-link">Clubhouse</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="outdoor" className="luxury-tab-link">Outdoor & Greenery</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="lifestyle" className="luxury-tab-link">Smart Lifestyle</Nav.Link>
            </Nav.Item>
          </Nav>

          <Tab.Content>
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <Row className="g-4">
                {(amenityData[activeTab] || []).map((item, index) => (
                  <Col lg={4} md={6} key={index}>
                    <motion.div
                      variants={itemVariants}
                      whileHover={{ y: -10, transition: { duration: 0.3 } }}
                      className="amenity-card-v2 glass-card"
                    >
                      <div className="amenity-icon-wrapper">
                        <div className="icon-glow"></div>
                        <div className="icon-main">{item.icon}</div>
                      </div>
                      <div className="amenity-info">
                        <h3>{item.title}</h3>
                        <div className="mini-divider"></div>
                        <p>{item.desc}</p>
                      </div>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            </motion.div>
          </Tab.Content>
        </Tab.Container>
      </Container>
    </section>
  );
};

export default Amenities;
