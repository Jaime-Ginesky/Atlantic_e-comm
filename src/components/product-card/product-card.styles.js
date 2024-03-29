import styled from 'styled-components';

export const ProductCardContainer = styled.div` 
    width: 80%; 
    padding: 0;
    margin: 100px 10px;
    display: flex; 
    flex-direction: column; 
    gap: 10px;
    height: auto; 
    align-items: center; 
    position: relative; 
    background: #d3c9c9;
    
    
    img { 
        width: 100%; 
        height: 95%; 
        object-fit: cover; 
        margin-bottom: 5px; 
    } 
    
    button { 
        width: 80%; 
        opacity: 0.7; 
        position: absolute; 
        top: 140px; 
        display: none; 
    } 
    
    &:hover { 
        img { 
            opacity: 0.8; 
        } 
        button { 
            opacity: 0.85; 
            display: flex; 
        } 
    } `;
    
export const Footer = styled.div` 
        width: 100%; 
        height: 5%; 
        display: flex; 
        justify-content: space-between; 
        font-size: 8px;
        color: #FFF;
        `;
  
export const Name = styled.span` 
            width: 90%; 
            margin-bottom: 15px; 
            color: #FFF;
        `;

export const Price = styled.span`
   width: 10%; 
   color: #FFF;
`;