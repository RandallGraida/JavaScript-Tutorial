import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

// Delivery options
export const deliveryOptions = [{
  id: '1',
  deliveryDays: 7,
  priceCents: 0
}, {
  id: '2',
  deliveryDays: 3,
  priceCents: 499
}, {
  id:'3', 
  deliveryDays: 1,
  priceCents: 999
}];

// Delivery option ID
export function getDeliveryOption(deliverOptionId){
  let deliveryOption;

  deliveryOptions.forEach(option => {
    if (option.id === deliverOptionId){
      deliveryOption = option;
    }
  });

  return deliveryOption || deliveryOptions[0];
}

// If delivery date is weekend
function isWeekend(date) {
  const dayOfWeek = date.format('dddd');
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';
}

// Calculate delivery date
export function calculateDeliveryDate(deliveryOption){
  let remainingDays = deliveryOption.deliveryDays;
  let deliveryDate = dayjs();

  while (remainingDays > 0) {
    deliveryDate = deliveryDate.add(1, 'day');

    if (!isWeekend(deliveryDate)) {
      remainingDays--;
    }
  }
  
  const dateString = deliveryDate.format(
    'dddd, MMMM D'
  );

  return dateString;
}