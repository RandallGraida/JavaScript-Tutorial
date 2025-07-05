import { formatCurrency } from "../../scripts/utils/money.js";

// Test suite provided by Jasmine Testing Framework
// describe('name of the test')
describe('Test suite: formatCurrency', () => {
  // it() - creates a test in Jasmine
  it('Converts cents into dollars', () => {
    // Compares a value into another value
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it ('Works with 0', () => {
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('Rounds up to the nearest cent', () => {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });
});