import "../../css/accueil/portfolioSection.css" 
import { useState } from "react"
import kasa from "../../assets/present_pics/kasa.webp"
import booki from "../../assets/present_pics/booki.webP"
import ohmyfood from "../../assets/present_pics/ohmyfood.webp"
import { CaretLeft, CaretRight } from "phosphor-react"
import ghost1 from "../../assets/ghost/ghost1.webp"
import ghost2 from "../../assets/ghost/ghost2.webp"
import { Link } from "react-router-dom"

function PortfolioSection(){

    const images = [kasa, booki, ohmyfood]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [ghostRotation, setGhostRotation] = useState(0) // rotation des fantômes

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length)
        setGhostRotation((prev) => prev - 90) // rotation de 90° à chaque clic
    }
    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
        setGhostRotation((prev) => prev + 90)
    }

    return(
        <div className="carouselContainer">
            <h1 className="portfolioTitle">Portfolio</h1>
            <div className="carouselPortfolio">

                {images.map((img, index) => {
                    let className = "slide"

                    if (index === currentIndex) className += " active"
                    else if (index === (currentIndex + 1) % images.length) className += " next"
                    else if (index === (currentIndex - 1 + images.length) % images.length) className += " prev"

                    return (
                        <>
                            <img key={index} src={img} className={className} />

                            {index === currentIndex && (
                                <div
                                    className="ghostOrbit"
                                    style={{ transform: `translate(50%, 50%) rotate(${ghostRotation}deg)` }}
                                >
                                    <img src={ghost2} className="ghost ghost1" style={{ top: "200px", left: "200px" }} alt="fantome 1" />
                                    <img src={ghost1} className="ghost ghost2" style={{ bottom: "250px", right: "200px" }} alt="fantome 2" />
                                </div>
                            )}
                            
                        </>
                    )
                })}
                <Link to={"/portfolio"} className="portfolioBtn">Voir mon portfolio</Link>

                <CaretLeft size={60} className="arrow left" onClick={prevSlide} />
                <CaretRight size={60} className="arrow right" onClick={nextSlide} />

            </div>
        </div>
    )
}

export default PortfolioSection
