//Homework #10

//Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let str = '';
for(c=20; c<=30; c+=0.5){
    str+= c+' ';
}
console.log(str)

//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let priceDollar = 27;
for(q=0; q<=100; q+=10){
    let mustPay = q *priceDollar;
    console.log(mustPya)
}

//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let someNumber = 10;
let isSimple;
let canGet;
for(y=1;y<=100;y++){
    if(y**2 < someNumber){
        console.log(y)
    }
}
//Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
if(someNumber <= 1){
    console.log('Число должно быть больше 1');
}
for(e=2; e<someNumber; e++){
    if(someNumber%e === 0){
        isSimple = 'Число не простое';
        break;
     }else{isSimple = 'Число простое';}
}
console.log(isSimple);

//Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
for(g=1; g<someNumber; g++){
    if(3**g === someNumber){
        canGet = `Можем получить число ${someNumber}`;
        break;
     }else{
     canGet = `Не можем получить число ${someNumber}`;
     }
}
console.log(canGet);


//Homework #12
//Реалізуйте функцію removeElement

const array = [14, 24, 3, 7, 20, 4, 2];

function removeElement (arr, n){
	let someArr =[];
    for( i = 0; i < arr.length; i++){
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

//Homework #13
//Реалізуйте функцію generateKey

const length = 6;
const characters ='abcdefghijklmnopqrstuvwxyz0123456789';
function generateKey(length, characters) {
    let password = '';
    for(let i = 0; i < length; ++i){
       password += characters[
           Math.floor(
               Math.random() * characters.length
          )
      ];
    }
    console.log(password);
 }
 generateKey(length, characters)

 //Homework #14
 //Рекурсивне зведення в ступінь

 function exponent(n, deg){
    let number;
    if (deg<=0){
        return 1;
    } else {
        return n*exponent(n, deg-1)}
 }