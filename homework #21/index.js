// Homework #21

// 1. Створити сутність "Людина".

// Властивості:
// імʼя;
// вік.
// Методи:
// конструктор, який приймає два параметри: імʼя та вік;
// метод, який виводить у консоль інформацію про людину.
// 2. Створити сутність "Автомобіль".

// Властивості:
// марка, модель, рік виписку, номерний знак (або на Ваш розсуд);
// власник.
// Методи:
// конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак 
// присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
// метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника


// В якості демонстраціїї створити:

// декілька екземплярів класу Людина;
// декілька екземплярів класу Автомобіль;
// присвоїти власників автомобілям.

class Human {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    showInfo(){
        console.log(`Мены зовут ${this.name}. Мне ${this.age}`)
    }
}

class Car extends Human {
    constructor(brand, model, year, govNumber, name, age){
        super (name, age);
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.govNumber = govNumber;
    }
    owner;

    makeOwner(obj){
        if(obj.age > 18){
            this.owner = obj;
        } else {
            console.log('Вы не можете управлять автомобилем');
            this.owner = 'Нет собственника'}
    }

    showCarInfo(){
        console.log(
            `Brand: ${this.brand}; Model: ${this.model} Year: ${this.year}; GovNumber: ${this.govNumber}`
        )
    }

    showOwner(){
        console.log(this.owner);
        return super.showInfo();
    }
}

const ted = new Human('Ted', 27);
const mike = new Human('Mike', 17);
ted.showInfo();
mike.showInfo();

const kia = new Car('Kia', 'Optima', 2012, 'КХ3558ВВ', 'Ted', 27);
kia.makeOwner(ted);
kia.showCarInfo();
kia.showOwner();

const chevrole = new Car('Chevrole', 'Cruze', 2018, 'АА9424СН', 'Mike', 17);
chevrole.makeOwner(mike);
chevrole.showCarInfo();
chevrole.showOwner();