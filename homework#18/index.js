//Homework #18
// Функція із замиканням

function sum1(){
    let sumClosure = 0;
  	function upper(x){
        sumClosure += x;
        return sumClosure
    }
    return upper;
}
let sum = sum1();
console.log(sum(5));
console.log(sum(2));
console.log(sum(15));