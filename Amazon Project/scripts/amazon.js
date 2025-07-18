// Modules - allows you to access other files without naming conflicts from 'src' in HTML file
/* 
  * import module variable names can be changed through
    ex. "import { cart as myCart } from cart "
  * Do not create a same name variable when dealing with modules
    as it will cause naming conflict
    ex. "
          import { cart } from cart
          const cart = [];
        "
*/
import { addToCart, cartQuantityCalculation } from "../data/cart.js";
import { products, loadProducts } from "../data/products.js";

loadProducts(renderProductsGrid);

function renderProductsGrid(){
  let productsHtml = '';

  products.forEach(product => {
    /* 
      Data Attribute:
      * Has to start with the word "data" then put it "after" the class attribute
      * Character size is always vice versa between HTML and JS 
        (ex. HTML: data-productName, JS: dataset.productname. Or vice versa)
      * data-ProductName="${product.name}"
        - The add to cart html classes represents its capability to add
          objects and arrays to the JavaScript code into the actual add to cart in the html part
    */
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
          *Polymorphism - use a method without knowing the class
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

  // HTML of the Amazon Products
  document.querySelector('.jsProductsGrid')
    .innerHTML = productsHtml;
    
  updateCartQuantity();
  function updateCartQuantity(){
    cartQuantityCalculation('amazonHomePage');
  };

  function updateCartQuantityCSS(buttonParameter){
    // HTML of the word 'added' when you add items in the cart
    /* 
      'button.closest' - finds the closest parent div in order to
        avoid getting the only first class in the HTML element/s
    */
    const productContainer = buttonParameter.closest('.product-container');
    const addedHtml = productContainer.querySelector('.added-to-cart');

    // Added to cart functionality when the button is pressed
    clearTimeout(addedHtml.timeoutId);
    addedHtml.classList.add('addedToCartCss');
    
    addedHtml.timeoutId = setTimeout(() => {
        addedHtml.classList.remove('addedToCartCss');
        addedHtml.timeoutId = null;
      }, 2000);
  }

  document.querySelectorAll('.jsAddToCart')
    // productId - is from HTML dataset from the add to cart
    .forEach(button => {
      button.addEventListener('click', () => {
        // productIdPlaceholder is the variable, productId is the HTML data attribute
        const productIdPlaceholder = button.dataset.productId;
        productIdPlaceholder;

        addToCart(productIdPlaceholder);
        updateCartQuantity();
        updateCartQuantityCSS(button);
      });
    }); 
}