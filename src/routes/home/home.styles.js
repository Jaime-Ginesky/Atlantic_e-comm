import styled from 'styled-components';

export const TopHeader=styled.div`
font-size: calc(3vw + .4em); 
 font-style:oblique;
 letter-spacing: 1.5rem;
 color: azure;
background: rgb(210,210,209);
background: radial-gradient(circle, rgba(210,210,209,1) 3%, rgba(16,4,22,1) 87%);
 padding: 30px;
 box-shadow: 2px 4px 15px #090702;
 display: flex;
 justify-content: center;
 flex: 1 1 auto;
`
export const MainHeader=styled.div`
display:flex;
flex: 1 1 auto;
justify-content: center;
position: relative;
font-weight: bold; 
font-size: calc(3vw + 1em); 
color: #4a454c;
text-transform: uppercase;
letter-spacing: 1.5rem;
background-color:#d2d2d1;
`