export const cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}];

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
      quantity: quantitySelector
    });
  }
}