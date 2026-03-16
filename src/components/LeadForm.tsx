import React, { useState } from 'react';
import { Send, Calendar, User, Mail, Phone, Heart, MapPin } from 'lucide-react';

interface LeadFormProps {
    prefilledType?: string;
    onClearPrefilled?: () => void;
}

const LeadForm: React.FC<LeadFormProps> = ({ prefilledType, onClearPrefilled }) => {
    const [formData, setFormData] = useState({
        nome: '',
        apelido: '',
        email: '',
        whatsapp: '',
        // Endereço do Residência
        residenciaCep: '',
        residenciaRua: '',
        residenciaNumero: '',
        residenciaBairro: '',
        residenciaCidade: '',
        residenciaEstado: '',
        // Endereço do Evento
        cep: '',
        rua: '',
        numero: '',
        bairro: '',
        cidade: '',
        estado: '',
        // Detalhes
        tipoEvento: '',
        dataEvento: '',
        orcamento: '',
        descricaoProjeto: '',
        objetoAluguel: '',
        descricaoAluguel: ''
    });

    React.useEffect(() => {
        if (prefilledType) {
            setFormData(prev => ({ ...prev, tipoEvento: prefilledType }));
            if (onClearPrefilled) onClearPrefilled();
        }
    }, [prefilledType, onClearPrefilled]);

    const formatCEP = (value: string) => {
        const cleaned = value.replace(/\D/g, '').slice(0, 8);
        if (cleaned.length > 5) {
            return `${cleaned.slice(0, 5)}-${cleaned.slice(5)}`;
        }
        return cleaned;
    };

    const formatWhatsApp = (value: string) => {
        const cleaned = value.replace(/\D/g, '').slice(0, 11);
        if (cleaned.length > 10) {
            return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 7)}-${cleaned.slice(7)}`;
        } else if (cleaned.length > 6) {
            return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2, 6)}-${cleaned.slice(6)}`;
        } else if (cleaned.length > 2) {
            return `(${cleaned.slice(0, 2)}) ${cleaned.slice(2)}`;
        }
        return cleaned;
    };

    const formatCurrency = (value: string) => {
        const cleaned = value.replace(/\D/g, '');
        if (!cleaned) return '';

        const amount = (parseInt(cleaned) / 100).toFixed(2);
        const [intPart, decimalPart] = amount.split('.');

        const formattedInt = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return `R$ ${formattedInt},${decimalPart}`;
    };

    const [loadingCep, setLoadingCep] = useState(false);

    // ViaCep Integration
    const handleCepBlur = async (type: 'evento' | 'residencia') => {
        const cepValue = type === 'evento' ? formData.cep : formData.residenciaCep;
        const cep = cepValue.replace(/\D/g, '');

        if (cep.length === 8) {
            setLoadingCep(true);
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                const data = await response.json();
                if (!data.erro) {
                    if (type === 'evento') {
                        setFormData(prev => ({
                            ...prev,
                            rua: data.logradouro,
                            bairro: data.bairro,
                            cidade: data.localidade,
                            estado: data.uf
                        }));
                    } else {
                        setFormData(prev => ({
                            ...prev,
                            residenciaRua: data.logradouro,
                            residenciaBairro: data.bairro,
                            residenciaCidade: data.localidade,
                            residenciaEstado: data.uf
                        }));
                    }
                }
            } catch (error) {
                console.error("Erro ao buscar CEP:", error);
            } finally {
                setLoadingCep(false);
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const isAluguel = formData.tipoEvento === 'Aluguel de Peças';

        // Format Date to DD/MM/YYYY
        const formatDate = (dateString: string) => {
            if (!dateString) return '';
            const [year, month, day] = dateString.split('-');
            return `${day}/${month}/${year}`;
        };

        const dateFormatted = formatDate(formData.dataEvento);

        // Pre-filled message for WhatsApp
        const message = `Olá Dri Decorações!
Meu nome é: ${formData.nome} ${formData.apelido ? `(${formData.apelido})` : ''}
Gostaria de falar sobre ${isAluguel ? 'um Aluguel de Peças' : 'minha Festa do Sonho'}:
${isAluguel ? `Objeto pretendido: ${formData.objetoAluguel}\nDescrição: ${formData.descricaoAluguel}` : formData.descricaoProjeto}

Detalhes:
- Tipo: ${formData.tipoEvento}
- Data: ${dateFormatted}
${!isAluguel ? `- Orçamento pretendido: ${formData.orcamento}` : ''}

Endereço de Residência:
- CEP: ${formData.residenciaCep}
- Rua: ${formData.residenciaRua}, Nº: ${formData.residenciaNumero}
- Bairro: ${formData.residenciaBairro}
- Cidade: ${formData.residenciaCidade} - ${formData.residenciaEstado}

Endereço do Evento:
- CEP: ${formData.cep}
- Rua: ${formData.rua}, Nº: ${formData.numero}
- Bairro: ${formData.bairro}
- Cidade: ${formData.cidade} - ${formData.estado}

Meus Contatos:
- WhatsApp: ${formData.whatsapp}
- Email: ${formData.email}`;

        const whatsappUrl = `https://wa.me/5511997335200?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="leads" className="lead-form-section" style={{ backgroundColor: 'var(--accent)' }}>
            <div className="container">
                <div className="glass" style={{ padding: '40px', maxWidth: '1000px', margin: '0 auto', boxShadow: 'var(--shadow)' }}>
                    <div className="section-title">
                        <Heart size={32} color="var(--primary)" style={{ marginBottom: '10px' }} />
                        <h2>Vamos Criar Algo Mágico?</h2>
                        <p>Preencha os dados abaixo e entraremos em contato para planejar cada detalhe.</p>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
                        {/* Seção 1: Identificação */}
                        <div style={{ gridColumn: '1 / -1' }}><h3 style={sectionTitleStyle}>1. Identificação</h3></div>

                        <div className="input-group">
                            <label style={labelStyle}><User size={16} /> Nome Completo</label>
                            <input type="text" required style={inputStyle} value={formData.nome} onChange={(e) => setFormData({ ...formData, nome: e.target.value })} />
                        </div>

                        <div className="input-group">
                            <label style={labelStyle}><Heart size={16} /> Apelido / Como gostaria de ser chamado</label>
                            <input type="text" style={inputStyle} value={formData.apelido} onChange={(e) => setFormData({ ...formData, apelido: e.target.value })} />
                        </div>

                        <div className="input-group">
                            <label style={labelStyle}><Mail size={16} /> Email</label>
                            <input type="email" required style={inputStyle} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                        </div>

                        <div className="input-group">
                            <label style={labelStyle}><Phone size={16} /> WhatsApp / Telefone</label>
                            <input
                                type="tel"
                                required
                                style={inputStyle}
                                maxLength={15}
                                value={formData.whatsapp}
                                onChange={(e) => setFormData({ ...formData, whatsapp: formatWhatsApp(e.target.value) })}
                            />
                        </div>

                        {/* Seção 2: Residência */}
                        <div style={{ gridColumn: '1 / -1' }}><h3 style={sectionTitleStyle}>2. Endereço de Residência</h3></div>

                        <div className="input-group">
                            <label style={labelStyle}><MapPin size={16} /> CEP Residencial</label>
                            <input
                                type="text"
                                required
                                style={inputStyle}
                                maxLength={9}
                                value={formData.residenciaCep}
                                onBlur={() => handleCepBlur('residencia')}
                                onChange={(e) => setFormData({ ...formData, residenciaCep: formatCEP(e.target.value) })}
                            />
                        </div>

                        <div className="input-group" style={{ gridColumn: 'span 2' }}>
                            <label style={labelStyle}>Rua/Logradouro</label>
                            <input type="text" required style={inputStyle} value={formData.residenciaRua} onChange={(e) => setFormData({ ...formData, residenciaRua: e.target.value })} />
                        </div>

                        <div className="input-group">
                            <label style={labelStyle}>Número</label>
                            <input type="text" required style={inputStyle} value={formData.residenciaNumero} onChange={(e) => setFormData({ ...formData, residenciaNumero: e.target.value })} />
                        </div>

                        <div className="input-group">
                            <label style={labelStyle}>Bairro</label>
                            <input type="text" required style={inputStyle} value={formData.residenciaBairro} onChange={(e) => setFormData({ ...formData, residenciaBairro: e.target.value })} />
                        </div>

                        <div className="input-group">
                            <label style={labelStyle}>Cidade</label>
                            <input type="text" required style={inputStyle} value={formData.residenciaCidade} onChange={(e) => setFormData({ ...formData, residenciaCidade: e.target.value })} />
                        </div>

                        <div className="input-group">
                            <label style={labelStyle}>Estado (UF)</label>
                            <input type="text" required style={inputStyle} value={formData.residenciaEstado} onChange={(e) => setFormData({ ...formData, residenciaEstado: e.target.value })} />
                        </div>

                        {/* Seção 2.5: Endereço do Evento */}
                        <div style={{ gridColumn: '1 / -1' }}><h3 style={sectionTitleStyle}>2.5. Endereço do Evento</h3></div>

                        <div className="input-group">
                            <label style={labelStyle}><MapPin size={16} /> CEP</label>
                            <input
                                type="text"
                                required
                                style={inputStyle}
                                maxLength={9}
                                value={formData.cep}
                                onBlur={() => handleCepBlur('evento')}
                                onChange={(e) => setFormData({ ...formData, cep: formatCEP(e.target.value) })}
                            />
                            {loadingCep && <span style={{ fontSize: '0.8rem', color: 'var(--primary)' }}>Buscando...</span>}
                        </div>

                        <div className="input-group" style={{ gridColumn: 'span 2' }}>
                            <label style={labelStyle}>Rua/Logradouro</label>
                            <input type="text" required style={inputStyle} value={formData.rua} onChange={(e) => setFormData({ ...formData, rua: e.target.value })} />
                        </div>

                        <div className="input-group">
                            <label style={labelStyle}>Número</label>
                            <input type="text" required style={inputStyle} value={formData.numero} onChange={(e) => setFormData({ ...formData, numero: e.target.value })} />
                        </div>

                        <div className="input-group">
                            <label style={labelStyle}>Bairro</label>
                            <input type="text" required style={inputStyle} value={formData.bairro} onChange={(e) => setFormData({ ...formData, bairro: e.target.value })} />
                        </div>

                        <div className="input-group">
                            <label style={labelStyle}>Cidade</label>
                            <input type="text" required style={inputStyle} value={formData.cidade} onChange={(e) => setFormData({ ...formData, cidade: e.target.value })} />
                        </div>

                        <div className="input-group">
                            <label style={labelStyle}>Estado (UF)</label>
                            <input type="text" required style={inputStyle} value={formData.estado} onChange={(e) => setFormData({ ...formData, estado: e.target.value })} />
                        </div>

                        {/* Seção 3: Detalhes do Evento */}
                        <div style={{ gridColumn: '1 / -1' }}><h3 style={sectionTitleStyle}>3. Detalhes da Festa</h3></div>

                        <div className="input-group">
                            <label style={labelStyle}><Calendar size={16} /> Tipo de Evento</label>
                            <select required style={inputStyle} value={formData.tipoEvento} onChange={(e) => setFormData({ ...formData, tipoEvento: e.target.value })}>
                                <option value="">Selecione...</option>
                                <optgroup label="Infantis e Adultos">
                                    <option value="Casamento">Casamento</option>
                                    <option value="Aniversário Infantil (Menino)">Aniversário Infantil (Menino)</option>
                                    <option value="Aniversário Infantil (Menina)">Aniversário Infantil (Menina)</option>
                                    <option value="Aniversário Adulto (Homem)">Adulto (Homem)</option>
                                    <option value="Aniversário Adulto (Mulher)">Adulto (Mulher)</option>
                                </optgroup>
                                <optgroup label="Corporativos">
                                    <option value="Aniversário da Empresa">Aniversário da Empresa</option>
                                    <option value="Confraternização">Confraternização</option>
                                </optgroup>
                                <optgroup label="Religiosos">
                                    <option value="Casamento Religioso">Casamento</option>
                                    <option value="Congresso (Jovens)">Congresso (Jovens)</option>
                                    <option value="Congresso (Mulheres)">Congresso (Mulheres)</option>
                                    <option value="Congresso (Varões)">Congresso (Varões)</option>
                                    <option value="Congresso (Kids)">Congresso (Kids)</option>
                                    <option value="EBO">EBO (Escola Bíblica de Obreiros)</option>
                                    <option value="EBD">EBD (Escola Bíblica Dominical)</option>
                                </optgroup>
                                <optgroup label="Chás">
                                    <option value="Chá de Bebê">Chá de Bebê</option>
                                    <option value="Chá de Cozinha">Chá de Cozinha</option>
                                    <option value="Chá Revelação">Chá Revelação</option>
                                </optgroup>
                                <option value="Aluguel de Peças" style={{ fontWeight: 'bold' }}>Aluguel de Peças</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <label style={labelStyle}><Calendar size={16} /> Data Pretendida</label>
                            <input type="date" required style={inputStyle} value={formData.dataEvento} onChange={(e) => setFormData({ ...formData, dataEvento: e.target.value })} />
                        </div>

                        {formData.tipoEvento !== 'Aluguel de Peças' ? (
                            <>
                                <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                                    <label style={labelStyle}>Orçamento disponível para o projeto</label>
                                    <input
                                        type="text"
                                        placeholder="Digite o valor previsto (ex: R$ 2.500,00)"
                                        style={inputStyle}
                                        value={formData.orcamento}
                                        onChange={(e) => setFormData({ ...formData, orcamento: formatCurrency(e.target.value) })}
                                    />
                                </div>

                                <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                                    <label style={labelStyle}><Send size={16} /> Fale sobre o seu projeto (Sua Festa do Sonho)</label>
                                    <textarea
                                        required
                                        maxLength={1000}
                                        style={{ ...inputStyle, height: '150px', resize: 'vertical' }}
                                        placeholder="Conte-nos mais sobre o que você imagina para este dia especial..."
                                        value={formData.descricaoProjeto}
                                        onChange={(e) => setFormData({ ...formData, descricaoProjeto: e.target.value })}
                                    />
                                    <div style={{ textAlign: 'right', fontSize: '0.8rem', opacity: 0.6 }}>
                                        {formData.descricaoProjeto.length} / 1000 caracteres
                                    </div>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                                    <label style={labelStyle}>Objeto pretendido para aluguel</label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Ex: Painel redondo, Trio de cilindros..."
                                        style={inputStyle}
                                        value={formData.objetoAluguel}
                                        onChange={(e) => setFormData({ ...formData, objetoAluguel: e.target.value })}
                                    />
                                </div>

                                <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                                    <label style={labelStyle}>Descreva o que deseja alugar</label>
                                    <textarea
                                        required
                                        maxLength={1000}
                                        style={{ ...inputStyle, height: '150px', resize: 'vertical' }}
                                        placeholder="Liste as peças e detalhes do aluguel..."
                                        value={formData.descricaoAluguel}
                                        onChange={(e) => setFormData({ ...formData, descricaoAluguel: e.target.value })}
                                    />
                                    <div style={{ textAlign: 'right', fontSize: '0.8rem', opacity: 0.6 }}>
                                        {formData.descricaoAluguel.length} / 1000 caracteres
                                    </div>
                                </div>
                            </>
                        )}

                        <div style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '20px' }}>
                            <button type="submit" className="premium-button" style={{ width: '100%', maxWidth: '400px' }}>
                                Solicitar Orçamento no WhatsApp <Send size={18} style={{ marginLeft: '10px' }} />
                            </button>
                        </div>
                    </form>
                </div>
            </div >
        </section >
    );
};

const labelStyle = { display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: '500' };
const inputStyle = { width: '100%', padding: '12px 15px', borderRadius: '8px', border: '1px solid #ddd', outline: 'none', fontSize: '1rem', transition: 'border-color 0.3s' };
const sectionTitleStyle = { borderBottom: '2px solid var(--primary)', paddingBottom: '5px', marginBottom: '15px', fontSize: '1.2rem', color: 'var(--secondary)' };

export default LeadForm;
