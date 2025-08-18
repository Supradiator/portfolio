import "../../css/accueil/EarthSection.css" 

function EarthSection() {
    return (

        <div className="earthContainer">
            <h1 className="earthTitle">Développeur frontend / Intégrateur web</h1>
            <model-viewer
                src="/src/assets/earth.glb"
                alt="Terre 3D"
                auto-rotate
                camera-controls
                style={{ width: "800px", height: "800px" }}
                min-camera-orbit="auto auto 5m"
                max-camera-orbit="auto auto 5m"
                min-field-of-view="30deg"
                max-field-of-view="30deg"
                interaction-prompt="none"
            />
        </div>

    )
}

export default EarthSection