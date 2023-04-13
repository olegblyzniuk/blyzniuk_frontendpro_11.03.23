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