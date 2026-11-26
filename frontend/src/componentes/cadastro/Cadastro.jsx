
import './cadastro.css'

export default function Cadastro({ onNavigate }) {
  function handleSubmit(event) {
    event.preventDefault()

    const senha = event.target.senha.value
    const confirmarSenha = event.target.confirmarSenha.value

    if (senha !== confirmarSenha) {
      alert('As senhas não são iguais!')
      return
    }

    alert('Cadastro enviado! A integração com o backend será feita posteriormente.')
  }

  return (
    <main className="cadastro-pagina">
      <section className="cadastro-container">

        <div className="cadastro-apresentacao">

          <a href="/" className="cadastro-logo">
            <span>♥</span> Auxílio ONG
          </a>

          <div className="cadastro-mensagem">
            <span>FAÇA PARTE DESSA HISTÓRIA</span>

            <h1>O mundo precisa de pessoas como você.</h1>

            <p>
              Cadastre-se gratuitamente e encontre novas
              maneiras de ajudar quem mais precisa.
            </p>
          </div>

          <div className="cadastro-frase">
            ♥ Cada gesto de solidariedade importa.
          </div>

        </div>

        <div className="cadastro-formulario">

          <div className="cadastro-cabecalho">
            <span>COMECE SUA JORNADA</span>
            <h2>Criar uma conta</h2>
            <p>Preencha os campos abaixo para se cadastrar.</p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="campo-cadastro">
              <label htmlFor="nome">Nome completo</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Digite seu nome completo"
                required
              />
            </div>

            <div className="campo-cadastro">
              <label htmlFor="email-cadastro">E-mail</label>
              <input
                type="email"
                id="email-cadastro"
                name="email"
                placeholder="Digite seu e-mail"
                required
              />
            </div>

            <div className="campo-cadastro">
              <label htmlFor="senha-cadastro">Senha</label>
              <input
                type="password"
                id="senha-cadastro"
                name="senha"
                placeholder="Crie uma senha"
                minLength={6}
                required
              />
            </div>

            <div className="campo-cadastro">
              <label htmlFor="confirmar-senha">Confirmar senha</label>
              <input
                type="password"
                id="confirmar-senha"
                name="confirmarSenha"
                placeholder="Digite sua senha novamente"
                minLength={6}
                required
              />
            </div>

            <div className="campo-cadastro">
              <label htmlFor="tipo-usuario">Quero participar como:</label>

              <select
                id="tipo-usuario"
                name="tipoUsuario"
                required
                defaultValue=""
              >
                <option value="" disabled>Selecione uma opção</option>
                <option value="doador">Doador</option>
                <option value="voluntario">Voluntário</option>
              </select>
            </div>

            <label className="termos-cadastro">
              <input type="checkbox" required />
              <span>
                Concordo com os termos de uso e a política de privacidade.
              </span>
            </label>

            <button type="submit" className="botao-cadastro">
              Criar minha conta
            </button>

          </form>

          <div className="cadastro-alternativa">
            <p>Já possui uma conta?</p>

            <button
              type="button"
              onClick={() => onNavigate('entrar')}
            >
              Fazer login
            </button>
          </div>

          <a href="/" className="cadastro-voltar">
            ← Voltar para o início
          </a>

        </div>

      </section>
    </main>
  )
}


