import React from 'react'

export default function Cheesecake(props) {
    const [quantity, setQuantity] = useState(0);

    //Add Items To Cart (Increase Count)
    function addItem(){
        setQuantity(quantity < 10 ? quantity + 1 : quantity);
    }

    //Remove Items From Cart (Decrease Count)
    function removeItem(){
        setQuantity(quantity > 0 ? quantity - 1 : 0);
    }
    //Calculate Items Subtotal
    function itemTotal(props){
        setItemTotals(itemTotals = (quantity * props.price))
    }
    
    //Check for Duplicate Items in Array
    function checkForDuplicates(props){
      if(cart.length === 0){
        setCart(
          cart => [...cart, {"quantity": quantity, "key": props.tag, "name":props.title, "price":props.price, "img":props.img, "itemTotal": itemTotals}])
      }else{
        const duplicate = cart.some(cartItem => cartItem.name === props.title)
        if(duplicate === false){
          setCart(
            cart => [...cart, {"quantity": quantity, "key": props.tag, "name":props.title, "price":props.price, "img":props.img, "itemTotal": itemTotals}])
        } else{
            for(let i = 0; i < cart.length; i++) {
              if(cart[i].name === props.title){
                cart[i].price += props.price;
                cart[i].quantity += quantity;
                cart[i].itemTotal += (props.price * quantity);
              }
            }
            setCart(cart => [...cart]);
          }
      }
      }
    const handleCart = (props) => {
      return (
        itemTotal(props),
        checkForDuplicates(props),
        console.log(cart),
        setQtyTotal(totalQty => totalQty + quantity),
        handleShow()
    )}
    return(
        <div className="cheesecake">
          <img src={props.img} alt={props.alt}></img>
          <h3>{props.title}</h3>
          <span id="price">${props.price}</span>
          <div id="menuBTNS">
            <div id="quantity">
              <button id="remove" onClick={removeItem}>-</button>
              <input disabled id="qtyCount" value={quantity}></input>
              <button id="add" onClick={addItem}>+</button>
            </div>
            <div id="addToCartBTN">
              {quantity > 0 && 
                <button id="order" type="button" onClick={() => handleCart(props)}>Add to Cart</button>}
            </div>
          </div>
        </div>
        )};
