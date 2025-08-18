import "../css/footer.css"
import { Scales, CaretDoubleUp } from "phosphor-react"


function Footer() {
    return(
        <div className="footer">
            <p className="footerTxt"><Scales size={25}/>Mentions légales</p>
            <img src="../src/assets/whiteLogo.svg" className="footerLogo"/>
            <p className="footerTxt">Haut de page<CaretDoubleUp size={25} /></p>
            <p className="cprTxt">© 2025 Alexis Traisnel</p>
        </div>
    )
}

export default Footer