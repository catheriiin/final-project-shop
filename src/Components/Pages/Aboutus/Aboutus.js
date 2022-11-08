import aboutCake from '../../../images/cake.png'; 
import aboutPiones from '../../../images/piones.png';
import aboutBaloon from '../../../images/love-baloon.png';
import aboutSideFlowers from '../../../images/piones-side.png';
import aboutBride from '../../../images/bride.jpg';
import aboutWedding from '../../../images/wedding.jpg';
import aboutCatering from '../../../images/catering.jpg';
import aboutRosesServices from '../../../images/roses-services.jpg';
import aboutVenueDecoServices from '../../../images/venue-deco.jpg';
import aboutcakeBakeryServices from '../../../images/cake-bakery.jpg';
import aboutEventsDecoServices from '../../../images/events-decor.jpg';
import aboutWhiteFlowers from '../../../images/white-flowers.png';
import aboutWhiteFlowersRight from '../../../images/white-flowers-right.png';
import bottomFlower from '../../../images/piones-one.png';
import phoneIcon from '../../../images/phone-call.png';
import AboutSlider from './AboutSlider';
import '../../../App.css';
import '../../../Media.css';

function Aboutus() {
    return(
        <div>
            <div className="hero-div">
                <div className='hero-left-div'>
                    <img className='about-hero-img-cake' src={aboutCake} alt="cakes" width="450px"/>
                </div>
                <div className='hero-column'>
                    <img className='about-hero-img' src={aboutBaloon} alt="baloons" width="350px"/>
                    <h1 className='h1-deco'>Beautiful flowers <br></br> and decorations <br></br>for your special <br></br>occasion</h1>
                    <a href='/shop'><button className='shop-btn'>Shop now</button></a>
                </div>
                <div className='hero-right-div'>
                    <img className='about-hero-img' src={aboutPiones} alt="piones" width="450px" />
                </div>
            </div>
            <div className='title-div'>
                <h2>About us</h2>
            </div>
            <div className='about-us-div'>
                <div className='about-disc'>
                    <p className='about-us-p borders'>We have been working since 2020 and have achieved great success in a short period of time. We sell bouquets, balloons and decorations for your special occasion: birthday, engagement, anniversary, wedding and other events. Our clients value us for quality and efficiency, as well as for affordable price and high aesthetics.</p>
                    <div className='about-us-center-div'>
                        <h3 className='choose'>Why choose us?</h3>
                        <p className='about-us-choose-p'>We have decorated over 1000 events. Our pastry chefs have baked over 500 birthday and wedding cakes. Our balloons decorated important events. Check out the photos to see our happy customers and their special events.</p>
                    </div>
                </div>
                <div className='about-img-div'>
                    <img className='flowers-img' src={aboutSideFlowers} alt="flowers" width="400px"/>
                </div>
            </div>
            <div className='img-div'>
                <img className='wedding-img' src={aboutBride} alt="bride" width="400px"/>
                <img className='wedding-img' src={aboutWedding} alt="wedding" width="400px"/>
                <img className='wedding-img' src={aboutCatering} alt="catering" width="400px"/>
            </div>
            <div className='slider-container'>
                <img className='img-slider-side' src={aboutWhiteFlowers} alt="flowers" width="400px"/>
                <AboutSlider/>
                <img className='img-slider-side' src={aboutWhiteFlowersRight} alt="flowers" width="400px"/>
            </div>

            <div className='title-div'>
                <h3>Services</h3>
            </div>
            <div className='services-div'>
                <div className='service-box'> 
                    <h4>Flowers delivery</h4>
                <div className='service-box-deco'>
                    <img className='img-services' src={aboutRosesServices} alt="roses" width="200px" height="290px"/>
                    <p className='services-p'>Pick your order at the shop or arrange a delivery service</p>
                </div>
            </div>

            <div className='service-box'> 
                <h4>Venue decoration</h4>
                <div className='service-box-deco'>
                    <img className='img-services' src={aboutVenueDecoServices} alt="venue" width="200px" height="290px"/>
                    <p className='services-p'>Our qualified decorators will help you make your event brighter</p>
                </div>
            </div>

            <div className='service-box'> 
                <h4>Cakes bakery</h4>
                <div className='service-box-deco'>
                    <img className='img-services' src={aboutcakeBakeryServices} alt="cake" width="200px" height="290px"/>
                    <p className='services-p'>Our magnificent pastry chefs will bake any cake you want</p>
                </div>
            </div>

            <div className='service-box'> 
                <h4>Events decor shop</h4>
                <div className='service-box-deco'>
                    <img className='img-services' src={aboutEventsDecoServices} alt="events" width="200px" height="290px"/>
                    <p className='services-p'>You can shoose any decor to style your special event by yourself</p>
                </div>
            </div>
            </div> 
            <div className='bottom-div'>
                <div className='column-div'>
                    <h2 className='h2-size'>Interested?</h2>
                    <p className='bottom-p'>Shop now or call us<br></br>for a consultation</p>
                    <a href='/shop'><button className='shop-now-btn'>Shop now</button></a>
                    <div className='a-img-div'>
                        <img src={phoneIcon} alt="phone" width="30px"/>
                    <a className='call-us-a' href='tel:+79012342342'>Call us</a>
                    </div>
                </div>
                <div className='img-div'>
                    <img className='bottom-img' src={bottomFlower} alt="rose" width="500px"/>
                </div>
            </div>
    </div>
    )
}

export default Aboutus;

