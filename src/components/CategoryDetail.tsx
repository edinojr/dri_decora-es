import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, CheckCircle2, Star, MapPin, Users, Calendar } from 'lucide-react';

interface CategoryDetailProps {
    isOpen: boolean;
    onClose: () => void;
    category: {
        title: string;
        desc: string;
        longDesc: string;
        type: string;
        image: string;
        subcategories: { name: string; icon: React.ReactNode }[];
        highlights: string[];
    } | null;
    onAction: (type: string) => void;
}

const CategoryDetail: React.FC<CategoryDetailProps> = ({ isOpen, onClose, category, onAction }) => {
    if (!category) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="modal-overlay"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ y: 50, opacity: 0, scale: 0.9 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 50, opacity: 0, scale: 0.9 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="modal-content"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            style={{
                                position: 'absolute',
                                top: '20px',
                                right: '20px',
                                zIndex: 10,
                                background: 'white',
                                border: 'none',
                                borderRadius: '50%',
                                width: '40px',
                                height: '40px',
                                cursor: 'pointer',
                                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'var(--secondary)'
                            }}
                        >
                            <X size={24} />
                        </button>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '80vh' }}>
                            {/* Image Section */}
                            <div style={{
                                position: 'relative',
                                overflow: 'hidden',
                                display: 'block'
                            }}>
                                <img
                                    src={category.image}
                                    alt={category.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover'
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: '0',
                                    left: '0',
                                    right: '0',
                                    padding: '40px',
                                    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                                    color: 'white'
                                }}>
                                    <h2 style={{ fontSize: '2.5rem', marginBottom: '10px', fontFamily: "'Playfair Display', serif" }}>
                                        {category.title}
                                    </h2>
                                    <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                                        {category.title === "Aluguel" ? "Grande Acervo" : "Transformando sonhos em realidade inesquecível."}
                                    </p>
                                </div>
                            </div>

                            {/* Content Section */}
                            <div style={{ padding: '60px', overflowY: 'auto', backgroundColor: 'var(--accent)' }}>
                                <div style={{ maxWidth: '500px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)', marginBottom: '20px' }}>
                                        <Star size={20} fill="var(--primary)" />
                                        <span style={{ fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>Especialidade Premium</span>
                                    </div>

                                    <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                                            <MapPin size={16} /> Atendimento em SP e Região
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                                            <Users size={16} /> Equipe Especializada
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--text-light)' }}>
                                            <Calendar size={16} /> Projetos Sob Medida
                                        </div>
                                    </div>

                                    <h3 style={{ fontSize: '1.8rem', color: 'var(--secondary)', marginBottom: '20px' }}>
                                        {category.title} Inesquecível
                                    </h3>

                                    <p style={{ color: 'var(--text-light)', lineHeight: '1.8', fontSize: '1.1rem', marginBottom: '30px' }}>
                                        {category.longDesc}
                                    </p>

                                    <div style={{ marginBottom: '40px' }}>
                                        <h4 style={{ fontSize: '1.1rem', color: 'var(--secondary)', marginBottom: '20px', fontWeight: '600' }}>
                                            Subcategorias e Temas:
                                        </h4>
                                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                                            {category.subcategories.map((sub, idx) => (
                                                <div key={idx} style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '12px',
                                                    padding: '12px',
                                                    background: 'white',
                                                    borderRadius: '12px',
                                                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                                                }}>
                                                    <div style={{ color: 'var(--primary)' }}>{sub.icon}</div>
                                                    <span style={{ fontSize: '0.95rem', color: 'var(--text-dark)' }}>{sub.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div style={{ marginBottom: '40px' }}>
                                        <h4 style={{ fontSize: '1.1rem', color: 'var(--secondary)', marginBottom: '20px', fontWeight: '600' }}>
                                            Por que escolher a Dri Decorações:
                                        </h4>
                                        <ul style={{ listStyle: 'none', padding: 0 }}>
                                            {category.highlights.map((item, idx) => (
                                                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', color: 'var(--text-light)' }}>
                                                    <CheckCircle2 size={18} color="#22c55e" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button
                                        onClick={() => {
                                            onAction(category.type);
                                            onClose();
                                        }}
                                        className="premium-button"
                                        style={{ width: '100%', padding: '18px' }}
                                    >
                                        Solicitar Orçamento <Send size={18} style={{ marginLeft: '10px' }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CategoryDetail;
