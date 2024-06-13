// Exercise 1: Temperature check

var temperature = 17;

if (temperature < 0) {
    console.log("It's freezing!");
} else if (temperature >= 0 && temperature <= 15) {
    console.log("It's cold.");
} else if (temperature >= 16 && temperature <= 25) {
    console.log("It's mild.");
} else {
    console.log("It's warm.");
}

// using switch statement

let weather;

if (temperature < 0) {
    weather = 'freezing';
} else if (temperature >= 0 && temperature <= 15) {
    weather = 'cold';
} else if (temperature >= 16 && temperature <= 25) {
    weather = 'mild';
} else {
    weather = 'warm';
}

switch (weather) {
    case 'freezing':
        console.log("It's freezing!");
        break;
    case 'cold':
        console.log("It's cold.");
        break;
    case 'mild':
        console.log("It's mild.");
        break;
    case 'warm':
        console.log("It's warm.");
        break;
    default:
        console.log("Temperature is out of range.");
        break;
}

// Exercise 2: Divisibility Check

var reg_num = 15;

if (reg_num % 2 === 0 && reg_num % 3 === 0) {
    console.log("Divisible by both.");
} else if (reg_num % 2 === 0) {
    console.log("Divisible by 2.");
} else if (reg_num % 3 === 0) {
    console.log("Divisible by 3.");
} else {
    console.log("Not divisible by 2 or 3.");
}

// Using Switch Statement

var condition = (reg_num % 2 === 0 ? 1 : 0) + (reg_num % 3 === 0 ? 2 : 0);

switch (condition) {
    case 3:
        console.log("Divisible by both.");
        break;
    case 1:
        console.log("Divisible by 2.");
        break;
    case 2:
        console.log("Divisible by 3.");
        break;
    default:
        console.log("Not divisible by 2 or 3.");
        break;
}

// Exercise 3: For loops

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum of numbers from 1 to 100:", sum);

const num = [1, 2, 3, 4, 5];
for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

const num1 = [3, 7, 2, 5, 10, 6];
let largest = num1[0];

for (let i = 1; i < num1.length; i++) {
    if (num1[i] > largest) {
        largest = num1[i];
    }
}
console.log("The largest number is:", largest);

// Exercise 4: While loops

let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

let j = 2;
while (j <= 20) {
    console.log(j);
    j += 2;
}

let k = 1;
let sum1 = 0;
while (k <= 100) {
    sum1 += k;
    k++;
}
console.log("Sum of numbers from 1 to 100:", sum1);

let l = 5;
while (l < 50) {
    console.log(l);
    l += 5;
}

