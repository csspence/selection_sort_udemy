/*
JavaScript Algorithms and Data Structures Masterclass
Selection Sort
*/

const selectionSort = (arr) => {
  let min;
  let temp;
  for(let i = 0; i < arr.length; i++) {
    min = i;
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[min] > arr[j]) {
        min = j;
      }
    }
    if(min !== i) {
      temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp; 
    }
  }
  return arr;
}