import Banner from './componentes/banner/Banner.jsx'
import Beneficios from './componentes/beneficios/Beneficios.jsx'
import Cabecalho from './componentes/cabecalho/Cabecalho.jsx'
import Campanhas from './componentes/campanhas/Campanhas.jsx'
import Chamada from './componentes/chamada/Chamada.jsx'
import Rodape from './componentes/rodape/Rodape.jsx'
import Sobre from './componentes/sobre/Sobre.jsx'
import Login from './componentes/login/login.jsx'
import Cadastro from './componentes/cadastro/Cadastro.jsx'

import { useState } from 'react'
import './App.css'

export default function App() {

  const [pagina, setPagina] = useState('inicio')

  if (pagina === 'entrar') {
    return <Login onNavigate={setPagina} />
  }

  if (pagina === 'cadastro') {
    return <Cadastro onNavigate={setPagina} />
  }

  return (
    <>
      <Cabecalho onNavigate={setPagina} />
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
