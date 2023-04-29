// Homework #20
// Багатоквартирний будинок
// 1. Створити клас Людина.

// Властивості:
// імʼя;
// стать.
// Методи:
// конструктор, який приймає два параметри: імʼя та стать.

// 2. Створити клас Квартира.

// Властивості:
// конструктор не потрібен;
// масив жителів, який при створенні пустий.
// Методи:
// додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

// 3. Створити клас Будинок.

// Властивості:
// масив квартир, який при створенні пустий;
// максимальна кількість квартир.
// Методи:
// конструктор, який приймає один параметр: максимальну кількість квартир;
// додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.


// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Квартира;
// додадити екземпляри класу Людина до екземплярів класу Квартира;
// екземпляр класу Будинок;
// додадити екземпляри класу Квартира до екземплярів класу Будинок.

class Human  {
    constructor (name, gender){
        this.name = name;
        this.gender = gender;
    }
}

const sam = new Human('Sam', 'male');
const ann = new Human('Ann', 'female');
const tom = new Human('Tom', 'male');

class Flat {
    inhabitants = [];
    addInhabitant(obj){
        this.inhabitants.push(obj);
    }
}
const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();

flat1.addInhabitant(sam);
flat2.addInhabitant(ann);
flat3.addInhabitant(tom);
console.log(flat1);
console.log(flat2);
console.log(flat3);

class House {
    constructor(quantityOfFlats){
        this.quantityOfFlats = quantityOfFlats;
    }
    flats = [];
    addFlat(obj){
        if(this.flats.length < this.quantityOfFlats){
            this.flats.push(obj)
        } else {alert('Свободных квартир нет')}
    }
}
const house1 = new House(2);
house1.addFlat(flat1);
house1.addFlat(flat2);
house1.addFlat(flat3);
console.log(house1)
