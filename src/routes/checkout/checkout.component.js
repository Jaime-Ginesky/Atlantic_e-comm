import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CheckoutContainer, CheckoutHeader, HeaderBlock, CheckoutTotal } from "./checkout.styles";



const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    
    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>    
                    <span> Description  </span>
                </HeaderBlock>
                <HeaderBlock>
                    <span> Quantity  </span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
               
                {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
             <CheckoutTotal>Total: ${cartTotal}</CheckoutTotal>
        </CheckoutContainer>
      /*   <div className="checkout-container">
            <div className="checkout-header">
                <div className="header-block">
                   <span>Product</span>
                </div>
                <div className="header-block">
                   <span>Descritption</span> 
                </div>
                <div className="header-block">
                   <span>Quantity</span>
                </div>
                <div className="header-block">
                   <span>Price</span>  
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            
              {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
          <span className="Total">Total: ${cartTotal}</span>
        </div> */
    )};


export default Checkout;