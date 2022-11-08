import { useDispatch } from "react-redux";
import productsdata from "../../data/productsdata";
import { removeItemFromCart } from "../../redux/cartSlice";

function CartItem({cartItem}) {
    const products = productsdata.find(item => item.id === cartItem.productId)
    const dispatch = useDispatch();

    return(
        <div className="cart-item-div">
            <div className="order-div-column-img">
                <div>
                    <span className="delete-icon" onClick={() => dispatch(removeItemFromCart({cartItemId: cartItem.id}))}>X</span>
                </div>
                    <p>{cartItem.order}</p><img className="order-product-img" src={`./img/${products.img}.jpg`} alt="products" width="150px" height="150px"/>
                    <p className="order-text-deco">{products.name}</p>
            </div>
            <div className="order-div-details-text">
                <p className="order-text-deco">${products.price}</p>
                <p className="order-text-deco">{cartItem.quantity} piece(s)</p>
                <p className="order-text-deco">${products.price * cartItem.quantity}</p>
            </div>  
        </div>
    )
}

export default CartItem;