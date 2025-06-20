export let cart = JSON.parse(localStorage.getItem('cart'));

// This is the default value of the cart  
if (!cart){
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2
  }, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1
  }];
}

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
  
  // 'quantity' which is an object came from cart.push 
  if (matchingItem){
    matchingItem.quantity += quantitySelector;
  } else {
    cart.push({
      productId: productIdParameter, 
      quantity: quantitySelector,
    });
  }

  saveToStorage();
}

function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart));
}

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
}
