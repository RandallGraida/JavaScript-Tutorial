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
