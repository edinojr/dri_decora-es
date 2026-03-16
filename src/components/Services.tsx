import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Briefcase, Package, Church, Heart, Baby, Utensils, Gift, Castle, PartyPopper, Users, Star } from 'lucide-react';
import CategoryDetail from './CategoryDetail';

interface ServicesProps {
    onSelectService: (type: string) => void;
}

interface ServiceCategory {
    title: string;
    icon: React.ReactNode;
    desc: string;
    longDesc: string;
    type: string;
    image: string;
    highlights: string[];
    subcategories: { name: string; icon: React.ReactNode }[];
}

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
    const [selectedCategory, setSelectedCategory] = useState<ServiceCategory | null>(null);
    const [isDetailOpen, setIsDetailOpen] = useState(false);

    const serviceList = [
        {
            title: "Infantil",
            icon: <Star size={40} />,
            desc: "Personagens e temas mágicos que encantam as crianças.",
            longDesc: "Transformamos o aniversário do seu pequeno em uma jornada épica. Trabalhamos com os temas mais amados: desde reinos de princesas e heróis da Marvel até fazendinhas rústicas e mundos espaciais. Cada detalhe é pensado para que a criança se sinta parte da sua história favorita.",
            type: "Aniversário Infantil (Menina)",
            image: "/assets/images/infantil_decor.png",
            highlights: ["Cenarios com personagens", "Mesas temáticas luxuosas", "Lembranças personalizadas", "Painéis 3D"],
            subcategories: [
                { name: "Super Heróis", icon: <Castle size={18} /> },
                { name: "Princesas", icon: <Star size={18} /> },
                { name: "Fazendinha", icon: <Users size={18} /> },
                { name: "Mundo Disney", icon: <Sparkles size={18} /> }
            ]
        },
        {
            title: "Casamentos",
            icon: <Heart size={40} />,
            desc: "Cenários deslumbrantes para o seu 'Sim' ser inesquecível.",
            longDesc: "O casamento é a celebração do amor supremo. Criamos cenários que harmonizam sofisticação e romantismo, seja em salões clássicos, jardins ao pôr do sol ou espaços minimalistas modernos. Nossa missão é que cada convidado sinta a essência do casal em cada arranjo floral.",
            type: "Casamento",
            image: "/assets/images/casamento_decor.png",
            highlights: ["Altares exclusivos", "Arranjos florais nobres", "Cenografia de impacto", "Mobiliário premium"],
            subcategories: [
                { name: "Clássico", icon: <Castle size={18} /> },
                { name: "Rústico Chic", icon: <Star size={18} /> },
                { name: "Ao Ar Livre", icon: <Sparkles size={18} /> },
                { name: "Minimalista", icon: <Heart size={18} /> }
            ]
        },
        {
            title: "Chás",
            icon: <Baby size={40} />,
            desc: "Celebrações delicadas: Bebê, Cozinha e Revelação.",
            longDesc: "Momentos de expectativa merecem doçura. Nossos projetos de chá são conhecidos pela paleta de cores harmoniosa e detalhes minuciosos que aquecem o coração dos convidados enquanto aguardam a nova fase.",
            type: "Chá de Bebê",
            image: "/assets/images/chas_decor.png",
            highlights: ["Painéis orgânicos", "Identidade visual exclusiva", "Doces decorados", "Cenários de fotos"],
            subcategories: [
                { name: "Chá de Bebê", icon: <Baby size={18} /> },
                { name: "Chá Revelação", icon: <Gift size={18} /> },
                { name: "Chá de Cozinha", icon: <Utensils size={18} /> }
            ]
        },
        {
            title: "Corporativos",
            icon: <Briefcase size={40} />,
            desc: "Reforce sua marca com eventos profissionais de alto nível.",
            longDesc: "A imagem da sua empresa é refletida em seus eventos. Oferecemos soluções de design para confraternizações e aniversários corporativos que unem o DNA da marca à sofisticação de uma festa de gala.",
            type: "Aniversário da Empresa",
            image: "/assets/images/corporativo_decor.png",
            highlights: ["Branding integrado", "Layouts otimizados", "Elegância corporativa", "Logística impecável"],
            subcategories: [
                { name: "Aniversários", icon: <PartyPopper size={18} /> },
                { name: "Premiações", icon: <Star size={18} /> },
                { name: "Lançamentos", icon: <Sparkles size={18} /> }
            ]
        },
        {
            title: "Religiosos",
            icon: <Church size={40} />,
            desc: "Decoração sublime para congressos e celebrações.",
            longDesc: "Respeito e beleza para sua comunidade. Desenvolvemos temáticas espirituais para congressos, EBOs e EBDs, criando um ambiente de reverência e celebração que potencializa a experiência da fé.",
            type: "Congresso (Mulheres)",
            image: "/assets/images/religioso_decor.jpg",
            highlights: ["Temas bíblicos", "Conforto para o público", "Cenografia de palco", "Visual sóbrio e elegante"],
            subcategories: [
                { name: "Congressos", icon: <Users size={18} /> },
                { name: "EBO / EBD", icon: <Package size={18} /> },
                { name: "Eventos Kids", icon: <Baby size={18} /> }
            ]
        },
        {
            title: "Aluguel",
            icon: <Package size={40} />,
            desc: "Acervo completo: móveis, brinquedos, porcelanas e painéis sublimáticos.",
            longDesc: "Acesse nosso acervo curado com peças exclusivas que vão do clássico ao moderno. Oferecemos móveis de luxo, brinquedos para festas infantis, porcelanas finas e painéis sublimáticos de alta resolução para que sua montagem seja perfeita.",
            type: "Aluguel",
            image: "/assets/images/aluguel_decor.jpg",
            highlights: ["Móveis de Luxo", "Brinquedos Temáticos", "Porcelanas Nobres", "Painéis 3D"],
            subcategories: [
                { name: "Mobiliário", icon: <Package size={18} /> },
                { name: "Brinquedos", icon: <Sparkles size={18} /> },
                { name: "Porcelanas", icon: <Utensils size={18} /> },
                { name: "Painéis", icon: <Sparkles size={18} /> }
            ]
        }
    ];

    const handleCardClick = (category: ServiceCategory) => {
        setSelectedCategory(category);
        setIsDetailOpen(true);
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

                            <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--primary)', fontWeight: 'bold' }}>
                                Ver Detalhes Inesquecíveis →
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <CategoryDetail
                isOpen={isDetailOpen}
                onClose={() => setIsDetailOpen(false)}
                category={selectedCategory}
                onAction={onSelectService}
            />
        </section>
    );
};

export default Services;

