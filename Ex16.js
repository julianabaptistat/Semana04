function leapYear(year) {
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0)
                return true
            if (year % 400 != 0)
                return false
        }
        else 
            return true
    }

}
