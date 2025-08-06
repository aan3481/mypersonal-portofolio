import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import LanyardAnimation from './components/LanyardAnimation';

function App() {
  return (
    <div className="bg-background min-h-screen text-textMain">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certificates />
      <Contacts />
      <Footer />
      
    </div>
  );
}

export default App;
