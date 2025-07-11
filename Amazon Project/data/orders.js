export const orders = JSON.parse(localStorage.getItem('orders')) || [];

export function addOrder(order){
  // unshift - adds array in the front instead of the back
  orders.unshift(order)
}

function saveToStorage(){
  localStorage.setItem('orders', JSON.stringify(orders));
}