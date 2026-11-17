import React, { useState } from 'react';
import { previewPages } from './previewPages';

const checkoutUrl = 'https://pay.hotmart.com/G108080766B?checkoutMode=10&bid=1792293294853';
const asset = (path) => import.meta.env.BASE_URL + path;

function BuyButton({ children = 'QUERO COMPRAR MEU KIT', className = '' }) {
  return (
    <a className={['buy-button', className].filter(Boolean).join(' ')} href={checkoutUrl} target="_blank" rel="noreferrer">
      {children}<span aria-hidden="true"> →</span>
    </a>
  );
}

const products = [
  {
    number: '01',
    title: 'Caderno de Sílabas Simples',
    description: 'Atividades para reconhecer, formar e praticar sílabas simples, apoiando o início da leitura e da escrita.',
    cover: 'capas/caderno-silabas-simples.svg'
  },
  {
    number: '02',
    title: 'Caderno das Vogais',
    description: 'Atividades para identificar, reconhecer, traçar e praticar as vogais de diferentes maneiras.',
    cover: 'capas/caderno-das-vogais.svg'
  },
  {
    number: '03',
    title: 'Caderno de Coordenação Motora',
    description: '50 páginas para estimular os movimentos, a coordenação motora e o controle do traçado.',
    cover: 'capas/caderno-coordenacao-motora.svg'
  }
];

const slides = [
  {
    title: 'Caderno de Sílabas Simples',
    description: 'Veja uma amostra das atividades para trabalhar a leitura e a formação de palavras.',
    image: previewPages.silabas,
    alt: 'Prévia de uma atividade do Caderno de Sílabas Simples.'
  },
  {
    title: 'Caderno das Vogais',
    description: 'Veja uma amostra das atividades para identificar e praticar as vogais.',
    image: previewPages.vogais,
    alt: 'Prévia de uma atividade do Caderno das Vogais.'
  },
  {
    title: 'Caderno de Coordenação Motora',
    description: 'Veja uma amostra das atividades para praticar traçados e movimentos.',
    image: previewPages.coordenacao,
    alt: 'Prévia de uma atividade do Caderno de Coordenação Motora.'
  }
];

