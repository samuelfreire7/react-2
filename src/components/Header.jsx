import { Link } from "react-router-dom";
import "./Header.css"


function Header() {
    return (

        <header>
            <nav>
                <Link to="/">Inicio</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contato">Contato</Link>
                <Link to="/produtos">Produtos</Link>
                <Link to="/perfil">Perfil</Link>
            </nav>
        </header>
    );
};

export default Header;