//Homework #16

//Знайти суму та кількість позитивних елементів

const array = [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
let summ = array.reduce((accum,value)=>value>0?accum+value:accum, 0);
let positiveElm = array.reduce((accum,value)=>{
    if(value >0){
    accum++;
}
return accum},0);
console.log(summ);
console.log(positiveElm);

//Знайти мінімальний елемент масиву та його порядковий номер

let minElm = Math.min(...array);
console.log(minElm);
let positionMinElm = array.indexOf(minElm) + 1;
console.log(positionMinElm);

//Знайти максимальний елемент масиву та його порядковий номер

let maxElm = Math.max(...array);
console.log(maxElm);
let positionMaxElm = array.indexOf(maxElm) + 1;
console.log(positionMaxElm);

//Визначити кількість негативних елементів

let negativeElm = array.reduce((accum,value)=>{
    if(value < 0){
    accum++;
}
return accum},0);
console.log(negativeElm);

//Знайти кількість непарних позитивних елементів

let oddElm = array.reduce((accum,value)=>{
    if(value > 0 && value%2 !== 0){
    accum++;
}
return accum},0);
console.log(oddElm);

//Знайти кількість парних позитивних елементів

let evenElm = array.reduce((accum,value)=>{
    if(value > 0 && value%2 === 0){
    accum++;
}
return accum},0);
console.log(evenElm);

//Знайти суму парних позитивних елементів

let sumEvenElm = array.reduce((accum,value)=>{
    if(value > 0 && value%2 === 0){
    return accum + value;
} 
return accum},0);
console.log(sumEvenElm);

//Знайти суму непарних позитивних елементів

let sumOddElm = array.reduce((accum,value)=>{
    if(value > 0 && value%2 !== 0){
    return accum + value;
} 
return accum},0);
console.log(sumOddElm);

//Знайти добуток позитивних елементів

let multPosElm = array.reduce((accum,value)=>{
    if(value > 0){
    return accum * value;
} 
return accum},0);
console.log(multPosElm);

//Знайти найбільший серед елементів масиву, ост альні обнулити

let max = Math.max(...array);
let newArr = 
    array.map
        (elem => {if (elem === max){
            return elem;
            }else{return elem * 0}
});
console.log(newArr);