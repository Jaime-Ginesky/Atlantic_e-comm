import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const NavigationContainer = styled.div`
 height: 70px; 
 width: 100%; 
 display: flex; 
 justify-content: space-between; 
background: #552532;
background: linear-gradient(90deg, #552532, #E3E863);
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
  color: #5F3336;
  font-size: calc(.5vw + .2em);
`;
  
