import { useState } from "react"
import { sliderdata } from "../../../data/sliderdata"

function AboutSlider() {
    const [service, setService] = useState(0);
    const {id, image, description} = sliderdata[service];

    const previousService = () => {
        setService((service => {
            service--;
            if(service < 0) {
                return sliderdata.length - 1;
            }
            return service;
        }))
    }

    const nextService = () => {
        setService((service => {
            service++;
            if(service > sliderdata.length - 1) {
                service = 0;
            }
            return service;
        }))
    }
    return(
        <div className='slider-div'>
            <div className="button-div">
                <button className="slider-btn" onClick={previousService}>{"<"}</button>
            </div>
            <div className="slider-box">
            <img className="slider-img" src={image} alt="service" width="400px" height="550px"/>
            <h5>{id} - {description}</h5>
            </div>
            <div  className="button-div">
                <button className="slider-btn" onClick={nextService}>{">"}</button>
            </div>
        </div>
    )
}

export default AboutSlider;