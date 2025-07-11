import { cart, cartQuantityCalculation } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { getDeliveryOption } from "../../data/deliveryOptions.js";
import { formatCurrency } from "../utils/money.js";
import { addOrder, orders } from "../../data/orders.js";

export function renderPaymentSummary(){
  let productPriceCents = 0;
  let shippingPriceCents = 0;

  cart.forEach(cartItem => {
    const product = getProduct(cartItem.productId);
    productPriceCents += product.priceCents * cartItem.quantity;

   const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
   shippingPriceCents += deliveryOption.priceCents;
  });

  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents;

  const paymentSummaryHTML = `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div class="js-paymentItemCount"></div>
      <div class="payment-summary-money">$${formatCurrency(productPriceCents)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">$${formatCurrency(shippingPriceCents)}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">$${formatCurrency(totalBeforeTaxCents)}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">$${formatCurrency(taxCents)}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">$${formatCurrency(totalCents)}</div>
    </div>

    <button class="place-order-button button-primary js-placeOrder">
      Place your order
    </button>
  `;

  document.querySelector('.js-paymentSummary')
    .innerHTML = paymentSummaryHTML;

  /*
    GET - get something from the backend
    POST - create, send data from the backend
    PUT - update 
    DELETE - delete 
  */
  document.querySelector('.js-placeOrder')
    .addEventListener('click', async () => {
      try {
        const response = await fetch('https://supersimplebackend.dev/orders', {
        method: 'POST',
        // headers - gives the backend more information about the request
        headers: {
          'Content-Type': 'application/json'
        },
        // body - actual data to send to the backend
        body: JSON.stringify({
          cart: cart
        })
      });
      // Waits for the response to finish first
      const order = await response.json();
      addOrder(order);
      } catch (error){
        console.log('Unexpected error, try again later.')
      }

      // window.location - is a object, controls the URL in the browser
      window.location.href = 'orders.html';
    });

  itemCount();
  function itemCount(){
    cartQuantityCalculation('paymentSummary');
  }
}

