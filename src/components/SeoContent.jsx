import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './SeoContent.css';

const projectFacts = [
  'Project Name: Prestige Golden Grove',
  'Location: Kollur - Velimela growth corridor, Hyderabad',
  'Project Scale: ~31 acres with ~80% open spaces',
  'Tower Profile: ~10 high-rise towers (up to 55 floors)',
  'Configurations: 2, 3 and 4 BHK premium apartments',
  'Indicative RERA Reference: P01100010708'
];

const faqItems = [
  {
    question: 'What is Prestige Golden Grove and where is it located?',
    answer:
      'Prestige Golden Grove is a luxury residential project in Kollur, Hyderabad, planned with high-rise towers, open green zones and premium amenities for modern urban families.'
  },
  {
    question: 'What apartment configurations are available in Prestige Golden Grove?',
    answer:
      'The Prestige Golden Grove project offers 2 BHK, 3 BHK and 4 BHK apartment options, including larger formats with study areas and deck-style balconies.'
  },
  {
    question: 'How is the connectivity from Prestige Golden Grove Kollur?',
    answer:
      'The project has access to major employment hubs including Financial District, Kokapet and HITEC City, along with convenient reach to ORR and airport routes.'
  },
  {
    question: 'Is Prestige Golden Grove suitable for both end-users and investors?',
    answer:
      'Yes. End-users benefit from lifestyle amenities and large open spaces, while investors look at location growth, social infrastructure and long-term rental potential.'
  },
  {
    question: 'Where can I get latest floor plans and price details of Prestige Golden Grove?',
    answer:
      'You can request updated floor plans, payment milestones and latest pricing directly through the enquiry forms on this page for verified project information.'
  }
];

const SeoContent = () => {
  return (
    <section id="project-insights" className="seo-content-section py-5">
      <Container>
        <div className="section-title text-center mb-5">
          <span className="subtitle d-block mb-2">Project Knowledge Hub</span>
          <h2 className="display-5 fw-bold text-white mb-3">
            PRESTIGE GOLDEN GROVE <span className="gold-text">PROJECT DETAILS</span>
          </h2>
          <p className="seo-intro text-muted mx-auto mb-0">
            This page is built to help buyers searching for <strong>Prestige Golden Grove</strong>,{' '}
            <strong>Prestige Golden Grove Hyderabad</strong> and <strong>Prestige Golden Grove Kollur</strong>{' '}
            compare configuration options, location advantages, amenities and buying considerations in one place.
          </p>
        </div>

        <Row className="g-4 mb-4">
          <Col lg={6}>
            <article className="glass-card seo-card h-100">
              <h3 className="text-white h4 mb-3">Prestige Golden Grove Project Snapshot</h3>
              <p className="text-muted mb-3">
                Prestige Golden Grove is positioned as a premium gated community in Hyderabad&apos;s western growth
                belt. The layout is planned with landscaped zones, clubhouse infrastructure, active lifestyle
                facilities and multi-format apartment choices for different family sizes.
              </p>
              <ul className="seo-list mb-0">
                {projectFacts.map((fact) => (
                  <li key={fact}>{fact}</li>
                ))}
              </ul>
            </article>
          </Col>
          <Col lg={6}>
            <article className="glass-card seo-card h-100">
              <h3 className="text-white h4 mb-3">Why Buyers Search Prestige Golden Grove</h3>
              <p className="text-muted mb-3">
                Homebuyers looking for premium apartments in Kollur usually compare open-space ratio, tower planning,
                access to IT corridors, social infrastructure and long-term appreciation potential. Prestige Golden
                Grove stands out due to its project scale and location depth.
              </p>
              <p className="text-muted mb-0">
                If your priority is a future-ready address with strong connectivity to Financial District and HITEC
                City, this project aligns with the requirements of both self-use families and long-horizon investors.
              </p>
            </article>
          </Col>
        </Row>

        <div className="seo-faq-wrap mt-5">
          <h3 className="text-center text-white mb-4">Frequently Asked Questions - Prestige Golden Grove</h3>
          <Row className="g-4">
            {faqItems.map((item) => (
              <Col lg={6} key={item.question}>
                <article className="glass-card seo-faq-card h-100">
                  <h4 className="h5 text-white mb-3">{item.question}</h4>
                  <p className="text-muted mb-0">{item.answer}</p>
                </article>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default SeoContent;
