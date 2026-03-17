import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import banner from '../assets/banner.jpg';

const Hero: React.FC = () => {
  const slides = [
    { 
      url: banner, 
      title1: "Transformando Sonhos em", 
      title2: "Cenários Inesquecíveis" 
    },
    { 
      url: "/assets/images/slide1.png", 
      title1: "Sofisticação e Arte", 
      title2: "Para Sua Celebração" 
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="hero-section" style={{ padding: '0', overflow: 'hidden', backgroundColor: 'var(--secondary)' }}>
      <style>{`
        @media (max-width: 768px) {
          .hero-container-height {
            height: 60vh !important;
          }
          .hero-title {
            font-size: 2.2rem !important;
            padding: 0 15px;
          }
          .hero-nav-btn {
            padding: 10px !important;
          }
          .hero-nav-btn svg {
            width: 20px !important;
            height: 20px !important;
          }
        }
      `}</style>
      
      {/* Carousel Container */}
      <div className="hero-container-height" style={{ position: 'relative', height: '75vh', width: '100%', transition: 'height 0.3s' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.4)), url(${slides[currentIndex].url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div className="container" style={{ textAlign: 'center', color: 'white' }}>
              <motion.h1 
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="hero-title"
                style={{ fontSize: 'clamp(2rem, 8vw, 3.5rem)', marginBottom: '20px', lineHeight: '1.2', textShadow: '0 2px 15px rgba(0,0,0,0.4)' }}
              >
                {slides[currentIndex].title1} <br />
                <span style={{ color: 'var(--primary)' }}>{slides[currentIndex].title2}</span>
              </motion.h1>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '30px', flexWrap: 'wrap', padding: '0 20px' }}
              >
                <a href="#leads" className="premium-button">Solicitar Orçamento</a>
                <a href="#servicos" className="premium-button secondary" style={{ color: 'white', borderColor: 'white' }}>Ver Serviços</a>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button 
              onClick={prevSlide} 
              className="hero-nav-btn"
              style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', padding: '15px', color: 'white', cursor: 'pointer', zIndex: 10, backdropFilter: 'blur(5px)' }}
              aria-label="Slide anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextSlide} 
              className="hero-nav-btn"
              style={{ position: 'absolute', right: '15px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: 'none', borderRadius: '50%', padding: '15px', color: 'white', cursor: 'pointer', zIndex: 10, backdropFilter: 'blur(5px)' }}
              aria-label="Próximo slide"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Dots */}
        <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px', zIndex: 10 }}>
          {slides.map((_, i) => (
            <div 
              key={i} 
              onClick={() => setCurrentIndex(i)}
              style={{ 
                width: '10px', 
                height: '10px', 
                borderRadius: '50%', 
                backgroundColor: i === currentIndex ? 'var(--primary)' : 'rgba(255,255,255,0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }} 
            />
          ))}
        </div>
      </div>

      {/* Intro Text */}
      <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ fontSize: '1.2rem', color: 'var(--text-light)', maxWidth: '800px', margin: '0 auto' }}
        >
          Designer e Arte para celebrar cada detalhe da sua história. Especialistas em eventos personalizados,
          temáticos, corporativos e cristãos.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
