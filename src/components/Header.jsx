import "../css/header.css"
import { House, ImageSquare, Barbell, Phone } from "phosphor-react";

function Header() {
    return(
        <div className="container">
            <div>
                <img src="../src/assets/logo.svg"/>
            </div>
            <div className="btnContainer">
                <div className="nav">
                    <button>
                        Accueil 
                        <House className="house icon" />
                    </button>
                </div>
                <div className="nav">
                    <button>
                        Portfolio
                        <ImageSquare className="pics icon" />
                    </button>
                </div>
                <div className="nav">
                    <button>
                        Compétences
                        <Barbell className="barbell icon" />
                    </button>
                </div>
                <div className="nav">
                    <button>
                        Contact
                        <Phone className="phone icon" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Header