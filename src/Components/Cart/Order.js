import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import cart from '../../images/cart.png';
import '../../App.css';

function Order() {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div>
            
            <h3>TOTAL: ${totalPrice} </h3>
            {cartItems.map((cartItem, index) => <CartItem cartItem={cartItem} key={index}/>)}
            
        </div>
    )
}

export default Order;