import {cart, removeFromCart, cartQuantityCalculation , updateQuantity} from "../data/cart.js";
import {products} from "../data/products.js";
import {formatCurrency} from "./utils/money.js";

let cartSummaryHTML = '';

cart.forEach(cartItem => {
  const productId = cartItem.productId;

  let matchingProduct; 

  products.forEach(product => {
    if (product.id === productId){
      matchingProduct = product;
    }
  });

  cartSummaryHTML += 
  `
    <div class="cart-item-container jsCartItemContainer-${productId}">
      <div class="delivery-date">
        Delivery date: Tuesday, June 21
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
          <div class="delivery-option">
            <input type="radio" checked
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Tuesday, June 21
              </div>
              <div class="delivery-option-price">
                FREE Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-${matchingProduct.id}">
            <div>
              <div class="delivery-option-date">
                Wednesday, June 15
              </div>
              <div class="delivery-option-price">
                $4.99 - Shipping
              </div>
            </div>
          </div>
          <div class="delivery-option">
            <input type="radio"
              class="delivery-option-input"
              name="delivery-option-1">
            <div>
              <div class="delivery-option-date">
                Monday, June 13
              </div>
              <div class="delivery-option-price">
                $9.99 - Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  `;
});
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
