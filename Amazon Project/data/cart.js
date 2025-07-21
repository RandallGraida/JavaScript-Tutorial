// Cart
export let cart; 

// Render local storage
loadFromStorage();

// Local storage
export function loadFromStorage(){
  cart = JSON.parse(localStorage.getItem('cart'));

  // Default cart value 
  if (!cart){
    cart = [{
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

// Add to cart
export function addToCart(productIdParameter){
  let matchingItem;

  cart.forEach(item => {
    if (productIdParameter === item.productId){ 
      matchingItem = item;
    }
  });

  const quantitySelectorElement = document.querySelector
    (`.jsQuantitySelector-${productIdParameter}`
  );
  const quantitySelector = quantitySelectorElement ? Number(quantitySelectorElement.value) : 1;
  
  if (matchingItem){
    matchingItem.quantity += quantitySelector;
  } else {
    cart.push({
      productId: productIdParameter, 
      quantity: quantitySelector,
      deliveryOptionId: '1'
    });
  }

  saveToStorage();
}

// Save to localStorage
function saveToStorage(){
  localStorage.setItem('cart', JSON.stringify(cart));
}

// Remove from cart
export function removeFromCart(productId){
  const newCart = [];

  cart.forEach(cartItem => { 
    if (cartItem.productId !== productId){
      newCart.push(cartItem);
    }
  });

  cart = newCart;
  saveToStorage();
}

// Cart quantity
export function cartQuantityCalculation(calculationPathParameter){
  let cartQuantity = 0;

  cart.forEach(cartItem => {
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

// Update quantity
export function updateQuantity(productId, newQuantity){
  let matchingItem;

  cart.forEach(cartItem => {
    if (productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  matchingItem.quantity = newQuantity;

  saveToStorage();
}

// Update delivery option
export function updateDeliveryOption(productId, deliveryOptionId){
  let matchingItem;

  cart.forEach(cartItem => {
    if (productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  matchingItem.deliveryOptionId = deliveryOptionId;

  saveToStorage();
}

// Load cart from backend
export function loadCart(fun){
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
    console.log(xhr.response)
    fun();
  });

  xhr.open('GET', 'https://supersimplebackend.dev/cart')
  xhr.send();
}