function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = slides[activeSlide];
  const showPrevious = () => setActiveSlide((index) => (index - 1 + slides.length) % slides.length);
  const showNext = () => setActiveSlide((index) => (index + 1) % slides.length);

  return (
    <main>
      <header className="site-header">
        <div className="site-header-inner">
          <a className="brand" href="#inicio" aria-label="ABC do Futuro Digital — início">
            <span className="brand-mark" aria-hidden="true">ABC</span>
            <span>ABC DO FUTURO DIGITAL</span>
          </a>
          <nav className="main-nav" aria-label="Navegação principal">
            <a href="#receba">O que vem no kit</a>
            <a href="#previas">Veja as páginas</a>
            <a href="#duvidas">Dúvidas</a>
          </nav>
          <BuyButton className="header-buy">COMPRAR POR R$ 29,90</BuyButton>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-inner section-wrap">
          <div className="hero-copy">
            <span className="eyebrow">KIT DIGITAL DE ATIVIDADES PARA ALFABETIZAÇÃO</span>
            <h1>Atividades prontas para <em>alfabetizar</em> sem começar do zero.</h1>
            <p className="hero-subtitle">
              Trabalhe vogais, sílabas simples e coordenação motora com três cadernos digitais
              e um livro de colorir bônus. É só acessar, imprimir e utilizar.
            </p>
            <div className="hero-points">
              <span><b aria-hidden="true">✓</b> 3 cadernos em PDF</span>
              <span><b aria-hidden="true">✓</b> Livro de colorir bônus</span>
              <span><b aria-hidden="true">✓</b> Pronto para imprimir</span>
            </div>
            <div className="hero-price">
              <span>Kit completo por</span>
              <strong>R$ 29,90</strong>
              <small>Pagamento único</small>
            </div>
            <BuyButton>QUERO GARANTIR MEU KIT</BuyButton>
            <small className="hero-note">Compra realizada com segurança no checkout da Hotmart.</small>
          </div>
          <div className="hero-visual">
            <img
              className="hero-children"
              src={asset('hero/children-learning.svg')}
              alt="Um menino e uma menina sentados à mesa, cobrindo as vogais A e E em folhas de atividades."
            />
            <div className="hero-caption">
              <span>Material digital</span>
              <strong>Para usar em casa ou na sala de aula</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="receive-section section-wrap" id="receba">
        <div className="section-heading">
          <span className="eyebrow">TUDO O QUE ESTÁ INCLUÍDO</span>
          <h2>O que você vai receber</h2>
          <p>Três cadernos de atividades e um livro de colorir bônus em uma única compra.</p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article className="product-card" key={product.number}>
              <div className="product-number">{product.number}</div>
              <div className="product-cover-wrap">
                <img className="product-cover" src={asset(product.cover)} alt={'Capa ilustrativa do ' + product.title + '.'} />
              </div>
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <span className="product-format">ARQUIVO PDF • PRONTO PARA IMPRIMIR</span>
            </article>
          ))}
        </div>
        <article className="bonus-card">
          <div className="bonus-icon" aria-hidden="true">★</div>
          <div className="bonus-card-copy">
            <span className="bonus-label">VOCÊ TAMBÉM RECEBE DE BÔNUS</span>
            <h3>Livro de Colorir — Animais da Fazenda</h3>
            <p>25 páginas em PDF com modelos coloridos e desenhos para pintar.</p>
          </div>
          <div className="bonus-page-count"><strong>25</strong><span>PÁGINAS<br />DE COLORIR</span></div>
        </article>
      </section>

      <section className="preview-section" id="previas">
        <div className="section-wrap">
          <div className="section-heading">
            <span className="eyebrow">CONFIRA O CONTEÚDO ANTES DE COMPRAR</span>
            <h2>Veja por dentro dos cadernos</h2>
            <p>Use as setas para visualizar uma página de cada material.</p>
          </div>
          <div className="carousel">
            <button className="carousel-arrow" type="button" onClick={showPrevious} aria-label="Ver página anterior">‹</button>
            <div className="carousel-slide" aria-live="polite">
              <div className="carousel-image-wrap">
                <img src={currentSlide.image} alt={currentSlide.alt} />
              </div>
              <div className="carousel-copy">
                <span className="carousel-count">{String(activeSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
                <h3>{currentSlide.title}</h3>
                <p>{currentSlide.description}</p>
                <BuyButton>QUERO RECEBER OS CADERNOS</BuyButton>
              </div>
            </div>
            <button className="carousel-arrow" type="button" onClick={showNext} aria-label="Ver próxima página">›</button>
          </div>
          <div className="carousel-dots" role="group" aria-label="Selecionar caderno">
            {slides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                className={index === activeSlide ? 'carousel-dot active' : 'carousel-dot'}
                onClick={() => setActiveSlide(index)}
                aria-label={'Mostrar ' + slide.title}
                aria-pressed={index === activeSlide}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="offer-section" id="oferta">
        <div className="offer-card section-wrap">
          <div className="offer-heading">
            <span className="eyebrow">GARANTA O SEU KIT</span>
            <h2>Os 3 cadernos + o livro bônus por R$ 29,90</h2>
            <p>Uma única compra para receber todos os materiais digitais descritos nesta página.</p>
          </div>
          <div className="offer-content">
            <ul className="offer-list">
              <li><span>✓</span> Caderno de Sílabas Simples</li>
              <li><span>✓</span> Caderno das Vogais</li>
              <li><span>✓</span> Caderno de Coordenação Motora — 50 páginas</li>
              <li><span>✓</span> Livro de Colorir — Animais da Fazenda — 25 páginas (bônus)</li>
            </ul>
            <div className="price-panel">
              <span className="old-price">Valor dos materiais separados: <s>R$ 49,70</s></span>
              <span className="price-label">Você paga uma única vez</span>
              <strong className="price">R$ 29,90</strong>
              <span className="saving">Economize R$ 19,80</span>
              <BuyButton>COMPRAR MEU KIT AGORA</BuyButton>
              <small>Pagamento único • Checkout seguro pela Hotmart • Produto digital</small>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section" id="duvidas">
        <div className="section-wrap">
          <div className="section-heading">
            <span className="eyebrow">COMPRE COM TRANQUILIDADE</span>
            <h2>Perguntas frequentes</h2>
            <p>Veja as respostas antes de finalizar sua compra.</p>
          </div>
          <div className="faq-list">
            <details>
              <summary>O material é físico ou digital?</summary>
              <p>O kit é digital. Você recebe os arquivos para acessar e imprimir; nenhum produto físico é enviado.</p>
            </details>
            <details>
              <summary>Como recebo o material após a compra?</summary>
              <p>O acesso é disponibilizado digitalmente após a confirmação do pagamento, conforme as orientações enviadas pela Hotmart.</p>
            </details>
            <details>
              <summary>Posso imprimir as atividades?</summary>
              <p>Sim. Os cadernos são arquivos PDF prontos para imprimir e utilizar conforme a sua necessidade.</p>
            </details>
            <details>
              <summary>Para quem o kit é indicado?</summary>
              <p>O kit foi pensado para apoiar crianças em fase de alfabetização, em atividades feitas em casa, na sala de aula ou no reforço escolar.</p>
            </details>
            <details>
              <summary>Existe mensalidade?</summary>
              <p>Não. A oferta é de pagamento único, realizado no ambiente de checkout da Hotmart.</p>
            </details>
            <details>
              <summary>Tenho garantia?</summary>
              <p>A oferta informa 7 dias de garantia. Confira as condições apresentadas no checkout da Hotmart no momento da compra.</p>
            </details>
          </div>
          <div className="faq-cta">
            <p>Pronto para receber seus materiais?</p>
            <BuyButton>SIM, QUERO MEU KIT POR R$ 29,90</BuyButton>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <strong>ABC DO FUTURO DIGITAL</strong>
        <span>Materiais pedagógicos digitais.</span>
      </footer>
    </main>
  );
}

export default App;
