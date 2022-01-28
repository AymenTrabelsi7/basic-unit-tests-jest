const computeAge = require("../src/computeAge")

testDate = new Date(2022,0,28)


test('computeage-regulardate', () => {
    birthday = new Date(1999,6,12)
    
    expect(computeAge(birthday,testDate)).toBe(22)
})


test('computeage-0yo', () => {
    birthday = new Date(2022,0,1)
    
    expect(computeAge(birthday,testDate)).toBe(0)
})

test('computeage-bd-before-today', () => {
    birthday = new Date(1999,0,1)
    
    expect(computeAge(birthday,testDate)).toBe(23)
})

test('computeage-bd-after-today', () => {
    birthday = new Date(1999,11,31)
    
    expect(computeAge(birthday,testDate)).toBe(22)
})

test('computeage-not-born-yet', () => {
    birthday = new Date(2023,11,31)
    
    expect(computeAge(birthday,testDate)).toBe(0)
})