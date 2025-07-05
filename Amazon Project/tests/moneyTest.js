/**
 * Tests the `formatCurrency` utility function for correct formatting of monetary values.
 *
 * The tests include:
 * - Standard value formatting (e.g., 2095 -> '20.95')
 * - Edge case for zero value (0 -> '0.00')
 * - Edge case for fractional cents (intended: 2000.5 -> '20.01', but contains a likely bug in the test)
 *
 * Logs 'passed' if the output matches the expected string, otherwise logs 'failed'.
 *
 * @module tests/moneyTest
 */
import { formatCurrency } from "../scripts/utils/money.js";

console.log('Test suite: formatCurrency')

// Converts cents into dollars
console.log('Converts cents into dollars');

if (formatCurrency(2095) === '20.95'){
  console.log('passed');
} else {
  console.log('failed');
}

// Works with 0
console.log('Works with 0');

// Edge Case Testing
if (formatCurrency(0) === '0.00'){
  console.log('passed');
} else {
  console.log('failed')
}

// Rounds up to the nearest cent
console.log('Rounds up to the nearest cent');

if (formatCurrency(2000.5 === '20.01')){
  console.log('passed');
} else {
  console.log('failed');
} 