import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ProductCard from '../../components/product-card/product-card.component';


import { selectCategoriesMap } from '../../store/categories/category.selector';
import { CategoryTitle, CategoryContainer } from './category.styles.js';


/* Category takes the category name from the url parameter, then pulls off the categories map
from the new selector that will transform the categories array and then it runs an effect that will update products
inside that this category uses which wil be an arrray */
const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);
   

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
    
    
    return (
       <Fragment>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
         <CategoryContainer>
            {products &&
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
    ))}
          </CategoryContainer>
        </Fragment>
    )
    }

export default Category;