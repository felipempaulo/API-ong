import './chamada.css'

function Chamada() {
  return (
    <section className="chamada">

      <div className="chamada-texto">
        <span className="chamada-coracao">♡</span>

        <div>
          <h2>Juntos, podemos ir ainda mais longe!</h2>
          <p>Faça parte dessa corrente do bem.</p>
        </div>
      </div>

      <a href="#campanhas" className="chamada-botao">
        Comece a doar agora →
      </a>

    </section>
  )
}

export default Chamada