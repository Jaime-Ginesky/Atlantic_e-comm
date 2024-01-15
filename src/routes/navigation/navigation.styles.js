import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavigationContainer = styled.div`
 height: 70px; 
 width: 100%; 
 display: flex; 
 justify-content: space-between; 
 margin-bottom: 30px; 
//  background: rgb(240,105,50);
//  background: radial-gradient(circle, rgba(240,105,50,1) 6%, rgba(9,7,2,1) 76%);
 background: rgb(210,210,209);
background: radial-gradient(circle, rgba(210,210,209,1) 3%, rgba(16,4,22,1) 87%);
`
;

export const LogoContainer = styled(Link)`
 height: 100%; 
 width: 70px; 
 padding: 25px; 
`
;

export const NavLinksContainer = styled.div`
    width: 50%; 
    height: 100%; 
    display: flex; 
    align-items: center; 
    justify-content: flex-end;
`
;

export const NavLinks = styled.div`
 padding: 10px 15px; 
 cursor: pointer; 
`
;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor:pointer;
  color: #FFF;
`;
  
/* .navigation { 
    
    .logo-container { 
        height: 100%; 
        width: 70px; 
        padding: 25px; 
    } 
    
    .nav-links-container { 
        width: 50%; 
        height: 100%; 
        display: flex; 
        align-items: center; 
        justify-content: flex-end;
        
        .nav-link { 
            padding: 10px 15px; 
            cursor: pointer; 
        } 
    } 
} */