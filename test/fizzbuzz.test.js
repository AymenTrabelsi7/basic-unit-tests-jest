const fizzBuzz = require("../src/fizzbuzz")

test('fizzBuzz-5-divisible', () => {
    expect(fizzBuzz(5)).toBe("Buzz")
})

test('fizzBuzz-3-divisible', () => {
    expect(fizzBuzz(3)).toBe("Fizz")
})

test('fizzBuzz-both-divisible', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz")
})

test('fizzBuzz-non-divisible', () => {
    expect(fizzBuzz(31)).toBe("Nothing")
})

test('fizzBuzz-zero-is-divisible', () => {
    expect(fizzBuzz(0)).toBe("FizzBuzz")
})

test('fizzBuzz-ngtv-3-divisible', () => {
    expect(fizzBuzz(-3)).toBe("Fizz")
})

test('fizzBuzz-ngtv-5-divisible', () => {
    expect(fizzBuzz(-5)).toBe("Buzz")
})

test('fizzBuzz-ngtv-both-divisible', () => {
    expect(fizzBuzz(-15)).toBe("FizzBuzz")
})