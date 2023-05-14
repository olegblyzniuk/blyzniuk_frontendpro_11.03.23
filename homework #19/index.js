//Homework #19

let ladder = {
    step: 0,
    up: function () {
        this.step++;
        return this
    },
    down: function () {
        this.step--;
        return this
    },
    showStep: function () { 
        alert(this.step);
        return this
    }
};

ladder.up().down().up().up().showStep();