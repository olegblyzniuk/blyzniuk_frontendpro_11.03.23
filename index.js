//Homework #6

let requestAge = prompt('Ваш год рождения?');
let userTown = prompt('В каком городе живете?');
let likeSport = prompt('Ваш любимый вид спорта?');

let championFootball = 'Lionel Messi';
let championSwimming = 'Michael Phelps';
let championFormula = 'Michael Schumacher';

let ifCapital
if(userTown === "Kyiv"){
    ifCapital = "Вы проживаете в столице Украины"
} else if(userTown === "London"){
    ifCapital = "Вы проживаете в столице Великобритании"
} else if(userTown === "Washigton"){
    ifCapital = "Вы проживаете в столице США"
} else if(userTown === null){
    ifCapital= "Жаль, Вы не захотели указывать свой город"
}else{ifCapital = `Вы проживаете в городе ${userTown}`}

let year = Number(requestAge);
let calcAge = 2023-year;
let userAge
if(year===0){
    userAge="Жаль, Вы не захотели указывать свой год рождения"
}else{userAge=`Ваш  возраст: ${calcAge}`}

let yourSport
if(likeSport === "football"){
    yourSport = `Круто! Хочешь стать как ${championFootball}?`
}else if(likeSport === "swimming"){
    yourSport = `Круто! Хочешь стать как ${championSwimming}?`
}else if(likeSport === "formula1"){
    yourSport = `Круто! Хочешь стать как ${championFormula}?`
}else if(likeSport === null){
    yourSport = "Жаль, Вы не захотели указывать свой любимый вид спорта"
}else{yourSport = `Ваш любимый вид спорта ${likeSport}`}

alert(`${userAge}
${ifCapital}
${yourSport}`)

//Homework #7

let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch(numOrStr){
    case null:
        console.log('ви скасували');
        break;
    case  '':
        console.log('Empty String');
        break;
    case isNaN( +numOrStr ):
        console.log(' number is Ba_NaN');
        break;
    default:
        console.log('OK!')
        break;
}

//Homework #8

let toDo = prompt('Что вы хотите сделать: add, sub, mult, div?');
let firstNumReq = prompt ('Первое число');
let secondNumReq = prompt('Второе число');

let firstNum = Number(firstNumReq);
let secondNum = Number(secondNumReq);

let resultToDo

switch(toDo){
    case 'add':
        resultToDo = firstNum + secondNum;
        alert(`${firstNum} + ${secondNum} = ${resultToDo}`);
        break;
    case 'sub':
        resultToDo = firstNum - secondNum;
        alert(`${firstNum} - ${secondNum} = ${resultToDo}`);
        break;
    case 'mult':
        resultToDo = firstNum * secondNum;
        alert(`${firstNum} * ${secondNum} = ${resultToDo}`);
        break;
    case 'div':
        resultToDo = firstNum / secondNum;
        alert(`${firstNum} / ${secondNum} = ${resultToDo}`);
        break;
}

