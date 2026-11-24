import './sobre.css'

function Sobre() {
  return (
    <section className="sobre" id="sobre">

      <div className="sobre-conteudo">
        <span className="sobre-subtitulo">Conheça nosso propósito</span>

        <h2>Sobre o Auxílio ONG</h2>

        <p>
          Somos uma plataforma que conecta pessoas solidárias a
          organizações que precisam de apoio.
        </p>

        <p>
          Aqui, cada contribuição pode ajudar a transformar histórias
          e construir um futuro melhor.
        </p>

        <a href="#contato" className="sobre-botao">
          Saiba mais →
        </a>
      </div>

      <div className="sobre-numeros">

        <div className="sobre-item">
          <span>♥</span>
          <h3>+10 mil</h3>
          <p>Doadores</p>
        </div>

        <div className="sobre-item">
          <span>♣</span>
          <h3>+200</h3>
          <p>ONGs parceiras</p>
        </div>

        <div className="sobre-item">
          <span>🤝</span>
          <h3>+1 milhão</h3>
          <p>Vidas impactadas</p>
        </div>

      </div>

    </section>
  )
}

export default Sobre