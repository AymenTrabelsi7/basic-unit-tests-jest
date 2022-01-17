const computeAge = require("../src/computeAge")

test('computeage-', () => {
    currentDate = new Date(Date.now())
    birthday = new Date(1999,6,12)
    
    expect(computeAge(birthday,currentDate)).toBe(22)
})
