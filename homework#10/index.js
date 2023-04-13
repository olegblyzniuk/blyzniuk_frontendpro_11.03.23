//Homework #10

//Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
let str = '';
for(let c=20; c<=30; c+=0.5){
    str+= c+' ';
}
console.log(str)


//Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
let priceDollar = 27;
for(let q=0; q<=100; q+=10){
    let mustPay = q *priceDollar;
    console.log(mustPya)
}

//Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
let someNumber = 10;
let isSimple;
let canGet;
for(let y=1;y<=100;y++){
    if(y**2 < someNumber){
        console.log(y)
    }
}
//Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
if(someNumber <= 1){
    console.log('Число должно быть больше 1');
}
for(let e=2; e<someNumber; e++){
    if(someNumber%e === 0){
        isSimple = 'Число не простое';
        break;
     }else{isSimple = 'Число простое';}
}
console.log(isSimple);

//Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
for(let g=1; g<someNumber; g++){
    if(3**g === someNumber){
        canGet = `Можем получить число ${someNumber}`;
        break;
     }else{
     canGet = `Не можем получить число ${someNumber}`;
     }
     console.log(canGet);
}