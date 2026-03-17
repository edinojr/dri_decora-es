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
                        right: 8px !important;
                        top: 50% !important;
                        bottom: auto !important;
                        transform: translateY(-50%) !important;
                        flex-direction: column !important;
                        gap: 10px !important;
                    }
                    .floating-social-link {
                        width: 36px !important;
                        height: 36px !important;
                    }
                    .floating-social-link svg {
                        width: 18px !important;
                        height: 18px !important;
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
                    className="floating-social-link"
                    style={{
                        width: '45px',
                        height: '45px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        backgroundColor: social.color,
                        textDecoration: 'none',
                        borderRadius: '50%',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
                        border: 'none',
                        marginBottom: '2px'
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
