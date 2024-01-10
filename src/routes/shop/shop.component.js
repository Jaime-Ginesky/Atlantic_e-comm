// import { useEffect } from 'react';
import { useContext } from 'react';

// import { Route, Routes } from 'react-router-dom'
// import { useDispatch } from 'react-redux';
import ProductCard from '../../components/product-card/product-card.component';
import { ProductsContext } from '../../contexts/products.context';
// import CategoriesPreview from '../categories-preview/categories-preview.component';
// import Category from '../category/category.component';
// import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
// import { setCategories } from '../../store/categories/category.reducer';


const Shop = () => {
  const { products } = useContext(ProductsContext);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //    const getCategoriesMap = async () => {
  //     const categoriesArray = await getCategoriesAndDocuments('categories');
  //       dispatch(setCategories(categoriesArray));
  //   };

  //   getCategoriesMap();
  // },[]);

  return (
    <div className ='products-container'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
      };
//     <Routes>
//       <Route index element={<CategoriesPreview />} />
//       <Route path=':category' element={<Category />} />
//     </Routes>
//  );
// };

export default Shop;