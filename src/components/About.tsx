import { motion } from 'framer-motion';

const About: React.FC = () => {
    return (
        <section id="sobre" style={{ backgroundColor: 'var(--white)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="section-title" style={{ textAlign: 'left', marginBottom: '30px' }}>
                            <span style={{ color: 'var(--primary)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>A Mente Criativa</span>
                            <h2 style={{ fontSize: '2.8rem', marginTop: '10px' }}>
                                Adriane Teixeira <span style={{ color: 'var(--primary)' }}>"Dri"</span>
                            </h2>
                            <p style={{ color: 'var(--text-light)', fontStyle: 'italic', fontSize: '1.1rem', marginTop: '-5px', marginBottom: '15px' }}>
                                (Como gosta de ser chamada)
                            </p>
                            <p style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '1.2rem', letterSpacing: '1px' }}>Fundadora da DriDecorações</p>
                            <div style={{ width: '80px', height: '5px', background: 'var(--primary)', marginTop: '15px' }}></div>
                        </div>

                        <p style={{ fontSize: '1.2rem', marginBottom: '25px', color: 'var(--text-dark)', fontWeight: '600', lineHeight: '1.4' }}>
                            Com uma trajetória brilhante de <strong>16 anos</strong> transformando sonhos em realidade, Adriane Teixeira é referência em cenografias que exalam luxo e autenticidade.
                        </p>

                        <p style={{ fontSize: '1.1rem', marginBottom: '25px', color: 'var(--text-light)', lineHeight: '1.9' }}>
                            "Meu propósito é mais do que decorar; é criar memórias tátil-visuais que permaneçam no coração.
                            Cada projeto na DriDecorações é tratado como uma obra de arte única, onde a sofisticação encontra o afeto."
                        </p>

                        <blockquote style={{
                            borderLeft: '5px solid var(--primary)',
                            padding: '20px 30px',
                            margin: '40px 0',
                            backgroundColor: 'rgba(197, 179, 88, 0.05)',
                            borderRadius: '0 20px 20px 0',
                            lineHeight: '1.7'
                        }}>
                            <p style={{ fontSize: '1.3rem', color: 'var(--secondary)', fontStyle: 'italic' }}>
                                <strong>"'Tudo o que fizerem, façam de todo o coração, como para o Senhor e não para as pessoas'."</strong>
                            </p>
                            <footer style={{ marginTop: '10px', color: 'var(--primary)', fontWeight: 'bold' }}>— Colossenses 3:23</footer>
                        </blockquote>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{ position: 'relative', textAlign: 'center' }}
                    >
                        <div className="glass" style={{
                            padding: '15px',
                            display: 'inline-block',
                            position: 'relative',
                            boxShadow: 'var(--shadow)',
                            background: 'white'
                        }}>
                            <div style={{
                                width: '100%',
                                maxWidth: '420px',
                                aspectRatio: '4/5',
                                backgroundColor: 'var(--accent)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '12px',
                                overflow: 'hidden',
                                border: '1px solid rgba(0,0,0,0.03)'
                            }}>
                                <img
                                    src="/assets/images/adriane-profile.jpg"
                                    alt="Adriane Teixeira - Fundadora"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{
                                position: 'absolute',
                                bottom: '40px',
                                right: '-30px',
                                background: 'var(--secondary)',
                                padding: '15px 30px',
                                color: 'var(--primary)',
                                borderRadius: '4px',
                                fontWeight: 'bold',
                                fontSize: '0.9rem',
                                letterSpacing: '2px',
                                textTransform: 'uppercase',
                                boxShadow: '20px 20px 60px rgba(0,0,0,0.2)'
                            }}>
                                16 Years Legacy
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
