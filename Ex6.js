function inverse(number){
    if (typeof number == Boolean)
        return !number
    else if (typeof number == Number)
        return -number
    else
        console.log(`Booleano ou número esperados, mas os parâmetro é to tipo ${typeof number}$`)
}
