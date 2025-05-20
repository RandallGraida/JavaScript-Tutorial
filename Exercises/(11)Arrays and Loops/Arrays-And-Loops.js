// Arrays and Loops Exercises
// 11a
const num = [10, 20, 30];
num[2] = 99;

console.log(num);

// 11b
const num2 = [1, 3, 5]
function getLastValue(array){
  const lastIndex = array[array.length - 1];
  console.log(lastIndex);
}

// getLastValue(num2);

// 11c
const original = [1, 20, 22, 24, 25];
function arraySwap(array){
  array = original;

  const firstIndex = array[0];
  const lastIndex = array[array.length - 1];

  // First
  array[array.length - 1] = firstIndex;

  // Last
  array[0] = lastIndex;

  console.log(array);
}

// arraySwap(original);

// 11d
function evenNumberCount(){
  for(i = 0; i <= 10; i++){
    let evenOnly = i;

    if (evenOnly % 2 === 0) {
      console.log(evenOnly);
    }
  }
}

evenNumberCount();

// 11e
function fiveToOne(){
  for(i = 5; i > 0; i--){
    let fiveToOne = i;

    console.log(fiveToOne);
  }
}

// fiveToOne();
console.log('Hello World');

// 11f
function usingWhileLoops(){
  let evenOnly = 0;

  while(evenOnly <= 10){
    if (evenOnly % 2 === 0){
      console.log(evenOnly);
    }
    evenOnly++;
  }

  console.log('while loops')

  let fiveToZero = 5;
  while(fiveToZero >= 0){
    console.log(fiveToZero);
    fiveToZero--;
  }
}

usingWhileLoops();

console.log('New array');

// 11g
const newArray = [-2, -1, 0, 99];
function newArrayFunction(newArrayParameter){
  newArrayParameter = newArray;
  const outputParameter = [];

  for (i = 0; i < newArrayParameter.length; i++){
    const output = newArrayParameter[i];
    outputParameter.push(output + 1);
  }
  console.log(outputParameter);
} 

newArrayFunction(newArray);

// 11h
console.log('11i');
const newArray2 = [1, 2, 3];
const incrementer = 100;

function addNum(arrayParameter, incrementerParameter){
  const newArrayParameter2 = arrayParameter;
  const outputIncrementer = incrementerParameter;

  const outputParameter2 = [];

  // Adds the number that you want to the whole array
  for (i = 0; i < newArrayParameter2.length; i++){
    const output = newArrayParameter2[i];
    outputParameter2.push(output + outputIncrementer);
  }
  console.log(outputParameter2);
}

addNum(newArray2, incrementer);

// 11j 
// Adds the values of the first and second arrays or succeeding arrays
console.log('11j')
const array1 = [1, 1, 3];
const array2 = [1, 1, 5];

function addArrays(firstArray, secondArray){
  const outputArray1 = firstArray;
  const outputArray2 = secondArray;

  const sumArray = [];

  // Adds two arrays
  for (i = 0; i < outputArray1.length; i++){
    // To access each element in an array
    const firstArrayPlaceholder = outputArray1[i];
    const secondArrayPlaceholder = outputArray2[i];

    sumArray.push(firstArrayPlaceholder + secondArrayPlaceholder);
  }
  console.log(sumArray);
}

addArrays(array1, array2);

// 11k
// Counts positive numbers in an array
console.log('11k');
const integers = [1, -3, -2, 10];

function countPositive(numbers){
  numbers = integers;
  let outputPositive = 0;

  for (i = 0; i < numbers.length; i++){
    const positiveCounter = numbers[i];

    if (positiveCounter > 0){
      outputPositive += 1;
    }
  }
  console.log(outputPositive);
}

countPositive(integers);

// 11l to 11m
console.log('11l to 11m');
const minimumAndMaximum = [5, 10, 15];

function minMax(nums) {
  const result = {
    min: null,
    max: null
  };

  for (let i = 0; i < nums.length; i++) {
    
    if (result.min === null || nums[i] < result.min) {
      result.min = nums[i];
    }

    if (result.max === null || nums[i] > result.max) {
      result.max = nums[i];
    }
  }
  console.log(result);
}

minMax(minimumAndMaximum);

// 11n
console.log('11n');
const words = ['apple', 'orange', 'apple'];

function countWords(wordsParameter){
  wordsParameter = words;

  // Placeholder for counting of same words
  let outputCounter = {
      apple: 0,
      orange: 0
    };

  for (i = 0; i < wordsParameter.length; i++){
    const wordDeterminator = wordsParameter[i];

    // Placeholder for determining the words
    let wordCounter = {
      apple: 'Apple',
      orange: 'orange'
    };
    
    if (wordCounter.apple.toLowerCase() === wordDeterminator){
      outputCounter.apple += 1;
    }

    if (wordCounter.orange.toLowerCase() === wordDeterminator){
      outputCounter.orange += 1;
    }
  }
  console.log(outputCounter);
}

countWords(words);