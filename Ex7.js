function comparison (min, max, number, inclusive = false) {
    if (number >= min && number <= max && inclusive == true)
        return true
    if(number < max && number > min && inclusive == false)
        return true
    else 
        return false
}
console.log(comparison(10, 100, 50))