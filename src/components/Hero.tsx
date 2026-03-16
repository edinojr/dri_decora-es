import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';
import banner from '../assets/banner.jpg';

const Hero: React.FC = () => {
  return (
    <section className="hero-section" style={{ padding: '0' }}>
      {/* Banner Image Solo with Buttons */}
      <div style={{
        position: 'relative',
        height: '60vh',
        width: '100%',
        backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(${banner})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingBottom: '40px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a href="#leads" className="premium-button">Solicitar Orçamento</a>
          <a href="#servicos" className="premium-button secondary">Ver Serviços</a>
        </motion.div>
      </div>

      {/* Social Media Icons Below Banner */}
      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          display: 'flex',
          gap: '15px',
          zIndex: 10
        }}>
          <a href="https://www.instagram.com/dridecoracoesadriane/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', transition: 'transform 0.3s' }} className="social-icon">
            <Instagram size={24} />
          </a>
          <a href="https://www.facebook.com/dri.d.adriane" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', transition: 'transform 0.3s' }} className="social-icon">
            <Facebook size={24} />
          </a>
          <a href="https://wa.me/5511997335200" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--secondary)', transition: 'transform 0.3s' }} className="social-icon">
            <MessageCircle size={24} />
          </a>
        </div>
      </div>

      {/* Headline Text Below Banner */}
      <div className="container" style={{ marginTop: '40px', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', lineHeight: '1.2', color: 'var(--secondary)' }}>
            Transformando Sonhos em <br />
            <span style={{ color: 'var(--primary)' }}>Cenários Inesquecíveis</span>
          </h1>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', maxWidth: '800px', margin: '0 auto 40px', color: 'var(--text-light)' }}>
            Designer e Arte para sua festa. Especialistas em eventos personalizados,
            temáticos, corporativos e cristãos.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
