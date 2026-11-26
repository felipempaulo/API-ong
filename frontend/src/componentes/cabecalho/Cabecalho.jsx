import './cabecalho.css'

export default function Cabecalho({ onNavigate }) {
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

         <div className="botoes-acesso">
        <button className="botao-login" onClick={() => onNavigate('entrar')}>
        Entrar
        </button>

        <button className="botao-login" onClick={() => onNavigate('cadastro')}>
        Cadastrar
        </button>
        </div>

      </div>
    </header>
  )
}

