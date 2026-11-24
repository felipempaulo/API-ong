import './banner.css'

export default function Banner() {
  return (
    <section className="banner" id="inicio">

      <div className="banner-conteudo">

        <span className="banner-subtitulo">
          Juntos podemos fazer a diferença
        </span>

        <h1>
          Doe hoje,
          <br />
          <span>transforme vidas!</span>
        </h1>

        <p>
          Conectamos você a ONGs de confiança para facilitar
          as arrecadações de forma simples, segura e transparente.
        </p>

        <a href="#campanhas" className="banner-botao">
          ♥ Fazer uma doação
          <span>→</span>
        </a>

      </div>

      <div className="banner-imagem">
        <img
          src="https://images.unsplash.com/photo-1469571486292-0ba58a3f9b9e?auto=format&fit=crop&w=1200&q=85"
          alt="Mãos unidas em gesto de solidariedade"
        />
      </div>

    </section>
  )
}

