import "../css/header.css"
import { NavLink } from "react-router-dom"
import { House, ImageSquare, Barbell, Phone } from "phosphor-react"

function Header() {
    return(
        <div className="container">
            <div>
                <img src="../src/assets/logo.svg" className="headerLogo"/>
            </div>
            <div className="btnContainer">
                <div className="nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""} >
                        <button className="btnNav">
                            Accueil 
                            <House className="icon" />
                        </button>
                    </NavLink>
                </div>
                <div className="nav">
                    <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active-link" : ""} >
                        <button className="btnNav">
                            Portfolio
                            <ImageSquare className="icon" />
                        </button>
                    </NavLink>
                </div>
                <div className="nav">
                    <NavLink to="/competences" className={({ isActive }) => isActive ? "active-link" : ""} >
                        <button className="btnNav">
                            Compétences
                            <Barbell className="icon" />
                        </button>
                    </NavLink>
                </div>
                <div className="nav">
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""} >
                        <button className="btnNav">
                            Contact
                            <Phone className="icon" />
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header