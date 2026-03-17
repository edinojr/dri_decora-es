import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Star } from 'lucide-react';
import { serviceList } from '../data/servicesData';

const PortfolioGallery: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const highlights = [
        { id: "highlight-casamentos", url: "/assets/images/casamento_decor.png", title: "Casamento Clássico" },
        { id: "highlight-infantil", url: "/assets/images/infantil_decor.png", title: "Aniversário Infantil" },
        { id: "highlight-chas", url: "/assets/images/chas_decor.png", title: "Chá de Bebê Real" },
        { id: "highlight-corporativos", url: "/assets/images/corporativo_decor.png", title: "Evento Corporativo" },
        { id: "highlight-religiosos", url: "/assets/images/religioso_decor.jpg", title: "Celebração Religiosa" },
        { id: "highlight-aluguel", url: "/assets/images/aluguel_galeria.jpg", title: "Aluguel" },
        { id: "highlight-herois", url: "/assets/images/herois_marvel_dc.jpg", title: "Heróis (Marvel & DC)" },
        { id: "highlight-princesas", url: "/assets/images/princesas_safari.jpg", title: "Princesas & Safari" },
        { id: "highlight-circo", url: "/assets/images/circo_pool_party.jpg", title: "Circo & Pool Party" },
    ];

    // Auto-scroll logic for Highlights
    useEffect(() => {
        let scrollAmount = 0;
        const step = 0.5; // Slower scroll
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

                {/* Detailed Sections for each Category */}
                <div style={{ marginTop: '80px', display: 'flex', flexDirection: 'column', gap: '80px' }}>
                    {serviceList.map((service, index) => (
                        <div key={index} id={`details-${service.title.toLowerCase()}`} style={{ 
                            display: 'grid', 
                            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
                            gap: '40px',
                            backgroundColor: 'white',
                            borderRadius: '30px',
                            overflow: 'hidden',
                            boxShadow: 'var(--shadow)',
                            padding: '0'
                        }}>
                            {/* Image Part */}
                            <div className="gallery-image-container" style={{ position: 'relative', minHeight: '400px', overflow: 'hidden' }}>
                                <img 
                                    src={service.image} 
                                    alt={service.title} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                    className="gallery-img"
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    padding: '30px',
                                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                    color: 'white'
                                }}>
                                    <h3 style={{ fontSize: '2rem', marginBottom: '5px' }}>{service.title}</h3>
                                    <p style={{ opacity: 0.9 }}>Transformando sonhos em realidade inesquecível.</p>
                                </div>
                                <style>{`
                                    @media (max-width: 768px) {
                                        .gallery-image-container {
                                            min-height: 250px !important;
                                        }
                                        .gallery-img {
                                            object-fit: contain !important;
                                            background-color: #f8f8f8;
                                        }
                                    }
                                `}</style>
                            </div>

                            {/* Text Part */}
                            <div style={{ padding: '40px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', marginBottom: '15px' }}>
                                    <Star size={18} fill="var(--primary)" />
                                    <span style={{ fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase' }}>Especialidade Premium</span>
                                </div>

                                <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary)', marginBottom: '15px' }}>
                                    {service.title} Inesquecíveis
                                </h3>

                                <p style={{ color: 'var(--text-light)', lineHeight: '1.6', marginBottom: '25px' }}>
                                    {service.longDesc}
                                </p>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '25px' }}>
                                    {service.subcategories.map((sub, sIdx) => (
                                        <div key={sIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                                            <div style={{ color: 'var(--primary)' }}>{sub.icon}</div>
                                            {sub.name}
                                        </div>
                                    ))}
                                </div>

                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 30px 0' }}>
                                    {service.highlights.map((h, hIdx) => (
                                        <li key={hIdx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                                            <CheckCircle2 size={16} color="#22c55e" />
                                            {h}
                                        </li>
                                    ))}
                                </ul>

                                <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                                    <a href="#leads" className="premium-button" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                                        Solicitar Orçamento <Send size={18} />
                                    </a>
                                    <a 
                                        href="https://www.instagram.com/dridecoracoesadriane/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="premium-button secondary" 
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}
                                    >
                                        Veja mais no Instagram
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Insights e Inspirações (Auto-scroll Highlights) */}
                <div style={{ position: 'relative', marginTop: '100px' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '30px', color: 'var(--secondary)' }}>Insights e Inspirações</h3>
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
                                    minWidth: '250px',
                                    height: '350px',
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
                                    <h4 style={{ margin: 0, fontSize: '1rem' }}>{item.title}</h4>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioGallery;
