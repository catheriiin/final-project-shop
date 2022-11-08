import { useState } from "react";
import { useDispatch } from "react-redux";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";

function Product({product}) {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    return(
        <div className="product-div">
            <img className="product-img" src={`./img/${product.img}.jpg`} alt="product" width="200px" height="200px"/>
                <h2 className="product-name">{product.name}</h2>
            <div className="center-products">
                <div className="p-product-div">
                    <p className="p-product">$ {product.price}</p>
                </div>
                <div className="change-quantity-cart-div">
                <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                <button className="add-to-cart-btn" onClick={() => {dispatch(addItemToCart({product, quantity}))}}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product;