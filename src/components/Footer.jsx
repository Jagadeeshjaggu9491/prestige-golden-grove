import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer py-5 border-top border-white border-opacity-5">
      <Container>
        <div className="footer-content text-center">
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="footer-brand mb-4">
                <h2 className="serif fw-bold text-white mb-0">
                  <span className="gold-text">PRESTIGE</span> GOLDEN GROVE
                </h2>
              </div>
              
              <div className="footer-legal-text mb-5">
                <p className="smaller text-white-50 lh-lg mb-4">
                  Prestige Golden Grove is a project registered under the Real Estate Regulatory Authority (RERA) in accordance with the Government of India RERA Act 2016. 
                  The project is marketed by an authorized advertising partner, <strong>Home Bazaar Services Pvt. Ltd.</strong>, 
                  holding registration number <strong>A02500003067</strong> and CIN <strong>U45400MH2013PTC242930</strong>. 
                  The RERA project registration number is <span className="gold-text fw-bold">P01100010708</span>. 
                  The site is located at Kollur, Hyderabad, and the corporate office of Prestige Group is situated at Prestige Falcon Towers, 19 Brunton Road, Bengaluru – 560025.
                </p>
                
                <div className="disclaimer-title gold-text serif h5 mb-3">Disclaimer</div>
                <p className="smaller text-white-50 lh-lg">
                  This website is intended solely for informational purposes and does not constitute an offer to avail of any services. 
                  All content, including project details, specifications, pricing, and availability, is subject to change without prior notice. 
                  The information provided is based on inputs from respective owners and developers, and users are advised to verify details independently 
                  before making any decisions. By sharing your contact information on this website, you agree to receive communication via call, SMS, 
                  or email regarding this project.
                </p>
              </div>

              <hr className="opacity-10 mb-4" />
              
              <div className="footer-bottom">
                <p className="mb-0 text-muted smaller serif italic">
                  &copy; 2026 Prestige Golden Grove. All Rights Reserved.
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
