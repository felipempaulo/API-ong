import './cabecalho.css'

export default function Cabecalho() {
  return (
    <header className="cabecalho">
      <div className="cabecalho-container">

        <a href="#inicio" className="logo">
          <span className="logo-icon">♥</span>
          <span>Auxílio <strong>ONG</strong></span>
        </a>

        <nav className="menu">
          <a href="#inicio" className="menu-ativo">Início</a>
          <a href="#campanhas">Campanhas</a>
          <a href="#sobre">Sobre</a>
          <a href="#contato">Contato</a>
        </nav>

        <a href="#login" className="botao-login">
          Entrar / Cadastrar
        </a>

      </div>
    </header>
  )
}

