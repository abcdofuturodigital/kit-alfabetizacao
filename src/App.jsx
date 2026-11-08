import React, { useEffect, useState } from 'react';
import { previewPages } from './previewPages';

const checkoutUrl = 'https://pay.hotmart.com/G108080766B?checkoutMode=10&bid=1792293294853';

function BuyButton({ children = 'QUERO MEU KIT' }) {
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
  const [secondsLeft, setSecondsLeft] = useState(15 * 60);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setSecondsLeft((seconds) => Math.max(0, seconds - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const timerDisplay = `${String(Math.floor(secondsLeft / 60)).padStart(2, '0')}:${String(secondsLeft % 60).padStart(2, '0')}`;

  return (
    <main>
      <div className="topbar"><span>✦ ACESSO IMEDIATO! APROVEITE ESTA CONDIÇÃO ESPECIAL!</span><span className="visit-timer" aria-live="off"><strong>{timerDisplay}</strong></span></div>

      <header className="hero section-wrap">
        <div className="hero-copy">
          <span className="eyebrow">PARA PAIS E PROFESSORES</span>
          <h1>Falta tempo para preparar atividades? Tenha a alfabetização mais <em>prática e organizada!</em></h1>
          <p className="hero-subtitle">Três cadernos pedagógicos em um só kit digital, com atividades de vogais, sílabas simples e coordenação motora.</p>
          <div className="hero-points">
            <span>✓ Pronto para consultar e imprimir</span>
            <span>✓ Bônus: Livro de Colorir</span>
            <span>✓ Acesso digital</span>
          </div>
          <BuyButton />
          <small className="secure-note">Pagamento pela Hotmart • Produto digital</small>
        </div>
        <div className="hero-visual" aria-label="Apresentação ilustrativa dos três cadernos do Kit Alfabetização">
          <div className="spark spark-one">✦</div>
          <div className="spark spark-two">✳</div>
          <div className="book-stack">
            <Book label="CADERNO" title="SÍLABAS SIMPLES" color="blue" detail="BA BE BI BO BU" />
            <Book label="CADERNO" title="DAS VOGAIS" color="coral" detail="A E I O U" />
            <Book label="ATIVIDADES" title="COORDENAÇÃO MOTORA" color="mint" detail="✎ ✿ ◯" />
          </div>
          <div className="bonus-sticker">BÔNUS<br/><strong>INCLUSO!</strong></div>
        </div>
      </header>

      <section className="section-wrap content-section">
        <div className="section-heading">
          <span className="eyebrow">TUDO EM UM SÓ KIT</span>
          <h2>Você recebe 3 cadernos digitais</h2>
        </div>
        <div className="product-grid">
          <article className="product-card">
            <img className="product-cover" src={`${import.meta.env.BASE_URL}capas/caderno-silabas-simples.svg`} alt="Capa do Caderno de Sílabas Simples."/>
            <h3>Caderno de Sílabas Simples</h3>
            <p>Atividades para formar e praticar sílabas.</p>
          </article>
          <article className="product-card">
            <img className="product-cover" src={`${import.meta.env.BASE_URL}capas/caderno-das-vogais.svg`} alt="Capa do Caderno das Vogais."/>
            <h3>Caderno das Vogais</h3>
            <p>Atividades para identificar e traçar as vogais.</p>
          </article>
          <article className="product-card">
            <img className="product-cover" src={`${import.meta.env.BASE_URL}capas/caderno-coordenacao-motora.svg`} alt="Capa do Caderno de Coordenação Motora."/>
            <h3>Caderno de Coordenação Motora</h3>
            <p>50 páginas para praticar movimentos e traçados.</p>
          </article>
        </div>
      </section>

      <section className="section-wrap preview-section">
        <div className="section-heading">
          <span className="eyebrow">CONHEÇA O CONTEÚDO</span>
          <h2>Veja algumas páginas reais</h2>
        </div>
        <div className="preview-grid">
          <figure className="preview-card"><img src={previewPages.silabas} alt="Página do Caderno de Sílabas Simples."/><figcaption><strong>Sílabas Simples</strong></figcaption></figure>
          <figure className="preview-card"><img src={previewPages.vogais} alt="Página do Caderno das Vogais."/><figcaption><strong>Vogais</strong></figcaption></figure>
          <figure className="preview-card"><img src={previewPages.coordenacao} alt="Página do Caderno de Coordenação Motora."/><figcaption><strong>Coordenação Motora</strong></figcaption></figure>
        </div>
      </section>

      <section className="bonus-section">
        <div className="section-wrap bonus-inner">
          <div className="bonus-copy">
            <span className="eyebrow">BÔNUS INCLUSO</span>
            <h2>Livro de Colorir — Animais da Fazenda</h2>
            <p>Mais diversão e criatividade para completar o kit.</p>
          </div>
          <div className="bonus-book">
            <div className="farm-illustration" aria-hidden="true">🐮 🐷 🐔</div>
            <strong>LIVRO DE COLORIR</strong>
            <span>ANIMAIS DA FAZENDA</span>
          </div>
        </div>
      </section>

      <section className="offer-section">
        <div className="section-wrap offer-card">
          <span className="eyebrow">OFERTA ESPECIAL</span>
          <h2>Leve os 3 cadernos + o bônus</h2>
          <div className="price-compare">
            <span>Separadamente: <s>R$ 49,70</s></span>
            <div className="price">R$ 34,90</div>
            <strong className="saving">Economize R$ 14,80</strong>
          </div>
          <BuyButton>QUERO APROVEITAR A OFERTA</BuyButton>
          <small>Pagamento único • Compra pela Hotmart</small>
        </div>
      </section>

      <section className="section-wrap trust-section">
        <div className="trust-item"><span className="trust-icon">✓</span><div><h3>Compra pela Hotmart</h3><p>Pagamento processado pela plataforma.</p></div></div>
        <div className="trust-item"><span className="trust-icon">↗</span><div><h3>Acesso digital</h3><p>Instruções enviadas após a confirmação.</p></div></div>
        <div className="trust-item"><span className="trust-icon">⌂</span><div><h3>Consulte e imprima</h3><p>Use os arquivos conforme sua necessidade.</p></div></div>
      </section>

      <footer><strong>ABC DO FUTURO DIGITAL</strong><span>Materiais pedagógicos digitais.</span></footer>
    </main>
  );
}

export default App;
