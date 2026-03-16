import React from 'react';
import { Sparkles, Briefcase, Package, Church, Heart, Baby, Utensils, Gift, Castle, PartyPopper, Users, Star } from 'lucide-react';

export interface ServiceCategory {
    title: string;
    icon: React.ReactNode;
    desc: string;
    longDesc: string;
    type: string;
    image: string;
    highlights: string[];
    subcategories: { name: string; icon: React.ReactNode }[];
}

export const serviceList: ServiceCategory[] = [
    {
        title: "Infantil",
        icon: <Star size={40} />,
        desc: "Personagens e temas mágicos que encantam as crianças.",
        longDesc: "Transformamos o aniversário do seu pequeno em uma jornada épica. Trabalhamos com os temas mais amados: desde reinos de princesas e heróis da Marvel até fazendinhas rústicas e mundos espaciais.",
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
        longDesc: "O casamento é a celebração do amor supremo. Criamos cenários que harmonizam sofisticação e romantismo, seja em salões clássicos, jardins ao pôr do sol ou espaços minimalistas modernos.",
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
        longDesc: "Momentos de expectativa merecem doçura. Nossos projetos de chá são conhecidos pela paleta de cores harmoniosa e detalhes minuciosos que aquecem o coração dos convidados.",
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
        longDesc: "A imagem da sua empresa é refletida em seus eventos. Oferecemos soluções de design para confraternizações e aniversários corporativos que unem o DNA da marca à sofisticação.",
        type: "Aniversário da Empresa",
        image: "/assets/images/corporativo_final.png",
        highlights: ["Branding integrado", "Layouts otimizados", "Elegância corporativa", "Logística impecável"],
        subcategories: [
            { name: "Aniversários", icon: <PartyPopper size={18} /> },
            { name: "Premiações", icon: <Star size={18} /> },
            { name: "Lançamentos", icon: <Sparkles size={18} /> }
        ]
    },
    {
        title: "Debutantes",
        icon: <Sparkles size={40} />,
        desc: "Transformamos o sonho dos 15 anos em uma celebração única e inesquecível.",
        longDesc: "A celebração dos 15 anos é um dos marcos mais importantes na vida de uma jovem. Criamos cenários exclusivos que refletem a personalidade de cada debutante, desde o clássico luxuoso até temas modernos e criativos como o 'Jardim Encantado'. Cuidamos de cada detalhe: desde a cenografia de impacto com borboletas de LED e iluminação cênica, até o mobiliário premium com tronos de princesa e bolos cenográficos majestosos. O nosso objetivo é que cada detalhe, como o número 15 iluminado e a paleta de cores (como o elegante Rose Gold e Dourado), trabalhem juntos para criar um cenário de sonho.",
        type: "Debutante (15 Anos)",
        image: "/assets/images/debutante_jardim.png",
        highlights: ["Vestido Dourado e Rose Gold", "Borboletas de LED", "Trono de Princesa", "Painel Mundo Encantado"],
        subcategories: [
            { name: "Jardim Encantado", icon: <Sparkles size={18} /> },
            { name: "Princesa Real", icon: <Castle size={18} /> },
            { name: "Moderno Glow", icon: <Star size={18} /> }
        ]
    },
    {
        title: "Religiosos",
        icon: <Church size={40} />,
        desc: "Decoração sublime para congressos e celebrações.",
        longDesc: "Respeito e beleza para sua comunidade. Desenvolvemos temáticas espirituais para congressos, EBOs e EBDs, criando um ambiente de reverência e celebração.",
        type: "Congresso (Mulheres)",
        image: "/assets/images/religioso_decor.jpg",
        highlights: ["Temas bíblicos", "Conforto para o público", "Cenografia de Altar", "Visual sóbrio e elegante"],
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
        longDesc: "Acesse nosso acervo curado com peças exclusivas que vão do clássico ao moderno. Oferecemos móveis de luxo, brinquedos para festas infantis e porcelanas finas.",
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
