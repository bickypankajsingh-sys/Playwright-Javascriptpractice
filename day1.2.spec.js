let a=14;
let b=7;
let sum = a + b;
console.log("The sum of a and b is: " + sum);

const Url = "https://api.example.com/data";
console.log("The URL is: " + Url);

let x=50;
let name="John";
let add= x + name;
console.log("The addition of x and name is: " + add);

let e= 100;
let f= 25;
let diff= e - f;
console.log("The difference of e and f is: " + diff);

let g = 5;
let h = 10;
let product = g * h;
console.log("The product of g and h is: " + product);

let i=100;
let j=20;
let division = i / j;
console.log("The division of i and j is: " + division);

let k=100;
let l=20;
let modulus = k % l;
console.log("The modulus of k and l is: " + modulus);

let m="Sammy";
let n=" is a good boy";
let message = m + n;
console.log("The message is: " + message);

let text="Hello";
text += " World";
console.log("The concatenated text is: " + text);

let age = 25;
let citizen = "USA";
if(age >= 18 && citizen == "USA"){
    console.log("You are eligible to vote");
} else {
    console.log("You are not eligible to vote");
}

let text1 = "Hello";
let text2 = "World";
//let result=text1 == text2;
let result=text1.concat(" ", text2);
console.log(result);


let o=100;
let p=50;
let test=o>p;
console.log(test);

//Function
let username="admin";
let password="admin123";
function login(username, password){
return username === "admin" && password === "admin123";
}

let q=10;
let r=20;
function sum(q, r){
    return q + r;
}
console.log(sum(q, r));


function addition(x, y){
    let sum = x + y;
    return sum;
}
console.log(addition(5, 10));