const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("foo");
    }, 300);
});

// promise1.then((value) => {
//     console.log(value);
//     // expected output: "foo"
// });

function getPromise(delay, message) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

function add(x, y) {
    return new Promise((resolve, reject) => {
        if (Number(x) && Number(y)) {
            resolve(Number(x) + Number(y));
        } else {
            reject("Error");
        }
    });
}

add(1, "2").then((a) => console.log(a));

function* take(n, iterable) {
    for (let i = 0; i < n; i++) {
        yield iterable[i];
    }
}

const arr = ["a", "b", "c", "d"];
for (const x of take(2, arr)) {
    console.log(x);
}

async function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield Promise.resolve(i);
    }
}

(async () => {
    const gen = range(1, 3);
    for await (const item of gen) {
        console.log(item);
    }
})();

console.log("=================================");

const teams = [
    { name: "Team 1", members: ["Paul", "Lisa"] },
    { name: "Team 2", members: ["Paul2", "Lisa2"] },
];

function* getMembers(members) {
    for (let i = 0; i < members.length; i++) {
        yield members[i];
    }
}

function* getTeams(teams) {
    for (let i = 0; i < teams.length; i++) {
        yield* getMembers(teams[i].members);
    }
}
const obj = getTeams(teams);
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())
console.log(obj.next())


function job() {
    return new Promise((resolve, reject) => {
        reject();
    })
}


let promise2 = job();

promise2.then(() => {
    console.log('Suc 1');
})
.then(() => {
    console.log('Suc 2');
})
.then(() => {
    console.log('Suc 3');
})
.catch(() => {
    console.log('Err 1');
})
.then(() => {
    console.log('Suc 20');
})












