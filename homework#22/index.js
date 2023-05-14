// Homework#22
// Студент

// Вам потрібно зробити конструктор сутності "Студент".

// Студент має ім'я, прізвище, рік народження — це властивості. Є масив з оцінками, це також властивість. І є можливість отримати вік студента та його середній бал – це методи.

// Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, спочатку він не заповнений, але на 25 елементів. Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод .present() на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false. Передбачте будь-який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів. Масив – це властивість, present та absent – ​​методи.

// Останній метод: .summary(), перевіряє середню оцінку і середнє відвідування(кількістьВідвідин/кількістьЗанять), і якщо середня оцінка більше 90, а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!", якщо одне з цих значень менше , то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".

// Не забудьте після того, як напишите цей конструктор, створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

class Student {
    constructor(firstName, lastName, year, arr){
        this.firstName = firstName;
        this.lastName = lastName;
        this.year = year;
        this.grades = arr;
    }

    visitLessons = [];

    showAge(){
        let presentDate = new Date();
        let presentYear = presentDate.getFullYear();
        let studentAge = presentYear - this.year;

        console.log(`Возраст студента: ${studentAge} лет`)
    }

    meanGrade(){
        let sumGrades = this.grades.reduce((acc, value)=>
            acc + value, 0);

        return sumGrades / this.grades.length; 
    }

    meanVisited(){
        let sumVisits = this.visitLessons
        						.map(value => {
            						if (value){
               							 value = 1;
            							} else {value = 0}
            							return value})
                                .reduce((acc, value) => 
                                    acc + value,0);

        return sumVisits / this.visitLessons.length
    }

    present(){
        if(this.visitLessons.length < 25){
            this.visitLessons.push(true);
        }
        return this;
    }

    absent(){
        if(this.visitLessons.length < 25){
            this.visitLessons.push(false);
        }

        return this;
    }

    summary(){
        if (this.meanGrade() >= 90 && this.meanVisited() >= 0.9){
            console.log('Молодець!')
            }
            
            if (
            this.meanGrade() < 90 && this.meanVisited() > 0.9 
            || 
            this.meanGrade() > 90 && this.meanVisited() < 0.9
            ){
            console.log('Добре, але можна краще ')
            }
            
            if (this.meanGrade() < 90 && this.meanVisited() < 0.9){
            console.log('Редиска!')
            }
    }
}

const vladislav = new Student('Владислав', 'Гончарук', 1997, [100, 90, 95, 95]);

console.log(vladislav);
vladislav.showAge();
vladislav.present().present().present().present();
console.log(vladislav.meanGrade());
console.log(vladislav.meanVisited());
vladislav.summary();

const sergey = new Student('Сергей', 'Клименко', 1991, [95, 80, 80, 90]);

console.log(sergey);
sergey.showAge();
sergey.present().absent().present().present();
console.log(sergey.meanGrade());
console.log(sergey.meanVisited());
sergey.summary();
