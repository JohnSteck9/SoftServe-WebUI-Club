console.log("========== Task 3 ==========");

class Worker {
    experience = 1.2;

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    get showExp() {
        return this.experience;
    }

    set setExp(value) {
        this.experience = value;
    }

    showSalary() {
        return this.dayRate * this.workingDays;
    }
    showSalaryWithExperience() {
        return this.dayRate * this.workingDays * this.experience;
    }
}

const sortWorkersBySalary = (...args) => {
    console.log("Sorted salary: ");

    args.sort(
        (a, b) => a.showSalaryWithExperience() - b.showSalaryWithExperience()
    ).forEach((worker) =>
        console.log(`${worker.fullName}:`, worker.showSalaryWithExperience())
    );
};

const worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
console.log(worker1.showSalary());
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());

const worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullName);
console.log(worker2.showSalary());
worker2.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());

const worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullName);
console.log(worker3.showSalary());
worker3.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log(worker1.showSalaryWithExperience());

sortWorkersBySalary(worker1, worker2, worker3);
