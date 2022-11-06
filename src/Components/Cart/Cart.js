import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice, getTotalItems } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import cart from '../../images/cart.png';
import '../../App.css';

function Cart() {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const totalItems = useSelector(getTotalItems);

    return(
        <div>
            <button className='view-cart-btn'>
          <span>{totalItems}</span>
      <img src={cart} alt="cart" width="50px" height="50px"/>
      </button>
      <h3>TOTAL: ${totalPrice} </h3>
      {cartItems.map((cartItem, index) => <CartItem cartItem={cartItem} key={index}/>)}
        </div>
    )
}

export default Cart;