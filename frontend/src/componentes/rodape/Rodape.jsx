import './rodape.css'

export default function Rodape() {
  return (
    <footer className="rodape" id="contato">

      <div className="rodape-container">

        <div className="rodape-topo">

          <a href="#inicio" className="rodape-logo">
            <span>♥</span>
            Auxílio ONG
          </a>

          <nav className="rodape-links">
            <a href="#inicio">Início</a>
            <a href="#campanhas">Campanhas</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="rodape-social">
            <a href="#" aria-label="Instagram">◎</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="mailto:contato@auxilioong.com" aria-label="Email">✉</a>
          </div>

        </div>

        <div className="rodape-final">
          <p>© 2026 Auxílio ONG. Todos os direitos reservados.</p>
          <p>Doe. Ajude. Transforme. ♥</p>
        </div>

      </div>

    </footer>
  )
}

