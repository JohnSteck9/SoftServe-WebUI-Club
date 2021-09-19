const {firstNumber, multiplicity} = require('./index');


 // 86.б)Дано натуральне число n. Знайти першу цифру числа n.
describe('firstNumber', () =>{
    test('return first number of number =)', () => {
        expect(firstNumber(1)).toBe(1);
        expect(firstNumber(222)).toBe(2);
        expect(firstNumber(95.5)).toBe(9);
        expect(firstNumber('015')).toBe(0);
    });

})


// 226) Дано натуральні числа  m, n. Отримайте всі їх натуральні спільні кратні менші mn
describe('multiplicity', () =>{
    test(`return array of numbers - all their(m, n) natural common multiples of the smaller m*n `, () => {
        expect(multiplicity(0, 0)).toEqual([]);
        expect(multiplicity(1, 1)).toEqual([1]);
        expect(multiplicity(1, 2)).toEqual([2]);
        expect(multiplicity(9, 12)).toEqual([36, 72, 108]);
        expect(multiplicity(15, 12)).toEqual([60, 120, 180]);
    });
});
