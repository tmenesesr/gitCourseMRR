const sumar = (x, y) => {
    return x + y
}
const restar = (x, y) => {
    return x - y
}
const multiplicar = (x, y) => {
    return x * y
}
const dividir = (x, y) => {
    if (y !== 0) {
        return x / y
    } else {
        return 'No se puede dividir por cero'
    }
}    
