function removeProperty (object, property) {
    let copy = {}
    copy = Object.assign(object, copy)
    delete copy[property] // assim que deleta uma prop do obj
    return copy
}
console.log(removeProperty({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao")) 