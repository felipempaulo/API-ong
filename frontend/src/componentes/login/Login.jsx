
import './login.css'

export default function Login({ onNavigate }) {
  function handleSubmit(event) {
    event.preventDefault()
    alert('Login enviado! A integração com o backend será feita posteriormente.')
  }

  return (
    <main className="acesso-pagina">
      <section className="acesso-container">

        <div className="acesso-apresentacao">
          <a href="/" className="acesso-logo">
            <span>♥</span> Auxílio ONG
          </a>

          <div className="acesso-mensagem">
            <span>FAÇA PARTE DESSA CORRENTE</span>
            <h1>Pequenas atitudes podem transformar vidas.</h1>
            <p>
              Entre na sua conta e continue fazendo parte
              de uma rede que acredita na solidariedade.
            </p>
          </div>

          <div className="acesso-frase">
            <span>♥</span>
            <p>Juntos, podemos fazer a diferença!</p>
          </div>
        </div>

        <div className="acesso-formulario">
          <div className="formulario-cabecalho">
            <span>SEJA BEM-VINDO DE VOLTA</span>
            <h2>Entrar na sua conta</h2>
            <p>Preencha seus dados para continuar.</p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="campo">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                id="email"
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                placeholder="Digite sua senha"
                required
              />
            </div>

            <div className="formulario-opcoes">
              <label className="lembrar">
                <input type="checkbox" />
                Lembrar de mim
              </label>

              <a href="#recuperar">Esqueceu a senha?</a>
            </div>

            <button type="submit" className="botao-acesso">
              Entrar
            </button>

          </form>

          <div className="formulario-alternativa">
            <p>
              Ainda não tem uma conta?
            </p>

            <button
              type="button"
              className="link-acesso"
              onClick={() => onNavigate('cadastro')}
            >
              Criar minha conta
            </button>
          </div>

          <a href="/" className="voltar-inicio">
            ← Voltar para o início
          </a>
        </div>

      </section>
    </main>
  )
}


