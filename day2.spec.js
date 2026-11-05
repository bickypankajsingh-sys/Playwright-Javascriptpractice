function greet(){
    console.log("Hello, World!");
}
greet();


function add(a, b){
    return a + b;
}
let addition = add(5, 10);
console.log(addition);

//Subtraction
function subtract(a, b){
    return a - b;
}
let subtraction = subtract(10, 5);
console.log(subtraction);

//Multiplication
function multiply(a, b){
    return a * b;
}
let multiplication = multiply(5, 10);
console.log(multiplication);

//Anonymous function
const greetingMessage = function(){
    return "Hello, this is an anonymous function!";
};
console.log(greetingMessage());

//Arrow function
const arrowGreeting = () => {
    return "Hello, this is an arrow function!";
};
console.log(arrowGreeting());

//Asynchronous function
async function fetchData() {
    return "Data fetched successfully!";
}


//Array of functions
let numbers=[1, 2, 3, 4, 5];
console.log(numbers);
console.log(numbers[0]);


let stuname=["Riya", "Sammy", "John"];
console.log(stuname);
console.log(stuname[0]);      
console.log(stuname.length);
console.log(stuname[stuname.length-1]);
console.log(stuname.push("Alice"));
console.log(stuname);
console.log(stuname[stuname.length-1]);
console.log(stuname.unshift("Bob"));
console.log(stuname);
console.log(stuname.pop());
