import React from 'react';
import { motion } from 'framer-motion';
import banner from '../assets/banner.jpg';
import logo from '../assets/logo.jpg';

const Hero: React.FC = () => {
  return (
    <section className="hero-section" style={{ padding: '0', overflow: 'hidden', backgroundColor: 'var(--accent)' }}>
      {/* Banner Container */}
      <div 
        style={{ 
          position: 'relative', 
          width: '100%', 
          height: '70vh', // Default for desktop
          backgroundImage: `url(${banner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        className="responsive-banner"
      >
        <style>{`
          @media (max-width: 768px) {
            .responsive-banner {
              height: 45vh !important;
              background-position: top center !important;
            }
            .hero-logo {
              max-width: 150px !important;
            }
          }
        `}</style>

        {/* Logo Overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          style={{
            zIndex: 10,
            padding: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '50%',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
            backdropFilter: 'blur(5px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <img 
            src={logo} 
            alt="Dri Decorações Logo" 
            className="hero-logo"
            style={{ 
              maxWidth: '220px', 
              height: 'auto',
              borderRadius: '50%'
            }} 
          />
        </motion.div>
      </div>

      {/* Intro Text */}
      <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ 
            fontSize: '1.2rem', 
            color: 'var(--text-light)', 
            maxWidth: '800px', 
            margin: '0 auto',
            lineHeight: '1.6'
          }}
        >
          Designer e Arte para celebrar cada detalhe da sua história. Especialistas em eventos personalizados,
          temáticos, corporativos e cristãos.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
