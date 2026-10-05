import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cabeçalho from "./components/Cabeçalho";
import TelaPrincipal from "./components/PaginaInicial";
import Login from "./components/Login";
import CadastrarUsuario from "./components/CadastrarUsuario";

function App() {
  return (
    <BrowserRouter>
      <Cabeçalho />
      <Routes>
        <Route path="/" element={<TelaPrincipal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<CadastrarUsuario />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
