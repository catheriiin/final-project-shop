import deliveryTruck from '../../images/delivery.png'
import flowers from '../../images/flowers.png'

function Contacts() {
    return(
        <div>
        <div className="center">
            <div className='column-contacts-div'>
                <div className='subcolumn'>
                <h2>Contact us to make an order</h2>
                <a className='contacts-a lobster' href="tel:+1565498767">+1565498767</a>
                <a className='contacts-a' href="mailto:happydayshop@support.com">happydayshop@support.com</a>
             
                    <h3>Working hours</h3>
                    <p className='working-hours'>Monday-Thursday 10AM - 08PM</p>
                    <p className='working-hours'>Friday-Sunday 09AM - 10PM</p>
                
                    <div className="h4-img">
                    <h4 className="h4-contacts">Free delivery for all online <br></br> purchases in the downtown</h4>
                    <img src={deliveryTruck} alt="delivery" width="75px" height="75px"/>
                    </div>
                    <p className='info-p'>If a purchase is less than $50, delivery<br></br> cost starts from $10</p>
                </div>
            </div>

            <div className='column-contacts-div'>
                <img src={flowers} alt="flowers" width="500px"/>
            </div>
        </div>
        <div className='bottom-quote-div'>
             <p className='bottom-quote-p'>Enjoy your day with Happy Day Shop</p>
        </div>
        </div>
    )
}

export default Contacts;

