import { useDispatch } from "react-redux";
import productsdata from "../../data/productsdata";
import { removeItemFromCart } from "../../redux/cartSlice";
import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";


function CartItem({cartItem}) {
    const products = productsdata.find(item => item.id === cartItem.productId)
    const dispatch = useDispatch();
    const cartItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice);

    return(
        <div className="cart-item-div">
            <div className="order-div-column-img">
                      <p>{cartItem.order}</p>  <img src={`./img/${products.img}.jpg`} alt="products" width="150px" height="150px"/>
            </div>
            <div className="order-div-column-text">

          
            <p>{products.name}</p>
           <p>{cartItem.quantity} piece(s)</p>
           <p>Price: ${products.price * cartItem.quantity}</p>
           </div>
           <span onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>
           <img className="icon" src="https://img.icons8.com/material-outlined/48/000000/trash--v1.png"/> 
           </span>

        </div>
    )
}

export default CartItem;