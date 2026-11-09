import React from 'react';
import { previewPages } from './previewPages';

const checkoutUrl = 'https://pay.hotmart.com/G108080766B?checkoutMode=10&bid=1792293294853';

function BuyButton({ children = 'QUERO MEU KIT' }) {
  return <a className="buy-button" href={checkoutUrl} target="_blank" rel="noreferrer">{children}<span aria-hidden="true"> →</span></a>;
}

function App() {
  return (
    <main>
      <div className="topbar"><span>ACESSO IMEDIATO! APROVEITE ESTA CONDIÇÃO ESPECIAL!</span></div>

      <header className="hero section-wrap">
        <div className="hero-copy">
          <span className="eyebrow">PARA PROFESSORES E FAMÍLIAS</span>
          <h1><em>+150 atividades</em><br />para alfabetizar!</h1>
          <p className="hero-subtitle">3 cadernos completos + 1 bônus especial. Tudo pronto para imprimir!</p>
          <div className="hero-points">
            <span>✓ Atividades de vogais, sílabas simples e coordenação motora.</span>
            <span>✓ Um material organizado para apoiar diferentes etapas da aprendizagem.</span>
          </div>
        </div>
        <div className="hero-mix" aria-label="Prévia de páginas reais dos três cadernos">
          <img className="mix-page mix-silabas" src={previewPages.silabas} alt="Atividade real de sílabas simples."/>
          <img className="mix-page mix-vogais" src={previewPages.vogais} alt="Atividade real com vogais."/>
          <img className="mix-page mix-coordenacao" src={previewPages.coordenacao} alt="Atividade real de coordenação motora."/>
        </div>
        <div className="hero-cta">
          <BuyButton />
          <small className="secure-note">Pagamento pela Hotmart • Produto digital</small>
        </div>
      </header>

      <section className="section-wrap content-section">
        <div className="section-heading">
          <span className="eyebrow">TUDO EM UM SÓ KIT</span>
          <h2>Os 3 cadernos que compõem o kit</h2>
          <p>Conteúdos diferentes, reunidos em um só material para facilitar sua rotina.</p>
        </div>
        <div className="product-grid">
          <article className="product-card">
            <img className="product-cover" src={`${import.meta.env.BASE_URL}capas/caderno-silabas-simples.svg`} alt="Capa do Caderno de Sílabas Simples."/>
            <h3>Caderno de Sílabas Simples</h3>
            <p>Exercícios para reconhecer, combinar e praticar sílabas simples.</p>
          </article>
          <article className="product-card">
            <img className="product-cover" src={`${import.meta.env.BASE_URL}capas/caderno-das-vogais.svg`} alt="Capa do Caderno das Vogais."/>
            <h3>Caderno das Vogais</h3>
            <p>Propostas para identificar, reconhecer e praticar o traçado das vogais.</p>
          </article>
          <article className="product-card">
            <img className="product-cover" src={`${import.meta.env.BASE_URL}capas/caderno-coordenacao-motora.svg`} alt="Capa do Caderno de Coordenação Motora."/>
            <h3>Caderno de Coordenação Motora</h3>
            <p>50 páginas de exercícios para desenvolver movimentos, controle do traçado e coordenação motora.</p>
          </article>
        </div>
      </section>

      <section className="section-wrap benefits-section">
        <div className="section-heading">
          <span className="eyebrow">MAIS PRATICIDADE NA ROTINA</span>
          <h2>Menos tempo preparando. Mais tempo ensinando.</h2>
          <p>Um conjunto de atividades para apoiar o trabalho com habilidades importantes da alfabetização.</p>
        </div>
        <div className="benefit-grid">
          <div><span>01</span><h3>Material organizado</h3><p>Três cadernos com propostas diferentes reunidos em um único kit digital.</p></div>
          <div><span>02</span><h3>Pronto para imprimir</h3><p>Tenha as atividades disponíveis para preparar suas propostas de aprendizagem.</p></div>
          <div><span>03</span><h3>Conteúdos complementares</h3><p>Vogais, sílabas simples e coordenação motora em uma só compra.</p></div>
        </div>
      </section>

      <section className="section-wrap preview-section">
        <div className="section-heading">
          <span className="eyebrow">CONHEÇA O CONTEÚDO</span>
          <h2>Veja algumas páginas reais</h2>
        </div>
        <div className="preview-carousel" aria-label="Páginas reais dos cadernos. Deslize para o lado para visualizar.">
          <figure className="preview-card"><img src={previewPages.silabas} alt="Página real do Caderno de Sílabas Simples."/><figcaption><strong>Sílabas Simples</strong></figcaption></figure>
          <figure className="preview-card"><img src={previewPages.vogais} alt="Página real do Caderno das Vogais."/><figcaption><strong>Caderno das Vogais</strong></figcaption></figure>
          <figure className="preview-card"><img src={previewPages.coordenacao} alt="Página real do Caderno de Coordenação Motora."/><figcaption><strong>Coordenação Motora</strong></figcaption></figure>
        </div>
        <p className="preview-hint">← Deslize para o lado e conheça as atividades →</p>
      </section>

      <section className="bonus-section">
        <div className="section-wrap bonus-inner">
          <div className="bonus-copy">
            <span className="eyebrow">BÔNUS INCLUSO</span>
            <h2>Livro de Colorir — Animais da Fazenda</h2>
            <p>Você também recebe um livro digital para colorir com animais da fazenda, como material bônus.</p>
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
          <h2>Receba o kit completo por um único preço</h2>
          <p className="offer-description">São 3 cadernos digitais com mais de 150 atividades, mais o Livro de Colorir — Animais da Fazenda como bônus.</p>
          <div className="price-compare">
            <span>Separadamente: <s>R$ 49,70</s></span>
            <div className="price">R$ 34,90</div>
            <strong className="saving">Economize R$ 14,80</strong>
          </div>
          <BuyButton>QUERO MEU KIT ALFABETIZAÇÃO</BuyButton>
          <small>Pagamento único • Compra segura pela Hotmart • Acesso digital após a confirmação</small>
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
