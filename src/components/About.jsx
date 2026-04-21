import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './About.css';
import AboutImg from '../images/about-img.jpg'

const About = () => {
  const highlights = [
    { title: "80% Open Space", icon: "🌳" },
    { title: "Central Park", icon: "⛲" },
    { title: "High-Rise Skyline", icon: "🏙️" },
    { title: "Forest Views", icon: "🌲" }
  ];

  return (
    <section id="about" className="about-section">
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="mb-5 mb-lg-0">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="section-title text-start">
                <span className="subtitle">Discovery</span>
                <h2>PRESTIGE <br /><span className="gold-text">GOLDEN GROVE</span></h2>
                <div className="divider ms-0"></div>
              </div>

              <p className="about-text mt-4">
                Spread across ~31 acres of lush greenery in Velimela, Kollur,
                Prestige Golden Grove is a masterpiece of luxury living. With
                ~10 towers rising up to 55 floors, this project offers an
                unparalleled lifestyle with 80% open spaces and breathtaking forest views.
              </p>

              <div className="project-details grid-details mt-5">
                <div className="detail-item">
                  <span className="label">Land Area</span>
                  <span className="value">~31 Acres</span>
                </div>
                <div className="detail-item">
                  <span className="label">Total Units</span>
                  <span className="value">4500+</span>
                </div>
                <div className="detail-item">
                  <span className="label">Possession</span>
                  <span className="value">2030 - 2031</span>
                </div>
                <div className="detail-item">
                  <span className="label">Developer</span>
                  <span className="value">Prestige Group</span>
                </div>
              </div>

              <div className="highlights-row mt-5">
                {highlights.map((h, i) => (
                  <div key={i} className="highlight-pill">
                    <span className="icon">{h.icon}</span>
                    <span className="text">{h.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </Col>

          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="about-image-container"
            >
              <div className="image-3d-tilt">
                <div className="glass-overlay"></div>
                <img
                  src={AboutImg}
                  alt="Prestige Golden Grove high-rise apartments in Kollur, Hyderabad"
                  className="img-fluid rounded-4 shadow-lg"
                />
              </div>
              <div className="floating-stat glass-morphism">
                <span className="number">55</span>
                <span className="text">Floors of Pure Luxury</span>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
