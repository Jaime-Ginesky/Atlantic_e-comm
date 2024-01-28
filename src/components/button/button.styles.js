import styled from 'styled-components';

import { SpinnerContainer } from '../spinner/spinner.styles';



export const BaseButton = styled.button`
    min-width: 90px; 
    width: auto; 
    height: 30px; 
    letter-spacing: 0.5px; 
    line-height: 10px; 
    padding: 0 35px 0 35px; 
    font-size: 6px; 
    background-color: black; 
    color: white; 
    text-transform: uppercase; 
    font-family: 'Open Sans Condensed'; 
    font-weight: bolder; 
    cursor: pointer; 
    display: flex; 
    border:1px solid #FFF;

    justify-content: center; 
    align-items: center;
    
    &:hover { 
        background-color: white; 
        color: black; 
        border: 1px solid black; 
    } 
    `;
    
    export const GoogleSignInButton = styled(BaseButton)`
        background-color: #4285f4; 
        color: white; 
        width: 90px;
       

        
        &:hover { 
            background-color: #357ae8; 
            border: none;
         }
         `;

    export const InvertedButton = styled(BaseButton)`
       background-color: white; 
        color: black; 
        border: 1px solid black; 
    
        
        &:hover { 
            background-color: black; 
            color: white; 
            border: none; 
        }
    ` ;   

    export const ButtonSpinner = styled(SpinnerContainer)`
       width: 30px;
       height: 30px;
    `
    ;
