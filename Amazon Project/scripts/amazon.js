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
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
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

document.querySelector('.jsProductsGrid')
  .innerHTML = productsHtml;

document.querySelectorAll('.jsAddToCart')
  // productId - is from HTML dataset from the add to cart
  .forEach(button => {
    button.addEventListener('click', () => {
      // productIdPlaceholder is the variable, productId is the HTML data attribute
      const productIdPlaceholder = button.dataset.productId;
      productIdPlaceholder;

      let matchingItem;

      cart.forEach(item => {
        if (productIdPlaceholder === item.productId){ 
          matchingItem = item;
        }
      });

      const quantitySelectorElement = document.querySelector
        (`.jsQuantitySelector-${productIdPlaceholder}`
      );

      const quantitySelector = quantitySelectorElement ? Number(quantitySelectorElement.value) : 1;

      // 'quantity' which is an object came from cart.push 
      if (matchingItem){
        matchingItem.quantity += quantitySelector;
      } else {
        cart.push({
          productId: productIdPlaceholder, 
          quantity: quantitySelector
        });
      }

      let cartQuantity = 0;
      cart.forEach(item => {
        cartQuantity += item.quantity;
      });

      // HTML of the cart quantity
      document.querySelector('.jsCartQuantity')
        .innerHTML = cartQuantity;

      // HTML of the word 'added' when you add items in the cart
      /* 
        'button.closest' - finds the closest parent div in order to
          avoid getting the only first class in the HTML element/s
      */

      const productContainer = button.closest('.product-container');
      const addedHtml = productContainer.querySelector('.added-to-cart');
      
      if (!addedHtml.classList.contains('addedToCartCss')){
        addedHtml.classList.add('addedToCartCss');
      } else {
        addedHtml.classList.remove('addedToCartCss');
      }
    });
  }); 