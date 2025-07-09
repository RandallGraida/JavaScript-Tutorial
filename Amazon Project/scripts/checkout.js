import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";

/*
  * resolve();
    * is a function, lets us control when to go to the next step
    * lets us know if the task is done
  * .then - step after the resolve
*/

Promise.all([
  new Promise((resolve) => {
    console.log('start promise');
    loadProducts(() => {
      console.log('finished loading')
      resolve();
    });
  }), 
  new Promise(resolve => {
    loadCart(() => {
      resolve();
    });
  })
]).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});

/*
new Promise((resolve) => {
  console.log('start promise');
  loadProducts(() => {
    console.log('finished loading')
    resolve('value1');
  });
}).then((value) => {
    return new Promise(resolve => {
      loadCart(() => {
        resolve();
      });
    });
}).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/

/*
loadProducts(() => {
  loadCart(() => {
    renderOrderSummary();
    renderPaymentSummary();
  });
});
*/