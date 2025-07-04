import { renderOrderSummary } from "../../scripts/checkout/orderSummary.js";
import { loadFromStorage } from "../../data/cart.js";

describe('Test suite: renderOrderSummary', () => {
  it('Displays the cart', () => {
    document.querySelector('.js-testContainer').innerHTML = 
    `
      <div class="jsOrderSummary"></div>
    `;

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1,
        deliveryOptionId: '2'
      }]);
    });
    loadFromStorage();

    renderOrderSummary();

    expect(
      document.querySelectorAll('.js-CartItemContainer').length
    ).toEqual(2); 
  });
});