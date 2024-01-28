import styled from 'styled-components';

export const CheckoutItemContainer = styled.div` 
    width: 100%; 
    display: flex; 
    min-height: 100px; 
    border-bottom: 1px solid darkgrey; 
    padding: 20px 0; 
    font-size: 10px; 
    align-items: center; 
    `
    export const ImageContainer = styled.div` 
        width: 23%; 
        padding-right: 15px; 
        img 
        { width: 100%; 
            height: 100%;
         } 
        `
        export const BaseSpan = styled.span` 
            width: 23%; 
            color: #FFF;
        `
        export const Quantity = styled(BaseSpan)` 
            display: flex;
            color: #FFF;
            `
        export const Arrow = styled.div` 
                cursor: pointer; 
                color: #FFF;
            `
        export const Value = styled.span` 
                margin: 0 10px; 
                color: #FFF;
             `
        
       export const RemoveButton = styled.div` 
            padding-left: 12px; 
            cursor: pointer; 
            color: #FFF;
}`
