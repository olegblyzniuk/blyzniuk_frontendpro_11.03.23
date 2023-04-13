//Homework #12
//Реалізуйте функцію removeElement

const array = [14, 24, 3, 7, 20, 4, 2];

function removeElement (arr, n){
	let someArr =[];
    for(let i = 0; i < arr.length; i++){
        if( filter(arr[i], n)){
        someArr.push(arr[i])
        }
    }
    console.log(someArr)
}
function filter(el, n){
    if(el !== n) {
    return el
    }
  } 
removeElement(array, 24);