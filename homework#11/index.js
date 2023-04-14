//Homework #11

//Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
let arr = [5, 45, "Человек" , "Земля", 33, 7];

function sumOfNum(array){
    let sum = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        if (typeof array[i] === "number"){
            sum += array[i];
        }
    }
     console.log(sum) 
}
sumOfNum(arr);

//Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.
let reqFirstNum = prompt('Первое число');
let reqSecondNum = prompt('Второе число');
let process = prompt('Какое действие: +, -, *, /, %, ^ ');

let firstNum = Number(reqFirstNum);
let secondNum = Number(reqSecondNum);

function doMath (x, y, znak){
    if(znak  === '+'){
        let result = x +y;
    }
    if(znak === '-'){
        result = x-y;
    }
    if (znak === '/'){
        result = x/y;
    }
    if (znak === '*'){
        result = x*y;
    }
    if (znak === '%'){
        result = (x/y)*100;
    }
    if (znak === '^'){
        result = x**y;
    }
    return(result)
}
doMath(firstNum, secondNum, process)

//Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.
let reqLengthMainArr = prompt('Длина основного массива?');
let reqLengthArr = prompt('Длина внутренненго массива?');
let inf = prompt('Информация');

let lengthMainArr = Number(reqLengthMainArr);
let lengthArr = Number(reqLengthArr);

function addArr(mainLength, innerLength, information){
    let mainArr = [];
    for(let i = 0; i < mainLength; i++){
        mainArr[i] = [];
        for(let j = 0; j < innerLength; j++){
            mainArr[i][j] = information;
        }
    }
    console.log(mainArr)
}

addArr(lengthMainAr, lengthArr, inf)

//Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.
let someStr = 'hello world';
let delSymb = ['l', 'd'];

function deleteSymb (str, arr){
    let anotherStr = '';
    for(let i=0; i<str.length; i++){
        let eachElm = str[i];
        let check = false;
        for(let j=0; j < arr.length;j++){
            if(eachElm === arr[j]){
                check= true;
                break;
            }
        }
        if(!check){
            anotherStr += eachElm;
        }
    }
    return anotherStr
}

console.log(deleteSymb(someStr, delSymb))