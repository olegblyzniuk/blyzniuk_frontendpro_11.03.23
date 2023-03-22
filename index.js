//Homework #3

let firstRequest = prompt('Первое число');
let secondRequest = prompt('Второе число');
let firstNum = Number(firstRequest);
let secondNum = Number(secondRequest);

let resSum = firstNum + secondNum;
let resSubstr = firstNum - secondNum;
let resMult = firstNum * secondNum;
let resDivision = firstNum / secondNum;

alert(`${firstNum} + ${secondNum} = ${resSum}
${firstNum} + ${secondNum} = ${resSubstr}
${firstNum} * ${secondNum} = ${resMult}
${firstNum} / ${secondNum} = ${resDivision}`)

//Homework #4

let requestHours = prompt('Сколько часов');
let hours = Number(requestHours);

let secondsInHours = hours * 360;
alert(secondsInHours);

//Homework #5

let firstNumRequest = prompt('Первое число');
let secondNumRequest = prompt('Второе число');
let thirdNumRequest = prompt('Третье число');

let oneNum = Number(firstNumRequest);
let twoNum = Number(secondNumRequest);
let threeNum = Number(thirdNumRequest);

let arithmeticalMean = (oneNum+twoNum+threeNum)/3;

alert(arithmeticalMean);