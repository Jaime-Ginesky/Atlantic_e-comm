import { useState } from 'react';

import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from 'react-redux';

import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector'; 

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { PaymentFormContainer, FormContainer, PaymentButton } from "./payment-form.styles";

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const amount = useSelector(selectCartTotal);
    const currentUser = useSelector(selectCurrentUser);
    const [isProccessingPayment, setIsProccessingPayment] = useState(false);
    
    const paymentHandler = async (e) =>
        e.preventDefault();

        if(!stripe || !elements) {
            return;
        }

        setIsProccessingPayment(false);

        const response = await fetch('/.netlify/functions/create-payment-intentt', {
            method: 'post',
            headers: {
                'Content-Type': 'apllication/json'
            },
            body: JSON.stringify({ amount: amount * 100 })
        }).then(res => res.json());
        const {paymentIntent: { client_secret }} = response;

        const paymentResult = await stripe.confirmCardPayment(client_secret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: currentUser ? currentUser.displayName : 'Guest',

                }
            }
        })

        if(paymentResult.error) {
            alert(paymentResult.error);
        } else {
            if(paymentResult.paymentIntent.Status === 'succeeded') {
                alert('PaymentSuccessful');
            }
        }
    };
    
    
    return (
     <PaymentFormContainer>
        <FormContainer onSubmit={paymentHandler}>
            <h2>Credit Card Payment: </h2>
            <CardElement />
            <PaymentButton 
            disabled={isProccessingPayment} 
            buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</PaymentButton>
        </FormContainer>
     </PaymentFormContainer>
    );

      


export default PaymentForm;