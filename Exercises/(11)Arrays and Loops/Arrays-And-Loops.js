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

// 11o to 11p
// This will only find the first element of the word 'search' not the succeeding of the word 'search'
console.log('11o to 11p');

const sortedWords = ['hello', 'world', 'search', 'search', 'jensen huang'];
function searchFinder(sortedWordsParameter){
  const sortedWords = sortedWordsParameter;
  let notSearch = -1;

  for (let i = 0; i < sortedWords.length; i++){
    const sortedWordsLooper = sortedWords[i];

    if (sortedWordsLooper.toLowerCase() === 'search'){
      // This will find which index of the array that matches the word 'search'
      notSearch = i;
      break;
    } else {
      console.log(-1);
    }
  }

  console.log(notSearch);
}

searchFinder(sortedWords);

// 11q
/*
  Create a function findIndex(array, word) that searches an array for a string 
  (in the 'word' parameter) and returns the index of the first appearance of the
  string. If it does not exist in the array, return -1.

    * findIndex(['green', 'red', 'blue', 'red'], red) => 1
    * findIndex(['green', 'red', 'blue', 'red'], yellow) => -1
*/
console.log('11q');

const colors = ['green', 'red', 'blue', 'red'];
const wordReference = 'Red';

function findIndex(array, word){
  const colorsPlaceholder = array;
  const wordReferencePlaceholder = word;
  let wordCounter = 0;

  for (let i = 0; i < colorsPlaceholder.length; i++){
    const colorsArray = colorsPlaceholder[i];

    if (colorsArray.toLowerCase() === wordReferencePlaceholder.toLowerCase()){
      wordCounter += 1;
    } 
  }

  /*
    Error handler if the color reference is not in the parameter
    then it will result in -1
  */ 
  if (wordCounter === 0){
    wordCounter = -1;
  }

  console.log(wordCounter);
}

findIndex(colors, wordReference);

// 11r to 11s
/*
  Create a function removeEgg(foods) that takes an array of strings and
  returns an array where the string 'egg' is removed. (Hint: loop through the array
  and check if each string is 'egg'. If it is 'egg', use 'continue', to skip it.
  If it is not 'egg', add it to the result).
    * removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']) => ['apple', 'ham']
*/ 
console.log('11r to 11s');

const foods = ['egg', 'chicken', 'salmon', 'egg', 'egg', 'tofu'];
// Use this reversed array method in exercise 11t and 11u which reverses the array/s
// const reversedFoods = foods.slice();

function removeEgg(foodsParameter){
  const foodsPlaceholder = foodsParameter;
  const foodToRemove = 'egg'

  let preFinalFoods = [];
  const finalFoods = preFinalFoods;
  let foodToRemoveCounter = 0;

  for (let i = 0; i < foodsPlaceholder.length; i++){
    let foodsArray = foodsPlaceholder[i];
  
    // Remove the first 2 food to be removed then output the succeeding food to be removed
    if (foodsArray === foodToRemove && foodToRemoveCounter < 2){
      preFinalFoods.splice({i}, 1);
      foodToRemoveCounter += 1;
    } 

    /*
      Use this lines of codes that is based on exercise 11t to 11u in order to 
      remove after succeeding the first two output of the food to be removed.
      * Codes: 
        if (foodsArray === foodToRemove && foodToRemoveCounter < 2){
          foodToRemoveCounter += 1;
        } else if (foodsArray === foodToRemove && foodToRemoveCounter >= 2){
          preFinalFoods.splice({i}, 1);
        }
    */
    preFinalFoods.push(foodsArray);
  }
  console.log(finalFoods);
}
removeEgg(foods);

// 11v
console.log('11v');

const userInput = [];
function fizzBuzz(userInputParameter){
  let userInputPlaceholder = userInputParameter;
  let userInputOutput = 0;

  for (let i = 0; i < 20; i++){
    userInputOutput += 1;
    userInputPlaceholder.push(userInputOutput);
  }
  
  let output = [];
  for (let i = 0; i < userInputPlaceholder.length; i++){
    let userInputArray = userInputPlaceholder[i];

    if (userInputArray % 3 === 0 && userInputArray % 5 === 0){
      userInputArray = 'FizzBuzz';
    } else if (userInputArray % 3 === 0){
      userInputArray = 'Fizz';
    } else if (userInputArray % 5 === 0){
      userInputArray = 'Buzz';
    } 
    output.push(userInputArray);
  }
  console.log(output);
  
}

fizzBuzz(userInput);

// 11w
console.log('11w');

const colorsReference = ['green', 'red', 'blue', 'red'];
/**
  * Returns an array containing only the first occurrence of each color ('red', 'green', 'blue') 
    from the input array.
*/
function unique(array){
  const colorsPlaceholder = array;
  let wordCounter = {
    red: 0,
    green: 0,
    blue: 0
  };

  const wordReference = {
    colorRed: 'red',
    colorGreen: 'green',
    colorBlue: 'blue'
  };

  let uniqueOutput = [];

  for (let i = 0; i < colorsPlaceholder.length; i++){
    const colorsArray = colorsPlaceholder[i];

    if (colorsArray.toLowerCase() === wordReference.colorRed.toLowerCase() && wordCounter.red < 1){
      wordCounter.red++;
      uniqueOutput.push(colorsArray);
    } else if (colorsArray.toLowerCase() === wordReference.colorGreen.toLowerCase() && wordCounter.green < 1){
        wordCounter.green++;
        uniqueOutput.push(colorsArray);
    } else if (colorsArray.toLowerCase() === wordReference.colorBlue.toLowerCase() && wordCounter.blue < 1){
        wordCounter.blue++;
        uniqueOutput.push(colorsArray);
    }
  }
  console.log(uniqueOutput);
}

unique(colorsReference);