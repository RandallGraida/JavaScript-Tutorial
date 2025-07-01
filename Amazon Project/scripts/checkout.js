import { cart, removeFromCart, cartQuantityCalculation , updateQuantity } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";
import { hello } from "https://unpkg.com/supersimpledev@1.0.1/hello.esm.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import { deliveryOptions } from "../data/deliveryOptions.js";

hello();

/* 
  * dayjs - comes from external library in checkout.html
*/
const today = dayjs();
const deliveryDate = today.add(7, 'days');

/* 
  .format - dayjs method
    * d - day
    * M - month
    * D - date
*/ 
console.log(deliveryDate.format('dddd, MMMM D'));

let cartSummaryHTML = '';

cart.forEach(cartItem => {
  const productId = cartItem.productId;

  let matchingProduct; 

  products.forEach(product => {
    if (product.id === productId){
      matchingProduct = product;
    }
  });

  const deliverOptionId = cartItem.deliveryOptionId;

  let deliveryOption;

  deliveryOptions.forEach(option => {
    if (option.id === deliverOptionId){
      deliveryOption = option;
    }
  });
  
  const today = dayjs();

  const deliveryDate = today.add(
    deliveryOption.deliveryDays,
    'days'
  );
  const dateString = deliveryDate.format(
    'dddd, MMMM D'
  );


  cartSummaryHTML += 
  `
    <div class="cart-item-container jsCartItemContainer-${productId}">
      <div class="delivery-date">
        Delivery date: ${dateString}
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            $${formatCurrency(matchingProduct.priceCents)}
          </div>
          <div class="product-quantity">
            <span>
              Quantity: <span class="quantity-label js-QuantityLabel-${matchingProduct.id}">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary jsCheckoutUpdate updateWhileEditing"
              data-product-id="${matchingProduct.id}">
              Update
            </span>
            <input class="quantityInput js-QuantityInput-${matchingProduct.id}">
            <span class="saveQuantityLink link-primary jsSaveLink" 
              data-product-id="${matchingProduct.id}"> 
              Save
            </span>
            <span class="delete-quantity-link link-primary jsDeleteLink"
              data-product-id="${matchingProduct.id}">
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          ${deliverOptionsHTML(matchingProduct, cartItem)}
        </div>
      </div>
    </div> 
  `;
});

function deliverOptionsHTML(matchingProduct, cartItem){
  let html = '';

  // Data from the delivery -> id, days, and price in delivery days
  deliveryOptions.forEach(deliveryOption => {
    const today = dayjs();

    const deliveryDate = today.add(
      deliveryOption.deliveryDays,
      'days'
    );

    const dateString = deliveryDate.format(
      'dddd, MMMM D'
    );

    // This is the delivery price (not the product price)
    const priceString = deliveryOption.priceCents === 0 
      ? 'FREE' 
      : `$${formatCurrency(deliveryOption.priceCents)} - `;

    const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

    html +=
    `
    <div class="delivery-option">
      <input type="radio"
        ${isChecked ? 'Checked' : ''}
        class="delivery-option-input"
        name="delivery-option-${matchingProduct.id}">
      <div>
        <div class="delivery-option-date">
          ${dateString}
        </div>
        <div class="delivery-option-price">
          ${priceString} - Shipping
        </div>
      </div>
    </div>
    `
  });

  return html;
}

document.querySelector('.jsOrderSummary')
  .innerHTML = cartSummaryHTML;

document.querySelectorAll('.jsCheckoutUpdate')
 .forEach(link => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;

      const container = document.querySelector(`.jsCartItemContainer-${productId}`);
      container.classList.add('isEditingQuantity');
    });
  });

document.querySelectorAll('.jsSaveLink')
  .forEach(link => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;

      const container = document.querySelector(`.jsCartItemContainer-${productId}`);
      container.classList.remove('isEditingQuantity');

      const quantityInput = document.querySelector(`.js-QuantityInput-${productId}`);
      const newQuantity = Number(quantityInput.value);

      updateQuantity(productId, newQuantity);

      const quantityLabel = document.querySelector(`.js-QuantityLabel-${productId}`);
      quantityLabel.innerHTML = newQuantity;

      // Update the checkout counter after saving new quantity
      checkoutCounter();
    });
  });

document.querySelectorAll('.jsDeleteLink')
  .forEach(link => {
    link.addEventListener('click', () => {
      const productId = link.dataset.productId;
      removeFromCart(productId);
      
      // Removes the whole container of the checkout product
      const container = document.querySelector(`.jsCartItemContainer-${productId}`);
      container.remove();

      checkoutCounter();
    });
  });

checkoutCounter();
function checkoutCounter(){
  cartQuantityCalculation('amazonCheckoutPage');
}
