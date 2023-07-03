// Homework #25

//SuperMath

// Створити клас SuperMath.

// Додати до екземпляра метод - check(obj), параметр obj якого має властивості X, Y, znak. Метод повинен підтвердити у користувача, чи хоче він зробити дію znak c Х і У. Якщо хоче, зробити математичну дію znak (яка описана в прототипі), інакше - запитати введення нових даних через метод input() класу SuperMath.

// Приклад об'єкта: `obj = {X:12, Y:3, znak: “/”}`, можливі варіанти znak => `+ - / * %`.

// При введенні znak потрібно перевірити коректність введення на можливі математичні дії.

class SuperMath{
    check(obj){
        let req = confirm(`Выполнить математическое действие ${obj.znak}?`);

        if (req === true){

            if (obj.znak === '/' && obj.y === 0){
                alert('Нельзя делить на ноль!')
            };

            if (obj.znak === '/'){
                console.log (obj.x / obj.y)
            };

            if (obj.znak === '-'){
                console.log (obj.x - obj.y)
            };

            if (obj.znak === '+'){
                console.log (obj.x + obj.y)
            };

            if (obj.znak === '*'){
                console.log (obj.x * obj.y)
            };

            if (obj.znak === '%'){
                console.log ((obj.x / obj.y) * 100)}
        }

        if (req === false){
        	let anotherZnak = this.inpt();

            if (anotherZnak === '/' && obj.y === 0){
                alert('Нельзя делить на ноль!')
            };

            if (anotherZnak === '/'){
                console.log (obj.x / obj.y)
            };

            if (anotherZnak === '-'){
                console.log (obj.x - obj.y)
            };

            if (anotherZnak === '+'){
                console.log (obj.x + obj.y)
            };

            if (anotherZnak === '*'){
                console.log (obj.x * obj.y)
            };

            if (anotherZnak === '%'){
                console.log ((obj.x / obj.y) * 100)}
        }
    }

    inpt(){
    	let changeZnak = prompt('Какое действие хотите выполнить +, -, /, *, %, ?');
        
        return changeZnak;
    }
}

let object = { x: 4, y: 3, znak: '+'}

let p = new SuperMath();
p.check(object)
