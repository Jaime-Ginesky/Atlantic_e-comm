import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';


import { ReactComponent as ShoppingIcon } from '../../assets/bag-shopping.svg';
import { CartIconContainer, ItemCount } from './cart-icon.styles';


const CartIcon = () => {
    // const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
    const dispatch = useDispatch();
   
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);
   

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
   

    return(
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;