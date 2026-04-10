import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCar, FaTrain, FaHospital, FaSchool, FaShoppingBag, FaLeaf } from 'react-icons/fa';
import './Location.css';

const Location = () => {
  const connectivity = [
    { title: "Neopolis & Kokapet", time: "8 Mins", dist: "~5 KM", icon: <FaCar /> },
    { title: "Financial District", time: "14-15 Mins", dist: "9.3-10 KM", icon: <FaCar /> },
    { title: "HITEC City", time: "20-25 Mins", dist: "12-14 KM", icon: <FaCar /> },
    { title: "RGIA Airport", time: "30-35 Mins", dist: "30-35 KM", icon: <FaCar /> }
  ];

  const transit = [
    { title: "Nagulapalli Hub", info: "MMTS/Transit Hub", dist: "2.7 KM", icon: <FaTrain /> },
    { title: "Miyapur Metro", info: "Red Line", dist: "10 Mins (~6 KM)", icon: <FaTrain /> },
    { title: "Raidurg Metro", info: "Blue Line", dist: "25 Mins (~13 KM)", icon: <FaTrain /> },
    { title: "Lingampally Stn", info: "Railway Station", dist: "15 Mins (5-8 KM)", icon: <FaTrain /> }
  ];

  const landmarks = [
    {
      category: "Education", items: [
        { name: "The Gaudium School", time: "3-4 Mins", dist: "0.9-1.5 KM", icon: <FaSchool /> },
        { name: "Delhi World Public School", time: "5 Mins", dist: "2 KM", icon: <FaSchool /> },
        { name: "Glendale Intl School", time: "10 Mins", dist: "-", icon: <FaSchool /> }
      ]
    },
    {
      category: "Healthcare", items: [
        { name: "Airaavata Hospitals", time: "4-5 Mins", dist: "1.7 KM", icon: <FaHospital /> },
        { name: "Citizens Specialty", time: "10-12 Mins", dist: "4.2-5.2 KM", icon: <FaHospital /> },
        { name: "Continental Hospitals", time: "15 Mins", dist: "8.6 KM", icon: <FaHospital /> }
      ]
    },
    {
      category: "Leisure & Greenery", items: [
        { name: "TellaNalla Central Park", time: "1 Min", dist: "Nearby", icon: <FaLeaf /> },
        { name: "ICRISAT Forest", time: "Adjoining", dist: "3500-acre buffer", icon: <FaLeaf /> },
        { name: "GSM Mall & Multiplex", time: "15 Mins", dist: "3.5 KM", icon: <FaShoppingBag /> }
      ]
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="location" className="location-section py-5">
      <Container>
        <div className="section-title text-center mb-5">
          <span className="subtitle tracking-widest text-uppercase d-block mb-2" style={{ color: 'var(--primary-gold)', letterSpacing: '3px' }}>The Connected Life</span>
          <h2 className="display-4 fw-bold text-white mb-4">STRATEGIC <span className="gold-text">LOCATION</span></h2>
          <p className="text- mx-auto" style={{ maxWidth: '800px' }}>
            Situated in the Velimela-Tellapur high-growth corridor, Prestige Golden Grove offers a "15-minute city"
            lifestyle for tech professionals with direct access to ORR Exit 2 and the Financial District.
          </p>
          <div className="divider mx-auto mt-4" style={{ width: '60px', height: '3px', background: 'var(--primary-gold)' }}></div>
        </div>

        <Row className="mb-5 g-4">
          <Col lg={7}>
            <div className="map-wrapper glass-card p-2 overflow-hidden position-relative" style={{ height: '100%', minHeight: '400px', borderRadius: '2rem' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15228.318465611634!2d78.2255866!3d17.431952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbefad11cfeb95%3A0xc6e46973e3a9c78d!2sKollur%2C%20Telangana!5e0!3m2!1sen!2sin!4v1712674000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: '1.5rem', filter: 'grayscale(1) invert(0.9) contrast(1.2)' }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
              <div className="map-overlay-badge p-3">
                <FaMapMarkerAlt className="me-2" />
                ORR Exit 2 (Kollur) - 2 Mins
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="connectivity-group mb-4">
              <h4 className="text-white text-uppercase mb-4 h6 tracking-wider d-flex align-items-center">
                <span className="me-2" style={{ color: 'var(--primary-gold)' }}>✦</span> Strategic Hubs
              </h4>
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                {connectivity.map((item, idx) => (
                  <motion.div key={idx} variants={itemVariants} className="location-item-lux p-3 mb-3 glass-card d-flex align-items-center">
                    <div className="icon-box-lux me-3">{item.icon}</div>
                    <div className="flex-grow-1">
                      <span className="d-block text-white fw-bold">{item.title}</span>
                      <span className="small text-muted">{item.dist}</span>
                    </div>
                    <div className="time-badge">{item.time}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div className="transit-group">
              <h4 className="text-white text-uppercase mb-4 h6 tracking-wider d-flex align-items-center">
                <span className="me-2" style={{ color: 'var(--primary-gold)' }}>✦</span> Public Transit
              </h4>
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Row className="g-3">
                  {transit.map((item, idx) => (
                    <Col key={idx} xs={6}>
                      <motion.div variants={itemVariants} className="transit-card-lux p-3 glass-card text-center h-100">
                        <div className="icon-circle mb-2 mx-auto">{item.icon}</div>
                        <h6 className="text-white small fw-bold mb-1">{item.title}</h6>
                        <p className="text-muted smaller mb-0" style={{ fontSize: '0.75rem' }}>{item.dist}</p>
                      </motion.div>
                    </Col>
                  ))}
                </Row>
              </motion.div>
            </div>
          </Col>
        </Row>

        <div className="infrastructure-section mt-5">
          <div className="text-center mb-5">
            <h3 className="h4 text-white text-uppercase tracking-widest">SOCIAL INFRASTRUCTURE</h3>
            <div className="divider-gold mx-auto mt-2"></div>
          </div>

          <Row className="g-4">
            {landmarks.map((cat, idx) => (
              <Col key={idx} lg={4}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  viewport={{ once: true }}
                  className="infra-category-card h-100 glass-card p-4"
                >
                  <h5 className="text-gold mb-4 text-uppercase border-bottom pb-3" style={{ color: 'var(--primary-gold)', fontSize: '1rem', letterSpacing: '1px' }}>
                    {cat.category}
                  </h5>
                  <div className="infra-list">
                    {cat.items.map((item, i) => (
                      <div key={i} className="infra-item d-flex justify-content-between align-items-start mb-4">
                        <div className="d-flex align-items-start">
                          <span className="me-3 mt-1" style={{ color: 'var(--primary-gold)' }}>{item.icon}</span>
                          <div>
                            <span className="d-block text-white small fw-bold">{item.name}</span>
                            <span className="smaller text-muted">{item.dist}</span>
                          </div>
                        </div>
                        <div className="item-time small text-gold" style={{ color: 'var(--primary-gold)' }}>{item.time}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Location;
