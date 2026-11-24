import './beneficios.css'

const beneficios = [
  {
    icone: '🛡️',
    titulo: 'Doação segura',
    descricao: 'Seus dados protegidos'
  },
  {
    icone: '👁️',
    titulo: 'Transparência',
    descricao: 'Acompanhe o impacto'
  },
  {
    icone: '🤝',
    titulo: 'Diversas ONGs',
    descricao: 'Escolha onde ajudar'
  },
  {
    icone: '⚡',
    titulo: 'Facilidade',
    descricao: 'Doe em poucos cliques'
  }
]

export default function Beneficios() {
  return (
    <section className="beneficios">

      {beneficios.map((beneficio, index) => (
        <div className="beneficio-card" key={index}>
          <span className="beneficio-icone">
            {beneficio.icone}
          </span>

          <h3>{beneficio.titulo}</h3>

          <p>{beneficio.descricao}</p>
        </div>
      ))}

    </section>
  )
}

