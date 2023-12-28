import CategoryMenuItem from '../category-menu-item/category-menu-item.component';
import { MenuContainer } from './category-menu.styles.js';

const categories = [
    {
      id: 1,
      title: "tables",
      imageUrl: "https://s.turbifycdn.com/aah/galafutonsandfurniture/6pc-jamestown-rustic-live-edge-dining-set-25.jpg",
      route: 'shop/tables'
    },
    {
      id: 2,
      title: "sofas",
      imageUrl: "https://cdn11.bigcommerce.com/s-hka5gs968s/images/stencil/200x60/products/77347/236439/EEI-3454-LBU_1___34715.1667221463.jpg",
      route: 'shop/sofas'
    },
    {
      id: 3,
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      route: 'shop/sneakers'
    },
    {
      id: 4,
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      route: 'shop/womens'
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      route: 'shop/mens'
    }
  ] 
const CategoryMenu = () => {
    
  return (
    <MenuContainer>
      {categories.map((category) => (
       <CategoryMenuItem key={category.id} category={category} />
       ))}
    </MenuContainer>
    )
}

export default CategoryMenu;