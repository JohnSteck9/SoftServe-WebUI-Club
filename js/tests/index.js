// 86.б)Дано натуральне число n. Знайти першу цифру числа n.
const firstNumber = (num) => Number(String(num)[0]);


// 226) Дано натуральні числа  m, n. Отримайте всі їх натуральні спільні кратні менші m*n
const multiplicity = (m, n) => {
    const biggerNum = m >= n ? m : n;
    const smallerNum = m < n ? m : n;

    let num = 0;
    const result = [];
    while (num < m * n) {
        num += biggerNum;
        if (num % smallerNum === 0) result.push(num);
    }
    return result;
};


module.exports = {firstNumber, multiplicity}
