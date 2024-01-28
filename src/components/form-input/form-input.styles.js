import styled, { css } from 'styled-components';

const subColor = 'grey'; 
const mainColor = 'black'; 
const  shrinkLabelStyles = css` 
    top: -14px; 
    font-size: 12px; 
    color: ${mainColor}; 
    `
    
   
export const FormInputLabel = styled.label` 
        color: ${subColor}; 
        font-size: 8px; 
        font-weight: normal; 
        position: absolute; 
        pointer-events: none; 
        left: 5px; 
        top: 10px; 
        transition: 300ms ease all; 
        ${({ shrink }) => shrink && shrinkLabelStyles}; 
    `
       

        export const Input = styled.input` 
        background: none; 
        background-color: white; 
        color: $sub-color; 
        font-size: 14px; 
        padding: 10px 5px 10px 0px; 
        display: block; 
        width: 50%; 
        border: none; 
        border-radius: 0; 
        border-bottom: 1px solid $sub-color; 
        margin: 25px 0px; 
        
        &:focus { 
            outline: none; 
        }

        &:focus ~ ${FormInputLabel} { 
            @${shrinkLabelStyles}; 
        }
     `

        export const Group = styled.div` 
        position: relative; 
        margin: 40px 10px 0 10px; 
        
        input[type='password'] { letter-spacing: 0.3em; } 
        `