import React from 'react';
import { previewPages } from './previewPages';

const checkoutUrl = 'https://pay.hotmart.com/G108080766B?checkoutMode=10&bid=1792293294853';
const asset = (path) => `${import.meta.env.BASE_URL}${path}`;

function BuyButton({ children = 'QUERO MEU KIT ALFABETIZAÇÃO' }) {
  return <a className="buy-button" href={checkoutUrl} target="_blank" rel="noreferrer">{children}<span aria-hidden="true"> →</span></a>;
}

const products = [
  {
    title: 'Caderno de Sílabas Simples',
    description: 'Atividades para reconhecer, combinar e praticar sílabas simples.',
    cover: 'capas/caderno-silabas-simples.svg',
    page: previewPages.silabas,
    alt: 'Página real do Caderno de Sílabas Simples.'
  },
  {
    title: 'Caderno das Vogais',
    description: 'Propostas para identificar, reconhecer e praticar as vogais.',
    cover: 'capas/caderno-das-vogais.svg',
    page: previewPages.vogais,
    alt: 'Página real do Caderno das Vogais.'
  },
  {
    title: 'Caderno de Coordenação Motora',
    description: '50 páginas de atividades para trabalhar movimentos e controle do traçado.',
    cover: 'capas/caderno-coordenacao-motora.svg',
    page: previewPages.coordenacao,
    alt: 'Página real do Caderno de Coordenação Motora.'
  }
];

