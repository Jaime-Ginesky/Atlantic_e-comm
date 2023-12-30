import styled from 'styled-components';

export const BackgroundImage = styled.div`  
   width: 100%; 
   height: 100%; 
   background-size: cover; 
   background-position: center;
   background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`


export const Body = styled.div`   
   height: 70px; 
   padding: 0 0px; 
   border-radius:20px;
   display: flex; 
   flex-direction: column; 
   align-items: center; 
   justify-content: center; 
   border: 1px solid black; 
   background-color: #CA7433; 
   opacity: 0.7; 
   position: absolute; 


h2 { 
   font-weight: bold; 
   margin: 8px 8px 0; 
   font-size: 16px; 
   color: #4a4a4a; 
   text-transform: uppercase;
}

p { 
   font-weight: lighter; 
   font-size: 16px; 
}
`
export const CategoryMenuItemContainer = styled.div` 
   min-width: 30%; 
   height: 240px; 
   flex: 1 1 auto; 
   display: flex; 
   align-items: flex-end; 
   justify-content: flex-start; 
   border: 1px solid black; 
   margin: 0 4px 7px; 
   overflow: hidden; 
   
  
    &:hover {
      cursor: pointer;
  
      ${BackgroundImage} {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }
  
      ${Body} {
        opacity: 0.9;
      }
    }
    &:first-child {
      margin-right: 7.5px;
   }
   &:last-child {
      margin-left: 7.5px;
    }
  `;
