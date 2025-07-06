// Use PascalCase when dealing with creation of objects, ex. Class, Function
class Cart {
  // cart;- shortcut for undefined
  cartItems;
  
  /* 
    * Private property - can only be used inside the class
      * #localStorageKey - makes it private
  */
  #localStorageKey;

  // Constructor - lets us put setup code and runs it inside the class
  constructor(localStorageKey){
    this.#localStorageKey = localStorageKey;
    this.#loadFromStorage();
  }
  
  #loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey));
    /*
      * This is the default value of the cart 
      * this.cartItems - shortcut for the variable of the main object 
        on which the main object is 'const cart'
    */
    if (!this.cartItems){
      this.cartItems = [{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
      }];
    }
  }

  saveToStorage(){
    localStorage.setItem(this.#localStorageKey, JSON.stringify(this.cartItems));
  }

  addToCart(productIdParameter){
    let matchingItem;

    this.cartItems.forEach(item => {
      if (productIdParameter === item.productId){ 
        matchingItem = item;
      }
    });

    const quantitySelectorElement = document.querySelector
      (`.jsQuantitySelector-${productIdParameter}`
    );
    const quantitySelector = quantitySelectorElement ? Number(quantitySelectorElement.value) : 1;
    
    // 'quantity' which is an object came from cart.push 
    if (matchingItem){
      matchingItem.quantity += quantitySelector;
    } else {
      this.cartItems.push({
        productId: productIdParameter, 
        quantity: quantitySelector,
        deliveryOptionId: '1'
      });
    }

    this.saveToStorage();
  }

  /**
   * Removes a product from the shopping cart by its product ID.
   * Iterates through the current cart and creates a new cart array excluding
   * the item with the specified productId. Updates the cart and saves the changes to storage.
   * @param {string} productId - The unique identifier of the product to remove from the cart.
  */
  removeFromCart(productId){
    const newCart = [];

    this.cartItems.forEach(cartItem => { 
      if (cartItem.productId !== productId){
        newCart.push(cartItem);
      }
    });

    this.cartItems = newCart;
    this.saveToStorage();
  }

  /* 
    Updates the quantity of a specific product in the cart and 
    persists the change to localStorage.
  */
  updateQuantity(productId, newQuantity){
    let matchingItem;

    this.cartItems.forEach(cartItem => {
      if (productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });

    matchingItem.quantity = newQuantity;

    this.saveToStorage();
  }

  cartQuantityCalculation(calculationPathParameter){
    let cartQuantity = 0;

    this.cartItems.forEach(cartItem => {
      cartQuantity += cartItem.quantity;
    });

    if (calculationPathParameter === 'amazonHomePage'){
      document.querySelector('.jsCartQuantity')
        .innerHTML = cartQuantity;
    }
    if (calculationPathParameter === 'amazonCheckoutPage'){
      document.querySelector('.jsCheckoutCounter')
        .innerHTML = `${cartQuantity} items`;
    }
    if (calculationPathParameter === 'paymentSummary'){
      document.querySelector('.js-paymentItemCount')
        .innerHTML = `Items (${cartQuantity}):`;
    }
  }

  /* 
    This function updates the delivery option for a specific product in the 
    cart, then saves the updated cart to local storage.
  */
  updateDeliveryOption(productId, deliveryOptionId){
    let matchingItem;

    this.cartItems.forEach(cartItem => {
      if (productId === cartItem.productId){
        matchingItem = cartItem;
      }
    });

    matchingItem.deliveryOptionId = deliveryOptionId;

    this.saveToStorage();
  }
}

/*
  OOP encapsulation ensures each Cart instance maintains independent 
  state. Even when containing duplicated sub-objects referencing the 
  same parent entity, modifications are scoped to the individual 
  cart instance without side effects across other carts.
*/
const cart = new Cart('cart-oop');
const businessCart = new Cart('cart-business');

cart.localStorageKey = 'aaa';

console.log(cart);
console.log(businessCart);

// instaceof - checks if businessCart is from the class Cart
console.log(businessCart instanceof Cart)