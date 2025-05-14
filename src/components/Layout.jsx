import Header from "./Header";
import Footer from "./Footer";
import RouterPages from "../RouterPages";
import { BrowserRouter } from "react-router-dom";

export default function Layout() {
    return (
        <BrowserRouter>
            <Header />


            <RouterPages />


            <Footer />
        </BrowserRouter>

    );
};