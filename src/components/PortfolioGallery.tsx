import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const PortfolioGallery: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [infantilIndex, setInfantilIndex] = React.useState(0);

    const highlights = [
        { url: "/assets/images/casamento_decor.png", title: "Casamento Clássico" },
        { url: "/assets/images/infantil_decor.png", title: "Aniversário Infantil" },
        { url: "/assets/images/chas_decor.png", title: "Chá de Bebê Real" },
        { url: "/assets/images/corporativo_decor.png", title: "Evento Corporativo" },
        { url: "/assets/images/religioso_decor.jpg", title: "Celebração Religiosa" },
        { url: "/assets/images/aluguel_galeria.jpg", title: "Aluguel" },
    ];

    const infantilGallery = [
        { url: "/assets/images/herois_marvel_dc.jpg", title: "Heróis (Marvel & DC)" },
        { url: "/assets/images/princesas_safari.jpg", title: "Princesas & Safari" },
        { url: "/assets/images/circo_pool_party.jpg", title: "Circo & Pool Party" },
    ];

    const nextInfantil = () => {
        setInfantilIndex((prev) => (prev + 1) % infantilGallery.length);
    };

    const prevInfantil = () => {
        setInfantilIndex((prev) => (prev - 1 + infantilGallery.length) % infantilGallery.length);
    };

    // Auto-scroll logic for Highlights
    useEffect(() => {
        let scrollAmount = 0;
        const step = 1;
        const interval = setInterval(() => {
            if (scrollRef.current) {
                scrollAmount += step;
                if (scrollAmount >= scrollRef.current.scrollWidth / 2) {
                    scrollAmount = 0;
                }
                scrollRef.current.scrollLeft = scrollAmount;
            }
        }, 30);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="portfolio" style={{ backgroundColor: 'var(--accent)', overflow: 'hidden', padding: '100px 0' }}>
            <div className="container">
                <div className="section-title">
                    <span style={{ color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Nossas Criações</span>
                    <h2 style={{ fontSize: '3rem', marginTop: '10px' }}>Galeria de Sonhos</h2>
                    <p style={{ maxWidth: '700px', margin: '20px auto' }}>Explore um universo de possibilidades e inspire-se para o seu próximo grande evento.</p>
                </div>

                {/* Auto-scrolling Highlights */}
                <div style={{ position: 'relative', marginTop: '50px' }}>
                    <div
                        ref={scrollRef}
                        style={{
                            display: 'flex',
                            gap: '20px',
                            overflowX: 'hidden',
                            whiteSpace: 'nowrap',
                            padding: '20px 0'
                        }}
                    >
                        {[...highlights, ...highlights].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                style={{
                                    minWidth: '300px',
                                    height: '400px',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    boxShadow: 'var(--shadow)',
                                    cursor: 'pointer'
                                }}
                            >
                                <img src={item.url} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: '20px',
                                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                                    color: 'white'
                                }}>
                                    <h4 style={{ margin: 0 }}>{item.title}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Infantil Specialized Carousel */}
                <div style={{ marginTop: '100px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '30px' }}>
                        <div>
                            <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>Universo Infantil</h3>
                            <p style={{ color: 'var(--text-light)' }}>Heróis, Princesas e a Magia Disney.</p>
                        </div>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button
                                onClick={prevInfantil}
                                className="premium-button"
                                style={{ padding: '10px', borderRadius: '50%' }}
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={nextInfantil}
                                className="premium-button"
                                style={{ padding: '10px', borderRadius: '50%' }}
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '30px'
                    }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={infantilIndex}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5 }}
                                className="glass"
                                style={{
                                    padding: '10px',
                                    position: 'relative',
                                    gridColumn: '1 / -1' // Make it take full width for the carousel effect if needed, or adjust grid
                                }}
                            >
                                <div style={{
                                    borderRadius: '15px',
                                    overflow: 'hidden',
                                    aspectRatio: '16/9'
                                }}>
                                    <img
                                        src={infantilGallery[infantilIndex].url}
                                        alt={infantilGallery[infantilIndex].title}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div style={{ padding: '15px' }}>
                                    <h4 style={{ color: 'var(--secondary)', marginBottom: '5px' }}>{infantilGallery[infantilIndex].title}</h4>
                                    <span style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: 'bold' }}>Tema Exclusivo</span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioGallery;
