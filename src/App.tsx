import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import PortfolioGallery from './components/PortfolioGallery';
import Services from './components/Services';
import LeadForm from './components/LeadForm';
import Footer from './components/Footer';

function App() {
  const [prefilledType, setPrefilledType] = React.useState('');

  return (
    <main>
      <Hero />
      <About />
      <Services onSelectService={(type) => setPrefilledType(type)} />
      <PortfolioGallery />
      <LeadForm prefilledType={prefilledType} onClearPrefilled={() => setPrefilledType('')} />
      <Footer />
    </main>
  );
}

export default App;
