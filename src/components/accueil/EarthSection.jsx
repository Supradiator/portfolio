import "../../css/accueil/EarthSection.css" 
import { Link } from "react-router-dom"

function EarthSection() {
    return (

        <div className="earthContainer">
            <h1 className="earthTitle">Développeur frontend / Intégrateur web</h1>
            <model-viewer
                src="/src/assets/earth.glb"
                alt="Terre 3D"
                auto-rotate
                auto-rotate-delay="0"
                rotation-per-second="10deg"
                camera-controls
                disable-zoom
                disable-tap
                style={{ width: "800px", height: "800px" }}
                interaction-prompt="none"
            />
            <Link to="/contact">
                <button className="contactBtn">Me contacter</button>
            </Link>
        </div>

    )
}

export default EarthSection