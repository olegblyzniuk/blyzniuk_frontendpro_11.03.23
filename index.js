//Homework #9

let i=10;
while(i<20){
    console.log(i);
    i++;
}

let p=10;
while(p<20){
    console.log(p**2);
    p++;
}

let mainCounter = 7;
let counter = 1;
while(counter<=10){
    resMult = mainCounter*counter;
    console.log(`${mainCounter}*${counter}=${resMult}`)
    counter++
}

let sumOfNum = 0;
for(k=0; k<=15; k++){
    sumOfNum+=k;
}
console.log(sumOfNum)

let multOfNum = 1;
for(j=15; j<=35; j++){
    multOfNum*=j;
}
console.log(multOfNum)

let sumOfNum2 = 0;
for(l=0; l<=500; l++){
    sumOfNum2+=l;
}
console.log(sumOfNum2)
console.log(sumOfNum2/500)

let sumOfNum3 = 0;
for  (n=30; n<=80; n++){
    if(n%2 === 0){
        sumOfNum3 += n;
    }
}
console.log(sumOfNum3)

for( let m=100; m<=200; m++){
    if(m%3 === 0){
        console.log(m)
    }
}

let someNum = prompt('Натуральное число?');
let divider;
let naturalNum = Number(someNum);
let sumOfDividers=0;
console.log(`Натуральное число ${naturalNum}`)
for(b=1; b<=naturalNum; b++){
        if(naturalNum%b === 0){
        	divider = b;
            console.log(`делится на ${divider}`)
        }
    }
 for(divider=1; divider<=naturalNum; divider++){
    if(naturalNum%divider === 0 && divider%2 === 0){
        console.log(`делится на парный делитель ${divider}`)
        sumOfDividers+=divider
    }
}
console.log(sumOfDividers)

let firstCounter;
let secondCounter;
let result;
for(firstCounter=1;firstCounter<=10;firstCounter++){
    for(secondCounter=1; secondCounter<=10;secondCounter++){
        result= firstCounter * secondCounter;
        console.log(`${firstCounter} * ${secondCounter} = ${result}`)
    }
}