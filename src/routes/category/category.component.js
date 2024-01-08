import { useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SHOP_DATA from '../../shop-data.js';
import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/category.selector';

import { CategoryTitle, CategoryContainer } from './category.styles.js';
import { addCollectionAndDocuments } from '../../utils/firebase/firebase.utils';

/* Category takes the category name from the url parameter, then pulls off the categories map
from the new selector that will transform the categories array and then it runs an effect that will update products
inside that this category uses which wil be an arrray */
const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);
    const [products, setProducts] = useState([]);
   

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
    
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // }, []);
    return (
       <Fragment>
        <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
        {isLoading ? (
            <Spinner />
        ) : (
         <CategoryContainer>
            {products &&
                products.map((product) => (
                    <ProductCard key={product.id} product={product} />
    ))}
          </CategoryContainer>
        )}
        </Fragment>
    )
    }

export default Category;