import Inicio from "./pages/Inicio";
import Layout from "./components/Layout";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Produtos from "./pages/Produtos"
import Perfil from "./pages/Perfil"
import { Routes, Route } from "react-router-dom";


export default function RouterPages() {

    return (

        <Routes>
            <Route path="/" element={<Layout />} />
                <Route index path="/" element={<Inicio />} />
                <Route path="Sobre" element={<Sobre />} />
                <Route path="Contato" element={<Contato />} />
                <Route path="Produtos" element={<Produtos />} />
                <Route path="Perfil" element={<Perfil />} />
        </Routes>

    );
};



