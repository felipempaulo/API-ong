import Banner from './componentes/banner/Banner.jsx'
import Beneficios from './componentes/beneficios/Beneficios.jsx'
import Cabecalho from './componentes/cabecalho/Cabecalho.jsx'
import Campanhas from './componentes/campanhas/Campanhas.jsx'
import Chamada from './componentes/chamada/Chamada.jsx'
import Rodape from './componentes/rodape/Rodape.jsx'
import Sobre from './componentes/sobre/Sobre.jsx'

import './App.css'

export default function App() {
  return (
    <>
      <Cabecalho />
      <main>
        <Banner />
        <Beneficios />
        <Campanhas />
        <Sobre />
        <Chamada />
      </main>
      <Rodape />
    </>
  )
};
