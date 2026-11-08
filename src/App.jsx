import React from 'react';
import { previewPages } from './previewPages';

const checkoutUrl = 'https://pay.hotmart.com/G108080766B?checkoutMode=10&bid=1792293294853';

function BuyButton({ children = 'QUERO MEU KIT DE ALFABETIZAÇÃO' }) {
  return <a className="buy-button" href={checkoutUrl} target="_blank" rel="noreferrer">{children}<span aria-hidden="true"> →</span></a>;
}

function Book({ label, title, color, detail }) {
  return (
    <div className={`book book-${color}`}>
      <div className="book-brand">ABC DO FUTURO DIGITAL</div>
      <div className="book-art" aria-hidden="true">{detail}</div>
      <div className="book-title">{title}</div>
      <div className="book-label">{label}</div>
    </div>
  );
}

function App() {
  return (
    <main>
      <div className="topbar">✦ ACESSO IMEDIATO! APROVEITE ESTA CONDIÇÃO ESPECIAL!</div>

      <header className="hero section-wrap">
        <div className="hero-copy">
          <span className="eyebrow">PARA PAIS E PROFESSORES</span>
          <h1>Pouco tempo para preparar atividades de alfabetização? Tenha tudo mais <em>prático e organizado!</em></h1>
          <p className="hero-subtitle">Reúna atividades de vogais, sílabas simples e coordenação motora em um só kit digital, pronto para consultar e imprimir.</p>
          <div className="hero-points">
            <span>✓ Atividades prontas para usar</span>
            <span>✓ Arquivos digitais</span>
            <span>✓ Acesso imediato</span>
          </div>
          <BuyButton />
          <small className="secure-note">Pagamento seguro pela Hotmart • Material digital</small>
        </div>
        <div className="hero-visual" aria-label="Apresentação ilustrativa dos materiais do Kit Alfabetização">
          <div className="spark spark-one">✦</div>
          <div className="spark spark-two">✳</div>
          <div className="book-stack">
            <Book label="CADERNO" title="SÍLABAS SIMPLES" color="blue" detail="BA BE BI BO BU" />
            <Book label="CADERNO" title="DAS VOGAIS" color="coral" detail="A E I O U" />
            <Book label="ATIVIDADES" title="COORDENAÇÃO MOTORA" color="mint" detail="✎ ✿ ◯" />
          </div>
          <div className="bonus-sticker">BÔNUS<br/><strong>EXCLUSIVO!</strong></div>
        </div>
      </header>

      <section className="intro-band">
        <div className="section-wrap intro-inner">
          <p>Mais praticidade para ensinar.</p>
          <p>Mais oportunidades para aprender.</p>
          <p>Mais momentos de descoberta!</p>
        </div>
      </section>

      <section className="pain-section">
        <div className="section-wrap pain-inner">
          <div className="section-heading">
            <span className="eyebrow">A GENTE ENTENDE SUA ROTINA</span>
            <h2>Encontrar atividades variadas e preparar tudo pode tomar muito tempo.</h2>
            <p>Entre a rotina da escola, da casa e tantas tarefas, nem sempre é fácil ter propostas organizadas à mão para cada momento de aprendizagem.</p>
          </div>
          <div className="pain-grid">
            <div><span>⌛</span><strong>Pouco tempo para preparar atividades</strong><p>Você precisa de praticidade para organizar a rotina.</p></div>
            <div><span>📚</span><strong>Dificuldade para reunir materiais</strong><p>É melhor ter diferentes propostas em um só kit.</p></div>
            <div><span>🌱</span><strong>A criança precisa praticar</strong><p>Vogais, sílabas e coordenação motora pedem oportunidades de treino.</p></div>
          </div>
          <div className="solution-note"><strong>A solução:</strong> um kit digital com três cadernos pedagógicos e um bônus para apoiar suas atividades de alfabetização, com arquivos prontos para consultar e imprimir.</div>
        </div>
      </section>

      <section className="section-wrap content-section">
        <div className="section-heading">
          <span className="eyebrow">SEU KIT COMPLETO</span>
          <h2>O que você vai receber?</h2>
          <p>Materiais digitais para trabalhar habilidades essenciais da alfabetização.</p>
        </div>
        <div className="product-grid">
          <article className="product-card">
            <img className="product-cover" src={`${import.meta.env.BASE_URL}capas/caderno-silabas-simples.svg`} alt="Capa do Caderno de Sílabas Simples, com as sílabas BA, BE, BI, BO e BU."/>
            <h3>Caderno de Sílabas Simples</h3>
            <p>Atividades para reconhecer, formar e praticar sílabas simples.</p>
          </article>
          <article className="product-card">
            <img className="product-cover" src={`${import.meta.env.BASE_URL}capas/caderno-das-vogais.svg`} alt="Capa do Caderno das Vogais, com as letras A, E, I, O e U em destaque."/>
            <h3>Caderno das Vogais</h3>
            <p>Propostas para identificar, traçar e aprender as vogais.</p>
          </article>
          <article className="product-card">
            <div className="product-icon icon-mint">✎</div>
            <h3>Caderno de Coordenação Motora</h3>
            <p>50 páginas de atividades para desenvolver o controle dos movimentos e o traçado.</p>
          </article>
        </div>
      </section>

      <section className="section-wrap preview-section">
        <div className="section-heading">
          <span className="eyebrow">VEJA POR DENTRO</span>
          <h2>Páginas reais dos materiais</h2>
          <p>Estas são amostras retiradas dos próprios cadernos que você vai receber no kit.</p>
        </div>
        <div className="preview-grid">
          <figure className="preview-card"><img src={previewPages.silabas} alt="Página real do Caderno de Sílabas Simples, com atividade da família do B."/><figcaption><strong>Caderno de Sílabas Simples</strong><span>Atividade de formação e treino de sílabas</span></figcaption></figure>
          <figure className="preview-card"><img src={previewPages.vogais} alt="Página real do Caderno das Vogais, com atividades ilustradas para reconhecer A, E, I, O e U."/><figcaption><strong>Caderno das Vogais</strong><span>Reconhecimento das vogais e associação com figuras</span></figcaption></figure>
          <figure className="preview-card"><img src={previewPages.coordenacao} alt="Página real do Caderno de Coordenação Motora, com traçados pontilhados."/><figcaption><strong>Caderno de Coordenação Motora</strong><span>Traçados para praticar o controle do lápis</span></figcaption></figure>
        </div>
      </section>

      <section className="bonus-section">
        <div className="section-wrap bonus-inner">
          <div className="bonus-copy">
            <span className="eyebrow">UM PRESENTE ESPECIAL</span>
            <h2>Bônus exclusivo para completar a diversão!</h2>
            <p>Você também recebe o Livro de Colorir — Animais da Fazenda, para explorar a criatividade enquanto aprende.</p>
            <span className="bonus-tag">BÔNUS INCLUSO NO KIT</span>
          </div>
          <div className="bonus-book">
            <div className="farm-illustration" aria-hidden="true">🐮 🐷 🐔</div>
            <strong>LIVRO DE COLORIR</strong>
            <span>ANIMAIS DA FAZENDA</span>
          </div>
        </div>
      </section>

      <section className="section-wrap benefits-section">
        <div className="section-heading">
          <span className="eyebrow">MAIS FACILIDADE NO DIA A DIA</span>
          <h2>Feito para facilitar sua rotina</h2>
        </div>
        <div className="benefit-grid">
          <div><span>01</span><h3>Pronto para usar</h3><p>Materiais organizados para facilitar a aplicação das atividades.</p></div>
          <div><span>02</span><h3>Aprendizagem ativa</h3><p>Atividades que convidam a criança a participar e praticar.</p></div>
          <div><span>03</span><h3>Acesso digital</h3><p>Consulte e imprima os arquivos quando precisar.</p></div>
        </div>
      </section>

      <section className="offer-section">
        <div className="section-wrap offer-card">
          <span className="eyebrow">CONDIÇÃO ESPECIAL</span>
          <h2>Leve o kit completo por um valor especial!</h2>
          <div className="price-compare">
            <span>Valor dos materiais separados: <s>R$ 49,70</s></span>
            <div className="price">R$ 34,90</div>
            <strong className="saving">Você economiza R$ 14,80</strong>
          </div>
          <BuyButton>QUERO APROVEITAR A OFERTA</BuyButton>
          <small>Pagamento único • Produto digital</small>
        </div>
      </section>

      <section className="section-wrap trust-section">
        <div className="trust-item"><span className="trust-icon">✓</span><div><h3>Compra segura</h3><p>Pagamento processado pela plataforma Hotmart.</p></div></div>
        <div className="trust-item"><span className="trust-icon">↗</span><div><h3>Acesso imediato</h3><p>Após a confirmação do pagamento, consulte as instruções de acesso enviadas pela Hotmart.</p></div></div>
        <div className="trust-item"><span className="trust-icon">∞</span><div><h3>Acesse quando quiser</h3><p>Seus arquivos digitais ficam disponíveis na sua área de acesso, conforme as condições da plataforma.</p></div></div>
      </section>

      <section className="final-cta">
        <div className="section-wrap">
          <span className="eyebrow">ABC DO FUTURO DIGITAL</span>
          <h2>Vamos tornar a alfabetização uma experiência ainda mais especial?</h2>
          <p>Garanta agora seu Kit Alfabetização e comece a explorar as atividades.</p>
          <BuyButton>SIM! QUERO MEU KIT</BuyButton>
        </div>
      </section>

      <footer><strong>ABC DO FUTURO DIGITAL</strong><span>Materiais pedagógicos digitais.</span><small>Produto digital. Mockups de apresentação ilustrativos. As páginas de atividades exibidas são amostras reais dos três cadernos.</small></footer>
    </main>
  );
}

export default App;
