import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import "./checkout.styles.scss";
import CartItem from "../../components/cart-item/cart-item.component";


const Checkout = () => {
    const { cartItems, addItemToCart, removeItemFromCart } = useContext(CartContext);
    
    return (
        <div>
            <h1>I am the checkout page</h1>
              {cartItems.map((CartItem) => {
                const { id, name, quantity } = CartItem;
                return (
                <div key={id}>
                <h2>{name}</h2>
                <span>{quantity}</span>
                <br />
                <span onClick={() => removeItemFromCart(CartItem)}>decrement</span>
                <br />
                <span onClick={() => addItemToCart(CartItem)}>increment</span>
              </div>
            );
        })}
        </div>
    )};


export default Checkout;