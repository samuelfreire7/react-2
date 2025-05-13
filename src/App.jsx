import Layout from "./components/Layout"
import Inicio from "./pages/Inicio"
import Sobre from "./pages/Sobre"
import Contato from "./pages/Contato"
import Produtos from "./pages/Produtos"
import Perfil from "./pages/Perfil"

import { BrowserRouter, Routes, Route } from "react-router-dom"



function App() {


  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Inicio />} />
          <Route path="Sobre" element={<Sobre />} />
          <Route path="Contato" element={<Contato />} />
          <Route path="Produtos" element={<Produtos />} />
          <Route path="Perfil" element={<Perfil />} />
        </Route>
      </Routes>
    </BrowserRouter>



  );
};

export default App
