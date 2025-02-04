const fizzBuzz = require('./fizzbuzz.js');

describe('fizzBuzz Function', () => {
    test('returns "Fizz" for multiples of 3', () => {
        expect(fizzBuzz(3)).toBe('Fizz');
        expect(fizzBuzz(6)).toBe('Fizz');
    });

    test('returns "Buzz" for multiples of 5', () => {
        expect(fizzBuzz(5)).toBe('Buzz');
        expect(fizzBuzz(10)).toBe('Buzz');
    });

    test('returns "FizzBuzz" for multiples of both 3 and 5', () => {
        expect(fizzBuzz(15)).toBe('FizzBuzz');
        expect(fizzBuzz(30)).toBe('FizzBuzz');
    });

    test('returns the number for non-multiples of 3 or 5', () => {
        expect(fizzBuzz(1)).toBe(1);
        expect(fizzBuzz(2)).toBe(2);
    });
});