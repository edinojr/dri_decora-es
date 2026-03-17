import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, MessageCircle } from 'lucide-react';

const FloatingSocialBar: React.FC = () => {
    const socialLinks = [
        { 
            icon: <Instagram size={22} />, 
            url: "https://www.instagram.com/dridecoracoesadriane/", 
            label: "Instagram",
            color: "#E1306C" 
        },
        { 
            icon: <Facebook size={22} />, 
            url: "https://www.facebook.com/dri.d.adriane", 
            label: "Facebook",
            color: "#4267B2" 
        },
        { 
            icon: <MessageCircle size={22} />, 
            url: "https://wa.me/5511997335200", 
            label: "WhatsApp",
            color: "#25D366" 
        },
    ];

    return (
        <div 
            className="floating-social-bar"
            style={{
                position: 'fixed',
                right: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 1000,
                display: 'flex',
                flexDirection: 'column',
                gap: '12px'
            }}
        >
            <style>{`
                @media (max-width: 768px) {
                    .floating-social-bar {
                        right: 50% !important;
                        top: auto !important;
                        bottom: 20px !important;
                        transform: translateX(50%) !important;
                        flex-direction: row !important;
                        gap: 15px !important;
                    }
                    .floating-social-link {
                        width: 45px !important;
                        height: 45px !important;
                    }
                }
            `}</style>
            {socialLinks.map((social, index) => (
                <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, x: -5 }}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="glass floating-social-link"
                    style={{
                        width: '50px',
                        height: '50px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--secondary)',
                        textDecoration: 'none',
                        border: '1px solid rgba(197, 179, 88, 0.3)', // Subtle gold border
                        boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                    }}
                    title={social.label}
                >
                    {social.icon}
                </motion.a>
            ))}
        </div>
    );
};

export default FloatingSocialBar;
