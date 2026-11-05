//Reverse a string in JavaScript

let str="Javascript";
let reverseStr=str.split("").reverse().join("");
console.log(reverseStr);

//using loop to reverse a string
let str1="Ramcharam";
let reverseStr1="";
for(let i=str1.length-1; i>=0; i--){
    reverseStr1+=str1[i];
}
console.log(reverseStr1);


let str3="Mango";
let reverseStr3="";
let i=0;
for(i=str3.length-1; i>=0; i--){
    reverseStr3+=str3[i];
}
console.log(reverseStr3);


//Constructor method

import class Student {
    constructor(name, age, stream,grade) {
        this.name = name;
        this.age = age;
        this.stream = stream;
        this.grade=grade;
    }

    studentDetails() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Stream: ${this.stream}, Grade: ${this.grade}`);
    }
}

const student1 = new Student("Riya", 20, "Science", "A");
student1.studentDetails();
const student2=new Student("Sammy",22,"Arts", "B");
student2.studentDetails();

