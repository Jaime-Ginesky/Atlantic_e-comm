import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StyleSheetManager } from 'styled-components';
// import { Provider } from 'react-redux';
import { ProductsProvider } from './contexts/products.context';
import { CartProvider } from './contexts/cart.context';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Elements } from '@stripe/react-stripe-js';

import App from './App';
import { store } from './store/store';
// import { stripePromise } from './utils/stripe/stripe.utils';

import './index.scss';

import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <StyleSheetManager shouldForwardProp={() => true}>
    {/* <Provider store={store}> */}
     {/* <PersistGate loading={null} persistor={persistor}> */}
      <BrowserRouter>
       <ProductsProvider>
        <CartProvider>
       {/* <Elements stripe={stripePromise}> */}
        <App />
        {/* </Elements> */}
         </CartProvider>
        </ProductsProvider>
       </BrowserRouter>
      {/* </PersistGate> */}
     {/* </Provider>   */}
    </StyleSheetManager>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
