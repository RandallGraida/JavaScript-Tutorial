/**
 * Math.round
 * - fixes rounding issues
 */
// Currency
export function formatCurrency(priceCents){
  return (Math.round(priceCents) / 100).toFixed(2);
}