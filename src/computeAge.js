function computeAge(birthday, currentDate) {
    age = 0

    birthdayYear = birthday.getFullYear()
    currentYear = currentDate.getFullYear()

    if(birthdayYear >= currentYear) return 0

    else {        
        age = currentYear - birthdayYear - 1
        if(birthday.getMonth() < currentDate.getMonth()) age++
        else if (birthday.getMonth() == currentDate.getMonth() && birthday.getDate() <= currentDate.getDate() ) age++
    }

    return age
}

module.exports = computeAge