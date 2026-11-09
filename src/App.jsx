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
    description: 'Propostas para reconhecer, combinar e praticar sílabas simples, apoiando o início da leitura e da escrita.',
    cover: 'capas/caderno-silabas-simples.svg',
    page: previewPages.silabas,
    alt: 'Página real do Caderno de Sílabas Simples.'
  },
  {
    title: 'Caderno das Vogais',
    description: 'Atividades para identificar, reconhecer e praticar as vogais por meio de diferentes propostas.',
    cover: 'capas/caderno-das-vogais.svg',
    page: previewPages.vogais,
    alt: 'Página real do Caderno das Vogais.'
  },
  {
    title: 'Caderno de Coordenação Motora',
    description: '50 páginas de atividades para estimular os movimentos, a coordenação motora e o controle do traçado.',
    cover: 'capas/caderno-coordenacao-motora.svg',
    page: previewPages.coordenacao,
    alt: 'Página real do Caderno de Coordenação Motora.'
  }
];

function App() {
  return (
    <main>
      <div className="topbar">ACESSO IMEDIATO <span>•</span> PAGAMENTO ÚNICO <span>•</span> 7 DIAS DE GARANTIA</div>

      <header className="hero section-wrap">
        <div className="hero-copy">
          <span className="eyebrow">PARA PROFESSORES, PAIS E REFORÇO ESCOLAR</span>
          <h1>Mais praticidade para alfabetizar. <em>Tudo em um só kit.</em></h1>
          <p className="hero-subtitle">Vogais, sílabas simples e coordenação motora. É só imprimir e aplicar!</p>
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

      <section className="section-wrap products-section">
        <div className="section-heading">
          <span className="eyebrow">CONHEÇA O QUE VOCÊ VAI RECEBER</span>
          <h2>3 cadernos para desenvolver diferentes habilidades.</h2>
          <p>Conheça a proposta de cada caderno e confira páginas reais dos materiais incluídos no kit.</p>
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
          <div className="preview-banner">
            <span>VEJA POR DENTRO DO MATERIAL</span>
            <strong>PÁGINAS REAIS DOS CADERNOS</strong>
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

      

      <section className="bonus-section">
        <div className="section-wrap bonus-inner">
          <div className="bonus-copy">
            <span className="eyebrow">BÔNUS ESPECIAL DO KIT</span>
            <h2>Aprender também pode ser divertido!</h2>
            <p>Além dos três cadernos, você recebe o <strong>Livro de Colorir — Animais da Fazenda</strong>, um material digital com <strong>25 páginas em PDF</strong>, pronto para imprimir e usar em casa ou na sala de aula.</p>
            <ul className="bonus-features">
              <li><strong>Modelo colorido:</strong> a criança observa uma referência visual.</li>
              <li><strong>Desenho para colorir:</strong> uma versão em preto e branco em cada página.</li>
              <li><strong>Nome do animal:</strong> para pintar, reconhecer e aprender.</li>
            </ul>
            <p className="bonus-footnote">Um bônus que une criatividade, estímulo visual e prática da coordenação motora.</p>
          </div>
          <div className="bonus-art" aria-label="Bônus: Livro de Colorir Animais da Fazenda com 25 páginas">
            <span className="bonus-animals" aria-hidden="true">🐮 🐷 🐔</span>
            <strong>ANIMAIS DA FAZENDA</strong>
            <small>LIVRO DE COLORIR • PDF</small>
            <div className="bonus-page-count"><b>25</b><span>PÁGINAS<br />PARA COLORIR</span></div>
            <b className="bonus-ribbon">BÔNUS</b>
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

      <section className="faq-section">
        <div className="section-wrap">
          <div className="section-heading">
            <span className="eyebrow">AINDA TEM DÚVIDAS?</span>
            <h2>Informações importantes antes de comprar</h2>
            <p>Veja como funciona o Kit Alfabetização.</p>
          </div>
          <div className="faq-list">
            <details>
              <summary>O material é físico ou digital?</summary>
              <p>O kit é digital. Você recebe os arquivos para acessar e imprimir, não é enviado nenhum produto físico.</p>
            </details>
            <details>
              <summary>Como recebo o material após a compra?</summary>
              <p>O acesso é disponibilizado digitalmente após a confirmação do pagamento, conforme as orientações enviadas pela Hotmart.</p>
            </details>
            <details>
              <summary>Posso imprimir as atividades?</summary>
              <p>Sim. Os cadernos são arquivos digitais prontos para imprimir, para que você possa preparar as atividades conforme sua necessidade.</p>
            </details>
            <details>
              <summary>Posso utilizar o material em casa ou na sala de aula?</summary>
              <p>O kit foi pensado para apoiar atividades de alfabetização em diferentes contextos, como em casa, na sala de aula e no reforço escolar.</p>
            </details>
            <details>
              <summary>Existe mensalidade?</summary>
              <p>Não. A oferta apresentada é de pagamento único, realizado no ambiente de checkout da Hotmart.</p>
            </details>
          </div>
        </div>
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
