import { Outlet } from 'react-router-dom'

import CategoryMenu from '../../components/category-menu/category-menu.component';
import { MainHeader, TopHeader } from './home.styles';



const Home = () => { 
    return (
    <div>
      <MainHeader>ATLANTIC</MainHeader>
      <TopHeader>FURNISHING</TopHeader>
      <CategoryMenu />
      <Outlet />
    </div>
    )
    
        }

        export default Home;