function App() {
  return (
    <main>
      <div className="topbar">KIT ALFABETIZAÇÃO <span>•</span> MATERIAL DIGITAL PARA APOIAR A APRENDIZAGEM</div>

      <header className="hero section-wrap">
        <div className="hero-copy">
          <span className="eyebrow">PARA PROFESSORES, PAIS E REFORÇO ESCOLAR</span>
          <h1>Mais praticidade para ensinar. <em>Mais atividades para aprender.</em></h1>
          <p className="hero-subtitle">Tenha em um só kit atividades de vogais, sílabas simples e coordenação motora para apoiar a alfabetização das crianças em casa ou na sala de aula.</p>
          <div className="hero-tags">
            <span>3 cadernos digitais</span>
            <span>+150 atividades</span>
            <span>Pronto para imprimir</span>
          </div>
          <BuyButton />
          <small className="secure-note">Compra segura pela Hotmart • Acesso digital após a confirmação</small>
        </div>

        <div className="hero-visual" aria-label="Apresentação dos três cadernos com páginas reais dos materiais">
          <div className="hero-pages">
            <img className="hero-page page-one" src={previewPages.silabas} alt="Prévia real de atividade de sílabas simples." />
            <img className="hero-page page-two" src={previewPages.vogais} alt="Prévia real de atividade com vogais." />
            <img className="hero-page page-three" src={previewPages.coordenacao} alt="Prévia real de coordenação motora." />
          </div>
          <div className="hero-covers">
            <img className="hero-cover cover-one" src={asset('capas/caderno-silabas-simples.svg')} alt="Capa do Caderno de Sílabas Simples." />
            <img className="hero-cover cover-two" src={asset('capas/caderno-das-vogais.svg')} alt="Capa do Caderno das Vogais." />
            <img className="hero-cover cover-three" src={asset('capas/caderno-coordenacao-motora.svg')} alt="Capa do Caderno de Coordenação Motora." />
          </div>
          <div className="hero-stamp"><strong>+150</strong><span>ATIVIDADES</span></div>
        </div>
      </header>

      <section className="pain-section">
        <div className="section-wrap pain-inner">
          <span className="eyebrow">UMA ROTINA MAIS ORGANIZADA</span>
          <h2>Está procurando atividades para apoiar a alfabetização?</h2>
          <p>Reunir propostas diferentes, preparar atividades e encontrar materiais adequados pode tomar tempo. O Kit Alfabetização reúne três cadernos digitais em um só lugar para facilitar esse planejamento.</p>
        </div>
      </section>

      <section className="section-wrap products-section">
        <div className="section-heading">
          <span className="eyebrow">CONHEÇA O QUE VOCÊ VAI RECEBER</span>
          <h2>3 cadernos. Diferentes habilidades para trabalhar.</h2>
          <p>Veja as capas e confira páginas reais dos materiais incluídos no kit.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.title}>
              <div className="product-cover-wrap"><img className="product-cover" src={asset(product.cover)} alt={`Capa: ${product.title}.`} /></div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="preview-section">
        <div className="section-wrap">
          <div className="section-heading">
            <span className="eyebrow">MATERIAIS REAIS</span>
            <h2>Olhe por dentro antes de comprar</h2>
            <p>Estas são páginas dos próprios cadernos que fazem parte do kit.</p>
          </div>
          <div className="preview-grid">
            {products.map((product) => (
              <figure className="preview-card" key={product.title}>
                <img src={product.page} alt={product.alt} />
                <figcaption>{product.title}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section-wrap audience-section">
        <div className="section-heading">
          <span className="eyebrow">FEITO PARA ACOMPANHAR SUA ROTINA</span>
          <h2>Para usar em diferentes momentos de aprendizagem</h2>
        </div>
        <div className="audience-grid">
          <article><span className="audience-icon">01</span><h3>Professores</h3><p>Tenha atividades de apoio para complementar suas propostas em sala de aula.</p></article>
          <article><span className="audience-icon">02</span><h3>Pais e responsáveis</h3><p>Conte com materiais para propor momentos de aprendizagem e prática em casa.</p></article>
          <article><span className="audience-icon">03</span><h3>Reforço escolar</h3><p>Reúna atividades variadas para apoiar o acompanhamento das crianças.</p></article>
        </div>
      </section>

      <section className="bonus-section">
        <div className="section-wrap bonus-inner">
          <div className="bonus-copy">
            <span className="eyebrow">E TEM MAIS</span>
            <h2>Você também recebe um bônus especial!</h2>
            <p><strong>Livro de Colorir — Animais da Fazenda</strong>, um material digital extra para complementar o kit.</p>
          </div>
          <div className="bonus-art" aria-label="Livro de colorir Animais da Fazenda">
            <span aria-hidden="true">🐮 🐷 🐔</span>
            <strong>ANIMAIS DA FAZENDA</strong>
            <small>LIVRO DE COLORIR</small>
            <b>BÔNUS</b>
          </div>
        </div>
      </section>

      <section className="offer-section">
        <div className="section-wrap offer-card">
          <span className="eyebrow">KIT ALFABETIZAÇÃO COMPLETO</span>
          <h2>Leve os 3 cadernos + o livro bônus</h2>
          <ul className="offer-list">
            <li>✓ Caderno de Sílabas Simples</li>
            <li>✓ Caderno das Vogais</li>
            <li>✓ Caderno de Coordenação Motora</li>
            <li>✓ Livro de Colorir — Animais da Fazenda (bônus)</li>
          </ul>
          <div className="price-area">
            <span className="old-price">Valor dos materiais separados: <s>R$ 49,70</s></span>
            <div className="price">R$ 34,90</div>
            <strong className="saving">Você economiza R$ 14,80</strong>
          </div>
          <BuyButton />
          <small className="offer-note">Pagamento único • Checkout seguro pela Hotmart • Produto digital</small>
        </div>
      </section>

      <section className="trust-section section-wrap">
        <div><span>01</span><h3>Compra pela Hotmart</h3><p>O pagamento é realizado no ambiente seguro da plataforma.</p></div>
        <div><span>02</span><h3>Produto digital</h3><p>Você recebe as orientações de acesso após a confirmação da compra.</p></div>
        <div><span>03</span><h3>Pronto para imprimir</h3><p>Use os arquivos digitais para preparar suas atividades.</p></div>
      </section>

      <section className="final-cta">
        <div className="section-wrap">
          <span className="eyebrow">DÊ MAIS RECURSOS À SUA ROTINA</span>
          <h2>Tenha o Kit Alfabetização completo!</h2>
          <p>Três cadernos digitais e um livro de colorir bônus em uma única compra.</p>
          <BuyButton>QUERO GARANTIR MEU KIT</BuyButton>
          <small>Compra segura pela Hotmart</small>
        </div>
      </section>

      <footer><strong>ABC DO FUTURO DIGITAL</strong><span>Materiais pedagógicos digitais.</span></footer>
    </main>
  );
}

export default App;
