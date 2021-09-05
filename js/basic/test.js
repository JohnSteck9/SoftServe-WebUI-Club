const filterNums = (array, num = 0, rule = "greater") => {
    switch (rule) {
        case "greater":
            console.log(array.filter((i) => i > num));
            return array.filter((i) => i > num);
        case "less":
            console.log(array.filter((i) => i < num));
            return array.filter((i) => i < num);
    }
};

filterNums([-1, 2, 4, 0, 55, -12, 3], 11, "greater"); //[ 55]
filterNums([-2, 2, 3, 0, 43, -13, 6], 6, "less"); // [-2, 2, 3, 0, -13]
filterNums([-2, 2, 3, 0, 43, -13, 6], -33, "less"); //  []
filterNums([-2, 2, 3, 0, 43, -13, 6]); // [2, 3, 43, 6]
filterNums([-2, 2, 3, 0, 43, -13, 6], 23); // [43]

// ========================================================

const sumOfLen = (...args) => {
    let allLength = 0;

    args.map((i) => {
        allLength += i.length;
    });

    return allLength;
};

console.log(sumOfLen("hello", "hi")); //7
console.log(sumOfLen("hi")); //2
console.log(sumOfLen()); //0
console.log(sumOfLen("hello", "hi", "my name", "is")); //16

// ========================================================

const howMuchSec = (seconds = 0, minutes = 0, hours = 0, days = 0, weeks = 0, months = 0, years = 0) => {
    months = months + years * 12;
    days = days + weeks * 7 + months * 30;
    hours = hours + days * 24;
    minutes = minutes + hours * 60;
    seconds = seconds + minutes * 60;
    console.log(seconds);
    return seconds;
};

howMuchSec(12, 3); //192
howMuchSec(1, 33, 22); //81181
howMuchSec(); //0

// ========================================================

const maxInterv = (...args) => {
    let result = 0
    if(args.length < 2) return result

    let min = max = args[0];

    for(let i = 1; i < args.length; i++) {
        if(Math.abs(args[i]-args[i-1]) > result) result = Math.abs(args[i]-args[i-1])
    }


console.log(result)
return result
};

console.log('=========')
maxInterv(3, 5, 2, 7); //5
maxInterv(3, 5, 2, 7, 11, 0, -2); //11
maxInterv(3, 5); //2
maxInterv(3); //0


const func1 = (a ,b) => {
    return a**b 
}
