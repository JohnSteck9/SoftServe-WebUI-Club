console.log("========== Task 2 ==========");

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    showFullName() {
        return `${this.name} ${this.surname}`;
    }
}

class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(midleName) {
        return `${this.name} ${this.surname} ${midleName}`;
    }

    showCourse() {
        const course = new Date().getFullYear() - this.year + 1;
        return course <= 6 ? course : 6;
    }
}

const stud1 = new Student("Petro", "Petrenko", 2017);
console.log(stud1.showFullName("Petrovych"));
console.log("Current course: " + stud1.showCourse());
