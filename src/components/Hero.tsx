import React from 'react';
import { motion } from 'framer-motion';
import banner from '../assets/banner.jpg';

const Hero: React.FC = () => {
  return (
    <section className="hero-section" style={{ padding: '0', overflow: 'hidden', backgroundColor: 'var(--accent)' }}>
      <style>{`
        .hero-container {
          position: relative;
          width: 100%;
          height: 70vh;
          background-image: linear-gradient(rgba(0,0,0,0.05), rgba(0,0,0,0.1)), url(${banner});
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 40px;
          transition: height 0.3s ease;
        }

        @media (max-width: 768px) {
          .hero-container {
            height: auto !important;
            aspect-ratio: 1536 / 1024 !important;
            background-size: contain !important;
            background-repeat: no-repeat !important;
            background-position: top center !important;
            padding-bottom: 10px !important; /* Espaço mínimo dentro da imagem */
          }
          .hero-buttons-wrapper {
            padding: 10px 0 20px !important;
            background: var(--accent);
          }
          .hero-buttons {
            flex-direction: row !important;
            gap: 8px !important;
            width: 95% !important;
            margin: 0 auto;
            justify-content: center !important;
          }
          .hero-buttons .premium-button {
            padding: 8px 12px !important;
            font-size: 0.7rem !important;
            width: auto !important;
            flex: 1 !important;
            max-width: 160px !important;
            text-align: center;
            white-space: nowrap;
          }
        }
      `}</style>

      <div className="hero-container">
        {/* Banner area - Image container holds the visual identity */}
      </div>

      <div className="hero-buttons-wrapper" style={{ display: 'flex', justifyContent: 'center', width: '100%', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hero-buttons"
          style={{ 
            display: 'flex', 
            gap: '20px', 
            flexWrap: 'wrap', 
            justifyContent: 'center'
          }}
        >
          <a href="#leads" className="premium-button">Solicitar Orçamento</a>
          <a href="#servicos" className="premium-button secondary" style={{ backgroundColor: 'rgba(255,255,255,0.82)', border: '1px solid var(--primary)' }}>Ver Serviços</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
