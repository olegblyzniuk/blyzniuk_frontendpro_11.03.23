//Homework #12
//Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.

const array = [14, 24, 3, 7, 20, 4, 2];

function sort (arr) {
    let len = arr.length - 1;

    for(let i = 0; i < len; i++)

        for(let j = 0; j < len - i; j++)
          
          if(arr[j] > arr[j + 1]){
            
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
    
    return arr;
  }
  
  console.log(sort(array));

  function delElm(arr){
    let someArr = [];
    for (let i = 0; i<arr.length; i++){
      if (arr[i]!== 3 && arr[i]!== 4 && arr[i] !== 7){
      someArr.push(arr[i]);
      }
    }
    return someArr;
    } 
    console.log(delElm(array))