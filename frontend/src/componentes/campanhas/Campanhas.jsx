import './campanhas.css'

const listaCampanhas = [
  {
    id: 1,
    categoria: 'Animais',
    titulo: 'Ajude os animais do abrigo!',
    descricao: 'Contribua para o cuidado, alimentação e tratamento dos nossos amiguinhos.',
    arrecadado: 3600,
    meta: 5000,
    imagem: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 2,
    categoria: 'Infância',
    titulo: 'Um futuro melhor para crianças',
    descricao: 'Ajude a oferecer educação, carinho e oportunidades para crianças.',
    arrecadado: 2250,
    meta: 5000,
    imagem: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=85'
  },
  {
    id: 3,
    categoria: 'Solidariedade',
    titulo: 'Aqueça quem precisa!',
    descricao: 'Doe cobertores e roupas para famílias em situação de vulnerabilidade.',
    arrecadado: 8000,
    meta: 10000,
    imagem: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=800&q=85'
  }
]

function Campanhas() {
  return (
    <section className="campanhas" id="campanhas">

      <div className="campanhas-titulo">
        <div>
          <span className="campanhas-subtitulo">Faça parte de uma mudança</span>
          <h2>Campanhas em destaque</h2>
        </div>

        <a href="#campanhas">
          Ver todas as campanhas →
        </a>
      </div>

      <div className="campanhas-lista">

        {listaCampanhas.map((campanha) => {
          const porcentagem = Math.min(
            (campanha.arrecadado / campanha.meta) * 100,
            100
          )

          return (
            <article className="campanha-card" key={campanha.id}>

              <div className="campanha-imagem">
                <img
                  src={campanha.imagem}
                  alt={campanha.titulo}
                />

                <span className="campanha-categoria">
                  {campanha.categoria}
                </span>
              </div>

              <div className="campanha-conteudo">

                <h3>{campanha.titulo}</h3>

                <p>{campanha.descricao}</p>

                <div className="campanha-progresso">
                  <div className="progresso-barra">
                    <div
                      className="progresso-preenchido"
                      style={{ width: `${porcentagem}%` }}
                    ></div>
                  </div>

                  <span>{Math.round(porcentagem)}%</span>
                </div>

                <div className="campanha-valores">
                  <span>
                    ♥ R$ {campanha.arrecadado.toLocaleString('pt-BR')}
                  </span>

                  <span>
                    Meta: R$ {campanha.meta.toLocaleString('pt-BR')}
                  </span>
                </div>

                <a href="#doar" className="campanha-botao">
                  ♥ Doar agora
                </a>

              </div>
            </article>
          )
        })}

      </div>

    </section>
  )
}

export default Campanhas