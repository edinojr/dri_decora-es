import React from 'react';
import { motion } from 'framer-motion';
import { serviceList, type ServiceCategory } from '../data/servicesData';

interface ServicesProps {
    onSelectService: (type: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
    const handleCardClick = (category: ServiceCategory) => {
        // Revised target: scroll to the detailed section in PortfolioGallery
        const targetId = `details-${category.title.toLowerCase()}`;
        const element = document.getElementById(targetId);
        
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        
        // Also pre-fill the form
        onSelectService(category.type);
    };

    return (
        <section id="servicos" style={{ backgroundColor: 'var(--accent)', padding: '100px 0' }}>
            <div className="container">
                <div className="section-title">
                    <span style={{ color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>Portfólio de Serviços</span>
                    <h2 style={{ fontSize: '3rem', marginTop: '10px' }}>Nossas Especialidades</h2>
                    <p style={{ maxWidth: '700px', margin: '20px auto' }}>Planejamento e execução de eventos memoráveis com design exclusivo e atenção obsessiva aos detalhes.</p>
                </div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                    gap: '40px',
                    marginTop: '60px'
                }}>
                    {serviceList.map((service, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="glass illustrated-card"
                            onClick={() => handleCardClick(service)}
                            style={{
                                padding: '40px',
                                textAlign: 'left',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{
                                width: '70px',
                                height: '70px',
                                backgroundColor: 'var(--white)',
                                borderRadius: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--primary)',
                                boxShadow: 'var(--shadow)'
                            }}>
                                {service.icon}
                            </div>

                            <div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: 'var(--secondary)' }}>{service.title}</h3>
                                <p style={{ color: 'var(--text-light)', lineHeight: '1.6' }}>{service.desc}</p>
                            </div>

                            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                                {service.subcategories.slice(0, 3).map((sub, i) => (
                                    <span key={i} className="category-icon-small" title={sub.name}>
                                        {React.isValidElement(sub.icon) ? React.cloneElement(sub.icon as React.ReactElement<{ size?: number }>, { size: 14 }) : sub.icon}
                                    </span>
                                ))}
                                {service.subcategories.length > 3 && (
                                    <span style={{ fontSize: '0.8rem', color: 'var(--primary)', alignSelf: 'center' }}>+ {service.subcategories.length - 3}</span>
                                )}
                            </div>

                            <a 
                                href="https://www.instagram.com/dridecoracoesadriane/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{ 
                                    marginTop: 'auto', 
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    gap: '10px', 
                                    color: 'var(--primary)', 
                                    fontWeight: 'bold',
                                    textDecoration: 'none'
                                }}
                            >
                                Ver Detalhes no Instagram →
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
