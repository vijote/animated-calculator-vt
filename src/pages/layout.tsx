import { Outlet, useLocation } from "react-router-dom"
import AnimLink from "../components/AnimLink"

function Layout() {
    const location = useLocation()
    return (
        <main>
            <nav className="header">
                <AnimLink className="header-title" to="/">Animated <br /> Calculator</AnimLink>
                <AnimLink hide={location.pathname === "/"} to="/addition">Sumar</AnimLink>
                <AnimLink hide={location.pathname === "/"} to="/substraction">Restar</AnimLink>
                <AnimLink hide={location.pathname === "/"} to="/multiplication">Multiplicar</AnimLink>
                <AnimLink hide={location.pathname === "/"} to="/division">Dividir</AnimLink>
            </nav>

            <Outlet />
        </main>
    )
}

export default Layout