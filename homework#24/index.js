// Homework#24

// Мережа фастфудів пропонує кілька видів гамбургерів:

// маленький (50 тугриків, 20 калорій);
// великий (100 тугриків, 40 калорій).

// Гамбургер може бути з одним із декількох видів начинок:

// сиром (+ 10 тугриків, + 20 калорій);
// салатом (+ 20 тугриків, + 5 калорій);
// картоплею (+ 15 тугриків, + 10 калорій).

// Можна додати добавки:

// посипати приправою (+15 тугриків, 0 калорій) - полити майонезом (+ 20 тугриків, +5 калорій).


// Напишіть програму, яка розраховує вартість та калорійність гамбургера. Використовуйте ООП підхід.

// (підказка: потрібен клас Гамбургер, константи, методи для вибору опцій та розрахунку потрібних величин)

class Hamburger{

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        }
    
    toppings = [];

    static get SIZE_SMALL() {
        return {  price: 50, calories: 20};
        }
    
    static get SIZE_HUGE() {
        return { price: 100, calories: 40 };
        }
    
    static get STUFFING_CHEESE() {
        return { price: 10, calories: 20 };
        }
    
    static get STUFFING_SALAD() {
        return { price: 20, calories: 5 };
        }
    
    static get STUFFING_POTATOE() {
        return { price: 15, calories: 10 };
        }
    
    static get TOPPING_SAUCE() {
        return { price: 15, calories: 0 };
        }
    
    static get TOPPING_MAYO() {
            return { price: 20, calories: 5 };
        }
    
    addTopping(topping) {
            this.toppings.push(topping);
            return this;
        }
    
    calculate() {
            const toppingCalories = this.toppings.reduce((total, topping) => total + topping.calories, 0);
            return this.size.calories + this.stuffing.calories + toppingCalories;
        }
    
    calculatePrice() {
            const toppingPrice = this.toppings.reduce((total, topping) => total + topping.price, 0);
            return this.size.price + this.stuffing.price + toppingPrice;
        }
    }

const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_SALAD);
hamburger.addTopping(Hamburger.TOPPING_MAYO);
console.log(hamburger.calculate());
console.log(hamburger.calculatePrice());
hamburger.addTopping(Hamburger.TOPPING_SAUCE);
console.log(hamburger.calculate());
console.log(hamburger.calculatePrice());
console.log(hamburger)