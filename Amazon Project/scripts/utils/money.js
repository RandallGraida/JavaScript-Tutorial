export function formatCurrency(priceCents){
  // Math.round - fixes issues about rounding numbers
  return (Math.round(priceCents) / 100).toFixed(2);
}