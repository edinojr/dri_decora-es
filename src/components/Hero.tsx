import React from 'react';
import { motion } from 'framer-motion';
import banner from '../assets/banner.jpg';

const Hero: React.FC = () => {
  return (
    <section className="hero-section" style={{ padding: '0', overflow: 'hidden', backgroundColor: 'var(--accent)' }}>
      {/* Banner Container */}
      <div 
        style={{ 
          position: 'relative', 
          width: '100%', 
          height: '70vh', // Default for desktop
          backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.2)), url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          paddingBottom: '60px'
        }}
        className="responsive-banner"
      >
        <style>{`
          @media (max-width: 768px) {
            .responsive-banner {
              height: 60vh !important;
              background-position: top center !important;
              padding-bottom: 40px !important;
            }
            .hero-buttons {
              flex-direction: column !important;
              align-items: center !important;
              width: 90% !important;
              gap: 12px !important;
            }
            .hero-buttons .premium-button {
              width: 100% !important;
              max-width: 300px !important;
              padding: 12px 20px !important;
              font-size: 0.95rem !important;
            }
          }
        `}</style>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero-buttons"
          style={{ 
            display: 'flex', 
            gap: '20px', 
            flexWrap: 'wrap', 
            justifyContent: 'center',
            zIndex: 10 
          }}
        >
          <a href="#leads" className="premium-button">Solicitar Orçamento</a>
          <a href="#servicos" className="premium-button secondary" style={{ backgroundColor: 'rgba(255,255,255,0.82)', border: 'none' }}>Ver Serviços</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
