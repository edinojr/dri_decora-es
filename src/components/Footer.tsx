import React from 'react';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer style={{ backgroundColor: '#222', color: 'white', padding: '60px 0 20px' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '40px',
                    marginBottom: '40px'
                }}>
                    <div>
                        <h3 style={{ color: 'var(--primary)', marginBottom: '20px' }}>Dri Decorações</h3>
                        <p style={{ opacity: 0.8 }}>
                            Designer e Arte para celebrar cada detalhe da sua história. Especialistas em eventos
                            personalizados e locação de acervo.
                        </p>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '20px' }}>Contato</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Phone size={18} color="var(--primary)" /> (11) 9.9733-5200
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <Mail size={18} color="var(--primary)" /> dridecoracoes@gmail.com
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 style={{ marginBottom: '20px' }}>Siga-nos</h4>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <a href="https://www.instagram.com/dridecoracoesadriane/" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><Instagram size={24} /></a>
                            <a href="https://www.facebook.com/dri.d.adriane" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}><Facebook size={24} /></a>
                            <a href="https://wa.me/5511997335200" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-whatsapp"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid #444',
                    paddingTop: '20px',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    opacity: 0.6,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    alignItems: 'center'
                }}>
                    <div>&copy; {new Date().getFullYear()} Dri Decorações. Todos os direitos reservados.</div>
                    <a 
                        href="https://wa.me/5511939014534" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{ 
                            color: 'var(--primary)', 
                            textDecoration: 'none', 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '5px',
                            fontSize: '0.8rem'
                        }}
                    >
                        <Phone size={14} /> Desenvolvido por [Suporte Técnico]
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
