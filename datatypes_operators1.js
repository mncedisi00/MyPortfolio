//Exercise 1: Numbers

let n1_num = 20;
let n2_num = 2.5;
let addition = n1_num + 5;
let subtraction = n1_num - 5;
let multiplication = n1_num * 5;
let division = n1_num / 5;
let modulus = n1_num % n2_num;
let exponentiation = n1_num**5;

   console.log({addition,subtraction,multiplication,division,modulus,exponentiation});

//Exercise 2: Boolean and Operators
var x = 8;
var y = 12;

   if(x > y){
    console.log('x is greater than y');
    }else{
        console.log('y is greater than x');
    }

if(x <= y){
    console.log('x is less than or equal to y');
}else{
    console.log('x is not less than or equal to y');
}

if(x === y){
    console.log('x is equal to y');
}else{
    console.log('x is not equal to y');
}

if(x !== y){
    console.log('x is not equal to y');
}else{
    console.log('x is equal to y');
}

let a = true;
let b = false;

let logic_AND = a && b;
let logic_OR = a || b;
let logic_NOT = !a;

console.log('a AND b :' +  logic_AND);
console.log('a OR b :' + logic_OR);
console.log('NOT a :' + logic_NOT);

var p = 10;

p +=2;
console.log('p +=2 :'+ p);

p -=2;
console.log('p -=2 :'+ p);

p *=2;
console.log('p *=2 :'+ p);

p /=2;
console.log('p /=2 :'+ p);

p %=2;
console.log('p %=2 :'+ p);

