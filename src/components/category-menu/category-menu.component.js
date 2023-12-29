import CategoryMenuItem from '../category-menu-item/category-menu-item.component';
import { MenuContainer } from './category-menu.styles.js';

const categories = [
    {
      id: 1,
      title: "tables",
      imageUrl: "https://media1.popsugar-assets.com/files/thumbor/sdy1jyWxM2zK0Pg3_Z5AKvckAWE/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2022/03/07/839/n/1922794/7d7c4de9a62a4fc0_netimgxXFyEm/i/best-dining-room-tables-west-elm.jpg",
      route: 'shop/tables'
    },
    {
      id: 2,
      title: "sofas",
      imageUrl: "https://assets.wfcdn.com/im/66646708/resize-h445%5Ecompr-r85/1933/193351987/Gaige+Twin+78.5%27%27+Upholstered+Convertible+Sofa.jpg",
      route: 'shop/sofas'
    },
    {
      id: 3,
      title: "chairs",
      imageUrl: "https://assets.wfcdn.com/im/64603900/resize-h445%5Ecompr-r85/2619/261930261/Hendrix+Upholstered+Barrel+Chair.jpg",
      route: 'shop/chairs'
    },
    {
      id: 4,
      title: "lighting",
      imageUrl: "https://assets.wfcdn.com/im/92918753/resize-h445%5Ecompr-r85/1414/141404443/Asawer+19+-+Light+Dimmable+Geometric+Chandelier.jpg",
      route: 'shop/lighting'
    },
    {
      id: 5,
      title: "beds",
      imageUrl: "https://cdn-images.article.com/products/SKU11569/2890x1500/image88587.jpg?w=2740&q=60&fm=webp&fit=max",
      route: 'shop/beds'
    },
    {
    id: 6,
      title: "clothing storage",
      imageUrl: "https://assets.wfcdn.com/im/32829236/resize-h445%5Ecompr-r85/2620/262083463/Keaster+6+-+Drawer+Accent+Chest.jpg",
      route: 'shop/clothing-storage'
  },
  {
    id: 7,
      title: "coffee tables",
      imageUrl: "https://assets.wfcdn.com/im/41548312/resize-h445%5Ecompr-r85/1565/156578785/Anara+Coffee+Table.jpg",
      route: 'shop/coffee-tables'
  },
  {
    id: 8,
      title: "desks",
      imageUrl: "https://img5.su-cdn.com/cdn-cgi/image/width=600,height=600,format=webp/mall/file/2023/05/10/0fa681e8d644f523da43bfebf1d41edf.jpg",
      route: 'shop/desks'
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