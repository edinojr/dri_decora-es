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
              height: auto !important;
              aspect-ratio: 16 / 9 !important; /* Mantém a proporção da imagem para evitar cortes */
              background-size: cover !important;
              padding-bottom: 20px !important;
            }
            .hero-buttons {
              gap: 10px !important;
              width: 100%;
              padding: 0 10px;
            }
            .hero-buttons .premium-button {
              padding: 8px 16px !important;
              font-size: 0.8rem !important;
              flex: 1;
              text-align: center;
              min-width: 140px;
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
