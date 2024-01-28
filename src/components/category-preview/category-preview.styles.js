import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const CpContainer = styled.div` 
    display: flex; 
    flex-direction: column; 
    margin: 20px 20px 30px 20px;
    background-color: #d3c9c9; 
   `;
    
export const Title = styled(Link)`
        font-size: 20px; 
        margin: 25px; 
        cursor: pointer; 
    `;
    
export const Preview = styled.div` 
        display: grid; 
        grid-template-columns: repeat(4, 1fr); 
        column-gap: 20px; 
    `;
