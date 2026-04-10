import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Amenities from './components/Amenities';
import FloorPlans from './components/FloorPlans';
import Location from './components/Location';
import Pricing from './components/Pricing';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PopupForm from './components/PopupForm';
import { ModalProvider } from './context/ModalContext';
import './App.css';

function App() {
  useEffect(() => {
    // Smooth scroll for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for sticky navbar
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <ModalProvider>
      <div className="App">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Amenities />
          <FloorPlans />
          <Location />
          <Pricing />
          <Gallery />
          <Contact />
        </main>
        <Footer />
        <PopupForm />
      </div>
    </ModalProvider>
  );
}

// Separate component for side effects if needed, or just keep it simple.
// For now, I'll move the useEffect inside the ModalProvider wrapper if I want to use context there.
// Actually, App component is now inside the ModalProvider effectively in the return.

export default App;
