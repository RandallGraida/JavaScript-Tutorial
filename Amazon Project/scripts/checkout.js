/*
* ASYNC 
* - makes a function return a promise
*
* AWAIT
* - pauses an async function until a Promise settles
*
* TRY
* - catches error before executing code
*   if there is error, will go straight to "catch"
*
*
*/
import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

// Load page
async function loadPage(){
    try {
      console.log('load page');

    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      loadCart(() => {
        resolve();
      })
    });
  } catch (error){ 
    console.log('Unexpected error. Please try again later');
  }
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();