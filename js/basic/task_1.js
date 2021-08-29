function getModifiedArray(array) {
    arr = array
    arr[0] = 'Start'
    arr[arr.length - 1] = 'End'
    return arr
}

console.log(getModifiedArray([12, 6, 22, 0, -8])) // [‘Start’, 6, 22, 0, ‘End’]

function combineArray(arr1, arr2) {
    return arr1.concat(arr2)
        .filter(i => Number.isInteger(i))
}

console.log(combineArray([12, "User01", 22, true, -8], ["Index", 6, null, 15]))


function longestLogin(loginList) {
    let longest = ''
    for (let i of loginList) {
        // console.log(i)
        if (i.length >= longest.length) {
            longest = i
        }
    }
    return longest
}

console.log(longestLogin(["serg22", "tester_2", "Prokopenko", "guest"]))   //  Prokopenko


function factorial(n) {
    if (n <= 1) return 1

    let sum = n
    while (n !== 1) {
        sum *= n-1
        --n
    }
    return sum
}

function processArray(arr, factorial) {
    return arr.map(i => factorial(i))
}

console.log(processArray([1, 2, 3, 4, 5], factorial)); // [1, 2, 6, 24, 120]

function checkAdult(age){
    let alert = "Age verification complete"
    if (!age) console.log(`Error Please, enter your age \n${alert}`)
    else if(age<0) console.log(`Error Please, enter positive number \n${alert}`)
    else if(!Number(age)) console.log(`Error Please, enter number \n${alert}`)
    else if(age % 1 !== 0) console.log(`Error Please, enter Integer number \n${alert}`)
    else if(age<18) console.log(`Error Access denied - you are too young! \n${alert}`)
    else console.log(`Access allowed \n${alert}`)
}
checkAdult(33.3)
// console.log(`Access denied - you are too young! \n${alert}`)
console.log('b' + +'a')
console.log(['users', 'ghg'].pop())
const arr1 = ['users', 'ghg']
arr1.unshift('111', 55)
console.log(arr1)


let add = function (a, b ) {
    return a + b
}

console.log(add(1, 2))