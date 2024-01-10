// import { useDispatch, useSelector } from 'react-redux';

// import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
// import { setIsCartOpen } from '../../store/cart/cart.action';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context.js';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartIconContainer, ItemCount } from './cart-icon.styles';


const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    // const dispatch = useDispatch();
   
    // const isCartOpen = useSelector(selectIsCartOpen);
    // const cartCount = useSelector(selectCartCount);
   

    // const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;