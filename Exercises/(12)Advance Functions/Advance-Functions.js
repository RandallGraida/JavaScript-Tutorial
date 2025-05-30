// 12a 
const add = function(){
  let addOutput = 2 + 3;
  console.log(addOutput);
};

console.log(add());
console.log(add());

// 12b
function runTwice(fun){
  fun();
}

runTwice(function(){
  console.log('twice');
  console.log('twice');
});

// 12c to 12d
document.querySelector('.startFinishPlaceholder')
  .addEventListener('click', () => {
    startAndFinish();
  });

function startAndFinish() {
  // When the button is in 'start'
  const button = document.querySelector('.startFinishPlaceholder');
  const buttonText = button.innerHTML.trim().toLowerCase();

  if (buttonText === 'start') {
    button.innerHTML = 'Loading';

    setTimeout(() => {
      button.innerHTML = 'Finished!';
    }, 1000);
  } else if (buttonText === 'finished!') {
    button.innerHTML = 'Start';
  }
}

// 12e to 12f
(() => {
		document.querySelector('.addToCart')
			.addEventListener('click', () => {
				addToCart();
			});

		let timeoutId;

		function addToCart() {
			const addToCartElement = document.querySelector('.addToCartHTML');
			addToCartElement.innerHTML = 'Added';

			clearTimeout(timeoutId);

			timeoutId = setTimeout(() => {
				addToCartElement.innerHTML = '';
			}, 2000);
		}
	})();

// 12g to 12i
(() => {
	document.querySelector('.add')
		.addEventListener('click', () => {
			titleChange('add');
		});

	document.querySelector('.remove')
		.addEventListener('click', () => {
			titleChange('remove');
		})	

	let numberOfMessages = 0;
	
	function titleChange(addRemoveParameter){
		const titleDocumentQuery = document.querySelector('.titlePlaceholder');
		const originalTitle = 'JavaScript Advance Functions';

		if (addRemoveParameter.toLowerCase() === 'add'){
			setTimeout(() => {
				numberOfMessages += 1;
				titleDocumentQuery.innerHTML = `(${numberOfMessages}) New messages`;

				setTimeout(() => {
					titleDocumentQuery.innerHTML = originalTitle;
				}, 1000);
			}, 0)
		} else if (addRemoveParameter.toLowerCase() === 'remove' && numberOfMessages > 0) {
			setTimeout(() => {
				numberOfMessages -= 1;
				titleDocumentQuery.innerHTML = `(${numberOfMessages}) New messages`;

				setTimeout(() => {
					titleDocumentQuery.innerHTML = originalTitle;
				}, 1000);
			}, 0)
		} else {
			setTimeout(() => {
				titleDocumentQuery.innerHTML = 'Add';
			}, 0);
		}
	}
})();

// 12j to 12k
console.log('Multiply Variable:');
const multiplyVariable = (multiply, multiply2) => {return console.log(multiply * multiply2);};

(multiplyVariable(5, 45));

// 12l
function numbers(){
  const numbersPlaceholder = [1, -5, 8];
  return numbersPlaceholder;
}

function countPositive(numbersArray){
  const arrayPlaceholder = [];

  numbersArray.forEach(value => {
    if (value > 0){
      arrayPlaceholder.push(value);
    }
  });
  console.log(arrayPlaceholder);
}

countPositive(numbers());

// 12m
function numberArrays(){
  const numberArraysPlaceholder = [1, 2, 3];
  return numberArraysPlaceholder;
}

function arrayAdder(){
  const arrayAdderPlaceholder = 2;
  return arrayAdderPlaceholder;
}

function addNum(array, num){
  const arrayPlaceholder = [];

  array.map(value => {arrayPlaceholder.push(value + num);});
  console.log(arrayPlaceholder);
}

addNum(numberArrays(), arrayAdder());

// 12n to 12o
function foodsFunction(){
  const foodsPlaceholder = ['egg', 'chicken', 'salmon', 'egg', 'beef', 'egg', 'egg'];
  return foodsPlaceholder;
}

function foodsReversedFunction(){
  const reversedFoodsPlaceholder = ['egg', 'chicken', 'salmon', 'egg', 'beef', 'egg', 'egg', 'egg'];
  const reversedFoods = reversedFoodsPlaceholder.slice().reverse();

  return reversedFoods;
}

function removeEgg(foods){
  const removeEggArrayPlaceholder = foods;

  let eggCounter = 0;
    console.log(removeEggArrayPlaceholder.filter((arrayValue) => {
      if (arrayValue.toLowerCase() === 'egg' && eggCounter < 2){
        eggCounter += 1;
        return false;
      } else {
        return true;
      }
    }));
    
}
console.log('Foods');
removeEgg(foodsFunction());

console.log('Reversed foods');
removeEgg(foodsReversedFunction());

/* 
  Modify the 12c to 12i by making them use the arrow function
  and using addEventListener
*/
