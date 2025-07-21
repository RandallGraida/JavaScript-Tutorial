/*
* DATA ATTRIBUTES
* - Syntax: HTML attributes must begin with `data-` and appear after `class="…"`:
*    <button class="jsAddToCart" data-product-id="123">…</button>
*
* MODULES
* - allows you to access other files without naming conflicts from 'src' in HTML file
*
* productId
* - is from HTML dataset from the add to cart
*
* POLYMORPHISM 
* - use a method without knowing the class
*/
import { addToCart, cartQuantityCalculation } from "../data/cart.js";
import { products, loadProducts } from "../data/products.js";

loadProducts(renderProductsGrid);

// Builds product grid, sets up cart updates and button handlers
function renderProductsGrid(){
  let productsHtml = '';

  products.forEach(product => {
    productsHtml += `
      <div class="product-container">
        <div class="product-image-container">
          <img class="product-image"
            src="${product.image}">
        </div>

        <div class="product-name limit-text-to-2-lines">
          ${product.name};
        </div>

        <div class="product-rating-container">
          <img class="product-rating-stars"
            src="${product.getStarsUrl()}">
          <div class="product-rating-count link-primary">
            ${product.rating.count}
          </div>
        </div>

        <div class="product-price">
          ${product.getPrice()}
        </div>

        <div class="product-quantity-container">
          <select class="jsQuantitySelector-${product.id}">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>

        <!--
          
        -->
        ${product.extraInfoHTML()}
  
        <div class="product-spacer"></div>

        <div class="added-to-cart">
          <img src="images/icons/checkmark.png">
          Added
        </div>

        <button class="add-to-cart-button button-primary 
          jsAddToCart" data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>
    `;
  });

  // Amazon Products
  document.querySelector('.jsProductsGrid')
    .innerHTML = productsHtml;
  
  // Render cart quantity
  updateCartQuantity();

  // Cart quantity
  function updateCartQuantity(){
    cartQuantityCalculation('amazonHomePage');
  };

  // Flash "Added" effect
  function updateCartQuantityCSS(buttonParameter){
    
    const productContainer = buttonParameter.closest('.product-container');
    const addedHtml = productContainer.querySelector('.added-to-cart');

    clearTimeout(addedHtml.timeoutId);
    addedHtml.classList.add('addedToCartCss');
    
    addedHtml.timeoutId = setTimeout(() => {
        addedHtml.classList.remove('addedToCartCss');
        addedHtml.timeoutId = null;
      }, 2000);
  }

  // Add to cart
  document.querySelectorAll('.jsAddToCart')
    .forEach(button => {
      button.addEventListener('click', () => {
        const productIdPlaceholder = button.dataset.productId;
        productIdPlaceholder;

        addToCart(productIdPlaceholder);
        updateCartQuantity();
        updateCartQuantityCSS(button);
      });
    }); 
}