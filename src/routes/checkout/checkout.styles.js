 import styled from 'styled-components';

 export const CheckoutContainer = styled.div`
 width: 70%; 
 min-height: 90vh; 
 display: flex; 
 flex-direction: column; 
 align-items: center; 
 margin: 50px auto 0; 
 `; 
 
 export const CheckoutHeader = styled.div`
        width: 100%; 
        padding: 10px 0; 
        display: flex; 
        justify-content: space-around; 
        border-bottom: 1px solid darkgrey; 
        color: #FFF;
 `;

 export const CheckoutTotal = styled.span`
 margin-top: 30px; 
 margin-left: 0 auto; 
 font-size: calc(1.5vw + 1em); 
 color: #FFF;
 `;

 export const HeaderBlock = styled.div`
 font-size: 11px;
 text-transform: capitalize; 
 width: 23%; 
 &:last-child { 
     width: 8%; 
 `;


 
