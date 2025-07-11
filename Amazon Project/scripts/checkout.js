import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";

/*
  async - makes a function return a promise
*/
async function loadPage(){
  // Catches error before executing the code
    try {
      // If there is error it will go straight to 'catch'
      // throw 'error 1';
      console.log('load page');

    // await - shortcut for '.then', can only be used inside a function
    await loadProductsFetch();

    const value = await new Promise((resolve, reject) => {
      // If there is error it will go straight to 'catch'
      //throw 'error2';
      loadCart(() => {
        // reject - is a function, creates a error handler in the future
        // reject('error3');
        resolve();
      })
    });
    // Catches error in the 'try', and run the code inside catch
  } catch (error){ 
    console.log('Unexpected error. Please try again later');
  }
    renderOrderSummary();
    renderPaymentSummary();
}
loadPage();

/*
  * resolve();
    * is a function, lets us control when to go to the next step
    * lets us know if the task is done
  * .then - step after the resolve
*/
/*
Promise.all([
  loadProductsFetch(), 
  new Promise(resolve => {
    loadCart(() => {
      resolve();
    });
  })
]).then(() => {
    renderOrderSummary();
    renderPaymentSummary();
});
*/

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