function computeAge(birthday, currentDate) {
    age = 0

    birthdayYear = birthday.getFullYear()
    currentYear = currentDate.getFullYear()

    age = currentYear - birthdayYear - 1

    if(birthday.getMonth() < currentDate.getMonth()) age++
    else if (birthday.getMonth() == currentDate.getMonth() && birthday.getDate() <= currentDate.getDate()) age++

    return age
}

module.exports = computeAge