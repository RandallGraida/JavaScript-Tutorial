/*
  External Libraries in JavaScript
  This example demonstrates how to use an external library (dayjs) to manipulate dates.
  In this case, we are using dayjs to get today's date, add days to it, and format the date.
*/
import dayjs from "https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js"

// External Libraries exercises
// 15a - 15b
const today = dayjs();

// 9 - is the day of the month that you can change automatically or manually
// 'days' - is the dayjs syntax in which it determines what day or month to add
const date = today.add(5, 'days').add(1, 'month');

let dateString = date.format('dddd, MMMM D');
console.log(dateString);

document.querySelector('.js-date')
  .innerHTML = `<div>${dateString}</div>`;

// 15c 
const oneMonthBefore = today.add(-1, 'month');

dateString = oneMonthBefore.format('dddd, MMMM D');

console.log(dateString);

// 15d to 15e
export const dayOfWeek = today.add(2, 'days');

dateString = dayOfWeek.format('dddd');
console.log(dateString);

export function isWeekend(date){
  const day = date.format('dddd');

  if (day.toLowerCase() === 'saturday'){
    console.log('It is saturday');
  } else if (day.toLowerCase() === 'sunday'){
    console.log('It is sunday')
  } else {
    console.log('It is weekdays');
  }
}


