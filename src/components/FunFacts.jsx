import dahlia from "../images/about-icons/dahlia line art_A4.jpg"
import cdmx from "../images/about-icons/MexicoCity.png"
import taco from "../images/about-icons/taco.png"
import cappuccino from "../images/about-icons/cappuccino.png"
import cobaltBlue from "../images/about-icons/cobaltBlue.png"
import uniO from "../images/about-icons/uniO.png"

export default function FunFacts() {
    return (
        <div className = "p-4">
            <div className = "container">
                <div className = "row">
                    <div className = "col-12 col-md-5 gridBorderOne d-flex justify-content-center align-items-center">
                        <div>
                            <h4 className ="funFactHeadingOne">Find Me Exploring</h4>
                            <p className = "funFactSubHeadingOne"><em>Mexico City</em></p>
                            <img src = {cdmx} className = "cdmx"/>
                        </div>
                    </div>
                    <div className = "col-6 col-md-4 gridBorder d-flex pb-4 w-30 justify-content-center align-items-center">
                        <div className ="flipText m-0">
                            <h4 className = "funFactHeadingTwo" >Floral Obsession</h4>
                            <p className = "funFactSubHeadingTwo"><em>Dahlia</em></p>
                        </div>
                        <div>
                            <img src = {dahlia} className = "dahlia"/>
                        </div>
                    </div>
                    <div className = "col-6 col-md-3 gridBorderRight d-flex justify-content-center align-items-center">
                        <div>
                            <h4 className = "funFactHeadingThree">Catch Me Cheering On</h4>
                            <div className = "d-flex justify-content-around">
                                <p className = "funFactSubHeadingThree"><em>The Oregon Ducks</em></p>
                                <img src = {uniO} className = "cdmx"/>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
             <div className = "container">
                <div className = "row">
                <div className = "col-12 col-md-4 d-flex pb-4 w-30 justify-content-center gridBorderTwo align-items-center flex-column">
                        <div>
                            <img src = {taco} className = "dahlia"/>
                        </div>
                        <div className ="m-0">
                            <h4 className = "funFactHeadingOne">Ask Me About</h4>
                            <p className = "funFactSubHeadingOne"><em>Where to Eat Tacos</em></p>
                        </div>

                    </div>
                    <div className = " col-5 col-md-4 d-flex gridBorderBottom justify-content-center align-items-center gridBorderBottom">
                        <div className = "d-flex justify-content-center align-items-center">
                            <div>
                                <h4 className = "funFactHeadingTwo">Favorite Color</h4>
                                <p className = "funFactSubHeadingTwo"><em>Cobalt Blue</em></p>
                            </div>
                            <div>
                                <img src = {cobaltBlue} className = "cobaltBlue"/>
                            </div>

                        </div>

                    </div>
                    <div className = "col-7 col-md-4 d-flex justify-content-center align-items-center">
                        <div>
                            <h4 className = "funFactHeadingThree">Key to My Heart</h4>
                            <p className = "funFactSubHeadingThree"><em>Oat Milk Cappuccino</em></p>
                        </div>
                        <div>
                            <img src = {cappuccino} className = "cdmx"/>
                        </div>
                    </div>
                </div>
             </div>
        </div>

    )
}