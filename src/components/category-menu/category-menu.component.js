import CategoryMenuItem from '../category-menu-item/category-menu-item.component';
import {MenuContainer } from './category-menu.styles.js';

const CategoryMenu = ({ categories }) => {
    
    return (
        <MenuContainer>
      {categories.map((category) => (
       <CategoryMenuItem key={category.id} category={category} />
       ))}
    </MenuContainer>
    )
}

export default CategoryMenu;