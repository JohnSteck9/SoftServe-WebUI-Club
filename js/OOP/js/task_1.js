console.log("========== Task 1 ==========");

class Student {
    static studentBuilder() {
        return new Student("Ihor Kohut", "qc");
    }

    constructor(fullName, direction) {
        this.fullName = fullName;
        this.direction = direction;
    }

    get direction() {
        return this._direction;
    }

    set direction(value) {
        this._direction = value;
    }

    showFullName() {
        return this.fullName;
    }

    nameIncludes(data) {
        if (this.fullName.indexOf(data) === -1) return false;
        return true;
    }
}

const stud1 = new Student("Ivan Petrenko", "web");
const stud2 = new Student("Sergiy Koval", "python");
const stud3 = Student.studentBuilder();

console.log(stud1);
console.log(stud2);
console.log(stud3);

console.log(stud1.nameIncludes("Ivan"));
console.log(stud1.nameIncludes("Denysenko"));
console.log(stud3.direction);
