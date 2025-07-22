/**
 * dayjs()
 * - library, allows dates
 */
import { cart, removeFromCart, cartQuantityCalculation , updateQuantity, updateDeliveryOption } from "../../data/cart.js";
import { getProduct } from "../../data/products.js";
import { formatCurrency } from "../utils/money.js";
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js";
import { deliveryOptions, getDeliveryOption } from "../../data/deliveryOptions.js";
import { renderPaymentSummary } from "./paymentSummary.js";
import { calculateDeliveryDate } from "../../data/deliveryOptions.js";

// Render order summary
export function renderOrderSummary(){
  let cartSummaryHTML = '';

  cart.forEach(cartItem => {
    const productId = cartItem.productId;

    const matchingProduct = getProduct(productId);

    const deliveryOptionId = cartItem.deliveryOptionId;

    const deliveryOption = getDeliveryOption(deliveryOptionId);

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
              ${matchingProduct.getPrice()}
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

  // Render delivery options
  function deliverOptionsHTML(matchingProduct, cartItem){
    let html = '';

    deliveryOptions.forEach(deliveryOption => {

      const dateString = calculateDeliveryDate(deliveryOption);

      // This is the delivery price (not the product price)
      const priceString = deliveryOption.priceCents === 0 
        ? 'FREE' 
        : `$${formatCurrency(deliveryOption.priceCents)}`;

      const isChecked = deliveryOption.id === cartItem.deliveryOptionId;

      html +=
      `
      <div class="delivery-option js-DeliveryOption"
        data-product-id="${matchingProduct.id}"
        data-delivery-option-id="${deliveryOption.id}">
        <input type="radio"
          ${isChecked ? 'checked' : ''}
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
      `;
    });

    return html;
  }

  // Render order summary
  document.querySelector('.jsOrderSummary')
    .innerHTML = cartSummaryHTML;

  // Update product
  document.querySelectorAll('.jsCheckoutUpdate')
  .forEach(link => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;

        const container = document.querySelector(`.jsCartItemContainer-${productId}`);
        container.classList.add('isEditingQuantity');
      });
    });

  // Save updated product 
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
        renderPaymentSummary();
      });
    });

  // Remove product
  document.querySelectorAll('.jsDeleteLink')
    .forEach(link => {
      link.addEventListener('click', () => {
        const productId = link.dataset.productId;
        removeFromCart(productId);
        
        // Removes the whole container of the checkout product
        const container = document.querySelector(`.jsCartItemContainer-${productId}`);
        container.remove();

        checkoutCounter();
        renderPaymentSummary();
      });
    });

  // Update delivery options 
  document.querySelectorAll('.js-DeliveryOption')
    .forEach(element => {
      element.addEventListener('click', () => {
        const {productId, deliveryOptionId} = element.dataset;
        updateDeliveryOption(productId, deliveryOptionId);

        renderOrderSummary();
        renderPaymentSummary();
      });
    });

  // Render cart quantity
  checkoutCounter();

  // Cart quantity
  function checkoutCounter(){
    cartQuantityCalculation('amazonCheckoutPage');
  }
}