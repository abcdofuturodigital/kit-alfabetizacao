import React from 'react';
import { previewPages } from './previewPages';

const checkoutUrl = 'https://pay.hotmart.com/G108080766B?checkoutMode=10&bid=1792293294853';

function BuyButton({ children = 'QUERO MEU KIT' }) {
  return <a className="buy-button" href={checkoutUrl} target="_blank" rel="noreferrer">{children}<span aria-hidden="true"> →</span></a>;
}

function App() {
  return (
    <main>
      <div className="topbar">MATERIAL DIGITAL • ACESSO APÓS A CONFIRMAÇÃO DA COMPRA</div>

      <header className="hero section-wrap">
        <div className="hero-copy">
          <p className="eyebrow">ABC DO FUTURO DIGITAL APRESENTA</p>
          <h1>Um caminho mais organizado para apoiar a <em>alfabetização.</em></h1>
          <p className="hero-lead">Um kit com atividades para trabalhar habilidades importantes da aprendizagem, em casa ou na sala de aula.</p>
          <ul className="hero-list">
            <li>Consciência fonológica e reconhecimento das vogais</li>
            <li>Formação de sílabas e desenvolvimento da leitura</li>
            <li>Coordenação motora e prática de traçados</li>
          </ul>
          <BuyButton />
          <p className="secure-note">3 cadernos digitais + 1 livro de colorir de bônus</p>
        </div>
        <div className="hero-proof">
          <div className="proof-top"><span>O KIT ALFABETIZAÇÃO</span><span>01 — 03</span></div>
          <div className="proof-pages">
            <figure><img src={previewPages.silabas} alt="Amostra de atividade do Caderno de Sílabas Simples"/><figcaption>SÍLABAS SIMPLES</figcaption></figure>
            <figure><img src={previewPages.vogais} alt="Amostra de atividade do Caderno das Vogais"/><figcaption>VOGAIS</figcaption></figure>
            <figure><img src={previewPages.coordenacao} alt="Amostra de atividade do Caderno de Coordenação Motora"/><figcaption>COORDENAÇÃO</figcaption></figure>
          </div>
          <p className="proof-caption">Amostras de páginas dos materiais incluídos no kit.</p>
        </div>
      </header>

      <section className="pain-section">
        <div className="section-wrap pain-inner">
          <p className="eyebrow">PARA QUEM ENSINA E ACOMPANHA</p>
          <h2>Preparar atividades variadas leva tempo. E cada etapa da alfabetização pede atenção.</h2>
          <p>Reunimos propostas em um só kit para ajudar você a organizar momentos de aprendizagem e oferecer diferentes oportunidades de prática.</p>
        </div>
      </section>

      <section className="section-wrap materials-section">
        <div className="section-intro"><p className="eyebrow">O QUE VOCÊ VAI RECEBER</p><h2>Três cadernos. Diferentes possibilidades de aprendizagem.</h2></div>
        <div className="material-list">
          <article className="material-row">
            <div className="material-number">01</div><div className="material-copy"><h3>Caderno de Sílabas Simples</h3><p>Atividades para reconhecer, formar e praticar sílabas, apoiando o processo inicial de leitura e escrita.</p></div><div className="material-sample"><img src={previewPages.silabas} alt="Página de amostra do Caderno de Sílabas Simples"/></div>
          </article>
          <article className="material-row">
            <div className="material-number">02</div><div className="material-copy"><h3>Caderno das Vogais</h3><p>Propostas para identificar, reconhecer e praticar as vogais por meio de atividades variadas.</p></div><div className="material-sample"><img src={previewPages.vogais} alt="Página de amostra do Caderno das Vogais"/></div>
          </article>
          <article className="material-row">
            <div className="material-number">03</div><div className="material-copy"><h3>Caderno de Coordenação Motora</h3><p>50 páginas de atividades para exercitar movimentos, controle do traçado e coordenação motora.</p></div><div className="material-sample"><img src={previewPages.coordenacao} alt="Página de amostra do Caderno de Coordenação Motora"/></div>
          </article>
        </div>
      </section>

      <section className="bonus-section">
        <div className="section-wrap bonus-inner">
          <div><p className="eyebrow">E TEM MAIS</p><h2>Um presente para completar o kit.</h2><p>Você também recebe o <strong>Livro de Colorir — Animais da Fazenda</strong>, como bônus.</p></div>
          <div className="bonus-label"><span>BÔNUS</span><strong>Livro de Colorir</strong><small>Animais da Fazenda</small></div>
        </div>
      </section>

      <section className="offer-section">
        <div className="section-wrap offer-layout">
          <div className="offer-copy"><p className="eyebrow">CONDIÇÃO ESPECIAL</p><h2>Leve os materiais juntos e tenha tudo em um só lugar.</h2><p>São três cadernos digitais e um livro de colorir de bônus.</p></div>
          <div className="offer-card">
            <p className="offer-label">KIT ALFABETIZAÇÃO</p>
            <p className="old-price">Separadamente: <s>R$ 49,70</s></p>
            <p className="price">R$ 34,90</p>
            <p className="saving">Você economiza R$ 14,80</p>
            <BuyButton>QUERO GARANTIR MEU KIT</BuyButton>
            <small>Pagamento único pela Hotmart.</small>
          </div>
        </div>
      </section>

      <section className="section-wrap access-section">
        <p className="eyebrow">SIMPLES E DIGITAL</p>
        <div className="access-grid">
          <div><span>01</span><h3>Faça sua compra</h3><p>O pagamento é realizado com segurança pela Hotmart.</p></div>
          <div><span>02</span><h3>Receba as instruções</h3><p>Após a confirmação, siga as orientações de acesso ao produto.</p></div>
          <div><span>03</span><h3>Use os materiais</h3><p>Consulte os arquivos digitais e imprima as atividades que desejar utilizar.</p></div>
        </div>
      </section>

      <footer><strong>ABC DO FUTURO DIGITAL</strong><span>Materiais pedagógicos digitais.</span></footer>
    </main>
  );
}

export default App;
