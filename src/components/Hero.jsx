import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import { useModal } from '../context/ModalContext';
import LeadForm from './LeadForm';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

import './Hero.css';

import BannerOne from '../images/banner-1.jpeg';
import BannerTwo from '../images/banner-2.jpeg';
import BannerThree from '../images/banner-3.jpeg';

const Hero = () => {
  const { openModal } = useModal();

  const slides = [
    {
      image: BannerOne,
      title: "PRESTIGE GOLDEN GROVE",
      subtitle: "Luxury Living at its Finest",
      lead: "High-Rise Luxury Apartments in Kollur, Hyderabad. Redefining the Skyline with Elegance and Nature.",
      imageAlt: "Prestige Golden Grove Hyderabad hero view with premium residential towers and landscaped open space"
    },
    {
      image: BannerTwo,
      title: "UNMATCHED SKYLINE VIEWS",
      subtitle: "Experience the Pinnacle",
      lead: "Wake up to breathtaking forest views and a sprawling skyline. 80% open spaces for a breath of fresh air.",
      imageAlt: "Prestige Golden Grove Kollur skyline and green corridor perspective"
    },
    {
      image: BannerThree,
      title: "WORLD-CLASS AMENITIES",
      subtitle: "A Signature Lifestyle",
      lead: "Over 40+ premium amenities including a grand clubhouse, swimming pools, and landscaped central parks.",
      imageAlt: "Prestige Golden Grove project amenities and clubhouse lifestyle visual"
    }
  ];

  return (
    <section id="home" className="hero-section py-0">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1500}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true
        }}
        className="hero-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.title}>
            <div
              className="slide-bg"
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${slide.image})` }}
              role="img"
              aria-label={slide.imageAlt}
            >
              <Container className="hero-content">
                <Row className="align-items-center">
                  <Col lg={7} className="text-start pe-lg-5">
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 }}
                    >
                      <h6 className="subtitle">{slide.subtitle}</h6>
                      {index === 0 ? (
                        <h1 className="hero-title">
                          {slide.title.split(' ').map((word, i) => (
                            <React.Fragment key={i}>
                              {word === 'GOLDEN' || word === 'GROVE' ? <span className="gold-text">{word} </span> : word + ' '}
                              {i === 1 && <br className="d-none d-md-block" />}
                            </React.Fragment>
                          ))}
                        </h1>
                      ) : (
                        <h2 className="hero-title">
                          {slide.title.split(' ').map((word, i) => (
                            <React.Fragment key={i}>
                              {word === 'GOLDEN' || word === 'GROVE' ? <span className="gold-text">{word} </span> : word + ' '}
                              {i === 1 && <br className="d-none d-md-block" />}
                            </React.Fragment>
                          ))}
                        </h2>
                      )}
                      <p className="hero-lead">
                        {slide.lead}
                      </p>

                      <div className="hero-btns mt-5">
                        <button onClick={openModal} className="btn-luxury me-3">Get Brochure</button>
                        <a href="#about" className="btn-luxury-outline">Explore Project</a>
                      </div>
                    </motion.div>
                  </Col>

                  <Col lg={5} className="d-none d-lg-block">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="hero-form-wrapper glass-card"
                    >
                      <LeadForm
                        title="Instant Information"
                        subtitle="Fill the form to get price list and floor plans."
                        source={`Hero Slide ${index + 1}`}
                      />
                    </motion.div>
                  </Col>
                </Row>
              </Container>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hero-scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to Explore</span>
      </div>
    </section>
  );
};

export default Hero;
