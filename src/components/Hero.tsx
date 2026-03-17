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
          paddingBottom: '50px'
        }}
        className="responsive-banner"
      >
        <style>{`
          @media (max-width: 768px) {
            .responsive-banner {
              height: 50vh !important;
              background-position: center center !important;
              padding-bottom: 30px !important;
            }
            .hero-buttons {
              gap: 10px !important;
            }
            .hero-buttons .premium-button {
              padding: 10px 20px !important;
              font-size: 0.9rem !important;
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
          <a href="#servicos" className="premium-button secondary" style={{ backgroundColor: 'rgba(255,255,255,0.8)', border: 'none' }}>Ver Serviços</a>
        </motion.div>
      </div>

      {/* Intro Text */}
      <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: 'var(--secondary)', lineHeight: '1.2' }}>
            Dri Decorações <br />
            <span style={{ color: 'var(--primary)', fontSize: '1.8rem' }}>Designer e Arte para sua Festa</span>
          </h1>
          <p style={{ 
            fontSize: '1.2rem', 
            color: 'var(--text-light)', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}
        >
          Especialistas em eventos personalizados, temáticos, corporativos e cristãos. 
          Transformando cada detalhe em uma memória inesquecível.
        </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
