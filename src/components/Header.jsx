import "../css/header.css"
import { NavLink } from "react-router-dom"
import { House, ImageSquare, Barbell, Phone } from "phosphor-react";

function Header() {
    return(
        <div className="container">
            <div>
                <img src="../src/assets/logo.svg"/>
            </div>
            <div className="btnContainer">
                <div className="nav">
                    <NavLink to="/" className={({ isActive }) => isActive ? "active-link" : ""} >
                        <button>
                            Accueil 
                            <House className="icon" />
                        </button>
                    </NavLink>
                </div>
                <div className="nav">
                    <NavLink to="/portfolio" className={({ isActive }) => isActive ? "active-link" : ""} >
                        <button>
                            Portfolio
                            <ImageSquare className="icon" />
                        </button>
                    </NavLink>
                </div>
                <div className="nav">
                    <NavLink to="/competences" className={({ isActive }) => isActive ? "active-link" : ""} >
                        <button>
                            Compétences
                            <Barbell className="icon" />
                        </button>
                    </NavLink>
                </div>
                <div className="nav">
                    <NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""} >
                        <button>
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