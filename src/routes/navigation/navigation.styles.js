import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavigationContainer = styled.div`
 height: 70px; 
 width: 100%; 
 display: flex; 
 justify-content: space-between; 
 background: rgb(206,206,206);
 background: radial-gradient(circle, rgba(206,206,206,1) 1%, rgba(4,1,6,1) 91%);
`
;

export const LogoContainer = styled(Link)`
 height: 100%; 
 width: 70px; 
 padding: 25px; 
`
;

export const NavLinksContainer = styled.div`
    width: 100%; 
    height: 100%; 
    display: flex; 
    align-items: center; 
    justify-content: flex-end;
`
;

export const NavLinks = styled.div`
 padding: 10px 10px; 
 cursor: pointer; 
`
;

export const NavLink = styled(Link)`
  padding: 10px 10px;
  cursor:pointer;
  color: #FFF;
  font-size: calc(.5vw + .2em);
`;
  
