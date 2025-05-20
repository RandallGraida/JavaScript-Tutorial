// 10c
// Output is false. Output only works when script file is on the HTML but not working when JavaScript is linked to the HTML.
function test(){
  const test = document.querySelector('.requestNow');
  console.log(test.classList.contains('.requestNow'));
}

test();
  
// 10d to 10g
function onAndOffButton(buttonType){
  const parameter = buttonType;

  // Gaming
  const gaming = document.querySelector('.gaming');

  if (!gaming.classList.contains('activatedColor') && parameter === 'gaming'){
    gaming.classList.add('activatedColor');
  } else {
    gaming.classList.remove('activatedColor');
  }

  // Music
  const music = document.querySelector('.music');

  if (!music.classList.contains('activatedColor') && parameter === 'music'){
    music.classList.add('activatedColor');
  } else {
    music.classList.remove('activatedColor');
  }

  // Tech
  const tech = document.querySelector('.tech');

  if (!tech.classList.contains('activatedColor') && parameter === 'tech'){
    tech.classList.add('activatedColor');
  } else {
    tech.classList.remove('activatedColor');
  }
}

// 10h
function shippingCalculator(){
  const output = document.querySelector('.js-CostInput');

  let cost = Number(output.value);

  if (cost > 40){
    cost = cost
    document.querySelector('.jsTotalCost').innerHTML = `$${cost}`;
  } else if (cost < 40 && cost > 0) { 
      cost = cost + 10;
      document.querySelector('.jsTotalCost').innerHTML = `$${cost}`;
  } else {
      document.querySelector('.jsTotalCost').innerHTML = 'Error: cost cannot be less than $0';
  }
 
}

function handleCostKeyDown(event){
console.log(event.key)

if (event.key === 'Enter'){
  shippingCalculator();
}

}

// 10i - 10j
function updateCalculation(value) {
  if (typeof window.calculation === 'undefined') {
    window.calculation = '';
  }
  
  window.calculation += value;
  document.querySelector('.calculatorResult').innerText = window.calculation;

  return console.log(calculation);
}

function result(){
  document.querySelector('.finalResult').innerText = calculation;
}

