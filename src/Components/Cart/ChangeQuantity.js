const ChangeQuantity = ({quantity, setQuantity}) => {

    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
    }

    const removeQuantity = () => {
        if (quantity <= 1) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity);
    }
    return(
        <div className="change-div">
            <button className="add" onClick={addQuantity}>+</button>
          <p className="change-quantity">{quantity}</p>
          <button className="reduce" onClick={removeQuantity}>-</button>
        </div>
    )
}

export default ChangeQuantity;