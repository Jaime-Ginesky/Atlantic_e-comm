import { Outlet } from 'react-router-dom'

import CategoryMenu from '../../components/category-menu/category-menu.component';
import { TopHeader } from './home.styles';



const Home = () => { 
    return (
    <div>
      <TopHeader>ATLANTIC FURNISHING</TopHeader>
      <CategoryMenu />
      <Outlet />
    </div>
    )
    
        }

        export default Home;