//Homework #12
//Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4 (включно!).
// У міру змін виводити вміст масиву на сторінку.

const array = [14, 24, 3, 7, 20, 4, 2];

array.sort((a,b) => a-b);
console.log(array);

array.splice(2,3);
console.log(array)