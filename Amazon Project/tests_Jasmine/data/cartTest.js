import { addToCart, cart, loadFromStorage } from "../../data/cart.js";

describe('Test suite: addToCart', () => {
  it('Adds an existing product to the cart', () => {
    spyOn(localStorage, 'setItem');

    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]);
    });
    loadFromStorage();

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');

    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(2);
  });

  it('Adds a new product to the cart', () => {
    // Mocks - replace a method with a fake version
    spyOn(localStorage, 'setItem');

    // .and.callFake() - tells Jasmine to use your provided function instead of the real getItem method whenever it's called during the test
    spyOn(localStorage, 'getItem').and.callFake(() => {
      return JSON.stringify([]);
    });
    loadFromStorage();

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);

    // Checks how many times localStorage.setItem is been called
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);

    // Checks if productId is equal to the addToCart(productId)
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    
    expect(cart[0].quantity).toEqual(1);
  });
});
