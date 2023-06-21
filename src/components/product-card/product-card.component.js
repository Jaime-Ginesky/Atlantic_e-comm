import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { ProductCardContainer } from './product-card.styles.js';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

const ProductCard = ({ product }) => {

    const { name, price, imageUrl } = product;
    const { addItemToCart } = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product);

    return (
      <ProductCardContainer>
        <img src={imageUrl} alt={`${name}`}/>
        <footer>
            <span>{name}</span>
            <span>{price}</span>
        </footer>
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>
            Add to cart</Button>
    </ProductCardContainer>
)};

export default ProductCard;