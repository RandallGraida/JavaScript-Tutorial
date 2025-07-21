/*
 * unshift
 * - adds array in the front instead of the back
 * 
*/

// Load orders
export const orders = JSON.parse(localStorage.getItem('orders')) || [];

// Add order
export function addOrder(order){
  orders.unshift(order)
}

// Save order to localStorage
function saveToStorage(){
  localStorage.setItem('orders', JSON.stringify(orders));
}