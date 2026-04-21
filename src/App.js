import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Amenities from './components/Amenities';
import FloorPlans from './components/FloorPlans';
import Location from './components/Location';
import Pricing from './components/Pricing';
import SeoContent from './components/SeoContent';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PopupForm from './components/PopupForm';
import ThankYou from './components/ThankYou';
import { ModalProvider } from './context/ModalContext';
import './App.css';

const THANK_YOU_HASH = '#/thank-you';
const THANK_YOU_PATH = '/thank-you';
const SITE_URL = 'https://prestigegoldengrove-hyd.com/';
const HOME_TITLE = 'Prestige Golden Grove Project in Kollur, Hyderabad | Luxury 2, 3 & 4 BHK Apartments';
const THANK_YOU_TITLE = 'Thank You | Prestige Golden Grove';
const HOME_DESCRIPTION = 'Prestige Golden Grove project in Kollur, Hyderabad offering luxury 2, 3 and 4 BHK apartments, premium amenities, floor plans, pricing and location insights.';
const THANK_YOU_DESCRIPTION = 'Thank you for your enquiry about Prestige Golden Grove. Our team will contact you shortly.';

const isThankYouRoute = () => window.location.hash === THANK_YOU_HASH;
const isThankYouPath = () => {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  return pathname === THANK_YOU_PATH;
};

const upsertMetaTag = (name, content) => {
  let metaTag = document.querySelector(`meta[name="${name}"]`);
  if (!metaTag) {
    metaTag = document.createElement('meta');
    metaTag.setAttribute('name', name);
    document.head.appendChild(metaTag);
  }
  metaTag.setAttribute('content', content);
};

const upsertCanonical = (href) => {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', href);
};

function App() {
  const [showThankYou, setShowThankYou] = useState(isThankYouRoute() || isThankYouPath());

  useEffect(() => {
    if (isThankYouPath() && !isThankYouRoute()) {
      const query = window.location.search || '';
      window.history.replaceState(null, '', `/${THANK_YOU_HASH}${query}`);
    }

    const handleHashChange = () => {
      setShowThankYou(isThankYouRoute());
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  useEffect(() => {
    if (showThankYou) {
      return undefined;
    }

    const anchors = Array.from(document.querySelectorAll('a[href^="#"]'));
    const listeners = anchors.map((anchor) => {
      const clickHandler = (e) => {
        const targetId = anchor.getAttribute('href');
        if (targetId === '#' || targetId === '#/thank-you') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      };

      anchor.addEventListener('click', clickHandler);
      return { anchor, clickHandler };
    });

    return () => {
      listeners.forEach(({ anchor, clickHandler }) => {
        anchor.removeEventListener('click', clickHandler);
      });
    };
  }, [showThankYou]);

  useEffect(() => {
    document.title = showThankYou ? THANK_YOU_TITLE : HOME_TITLE;
    upsertMetaTag('description', showThankYou ? THANK_YOU_DESCRIPTION : HOME_DESCRIPTION);
    upsertMetaTag('robots', showThankYou ? 'noindex, nofollow' : 'index, follow, max-image-preview:large');
    upsertCanonical(SITE_URL);
  }, [showThankYou]);

  return (
    <ModalProvider>
      {showThankYou ? (
        <ThankYou />
      ) : (
        <div className="App">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Amenities />
            <FloorPlans />
            <Location />
            <Pricing />
            <SeoContent />
            <Gallery />
            <Contact />
          </main>
          <Footer />
          <PopupForm />
        </div>
      )}
    </ModalProvider>
  );
}

export default App;
