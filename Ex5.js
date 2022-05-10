function biggerThan (x, y) {
    if (typeof x != typeof y)
        return false
    else if (x <= y)
        return false
    else
        return true
}
