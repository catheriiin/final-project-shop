import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice, getTotalItems } from "../../redux/cartSlice";
import CartItem from "./CartItem";
import '../../App.css';
import shoppingBag from '../../images/shopping-bag.png';

function Cart() {
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);
    const totalItems = useSelector(getTotalItems);
    const total = "Cart total: " + "$" + totalPrice;

    return(
        <div className="cart-hero">
            <div className="order-div">
                <div className="order-title-div">
                    <h5>PRODUCT</h5>
                    <h5>PRICE</h5>
                    <h5>QTTY</h5>
                    <h5>TOTAL</h5>
                </div>
                <div className="order-items-div">
                    {cartItems.map((cartItem, index) => <CartItem cartItem={cartItem} key={index}/>)}
                </div>
            </div>
            <div className="checkout-div">
                <div className="checkout-column">
                <h5 className="total-price">{totalPrice > 0 ? total : "Your cart is empty"} </h5>
                <h5>Items: {totalItems} </h5>
                <img src={shoppingBag} width="70px" alt="shopping"/>

                </div>
            </div>
        </div>
    )
}

export default Cart;