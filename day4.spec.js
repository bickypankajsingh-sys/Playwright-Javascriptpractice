//Make a spec.js file and page file --only theoritical part in this file for practical will do in next class

export class Student {
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

