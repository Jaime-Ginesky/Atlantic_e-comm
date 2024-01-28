import styled from 'styled-components';
import Button from '../button/button.component';

export const PaymentFormContainer = styled.div`
   height: 300px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   `;

export const FormContainer = styled.form`
   height: 100px;
   min-width: 15em;
   color: #FFF;
   border: 1px solid darkgrey;
   padding: 10px;
`;

export const PaymentButton = styled(Button)`
margin-left: auto;
margin-top: 30px;
`;