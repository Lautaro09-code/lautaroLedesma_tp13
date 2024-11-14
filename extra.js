// Mostrar los siguientes 10 numeros del indicado
function numSiguiente(Numero) {
    for (let i = 1; i < 10; i++) {
        console.log(Numero + i)
    }
}
//numSiguiente(54)

// Mostrar los numeros de 1 al 57 salteando de 3 e 3
function numDe3En3() {
    for (let i = 3; i <= 57; i+=3) {
    console.log(i)
    }
}
//numDe3En3()

// Sumar los numeros del 0 al 100
function sumaDel1Al100() {
    let resultadoSuma = 0;
    for (let i = 0; i <= 100; i++) {
        resultadoSuma += i
    }
    console.log("El resultado de la suma de los numeros del 0 al 100 es:",resultadoSuma)
}
//sumaDel1Al100()

// Pasar cada uno de los caracteres a Mayuscula
function pasarMayuscula(texto){
    if (typeof texto !== "string") {
        console.log("Por favor ingrese caracter tipo: string")
    }
    for (let i = 0; i < texto.length; i++) {
            console.log(texto[i].toUpperCase())
    }
}
//pasarMayuscula("hola como estas?")

// Clasificar numeros pares
function numPares(numPositivos) {
    let nuevoarray =[]
    for (let i = 0; i < numPositivos.length; i++) {
        if (numPositivos[i] % 2 == 0) {
            nuevoarray.push(numPositivos[i])
        }
    }
    console.log(nuevoarray)
}
//numPares([1,2,3,4,5,6,7,8,9,10,11,12,13,14])

module.exports ={
    numSiguiente,
    numDe3En3,
    sumaDel1Al100,
    pasarMayuscula,
    numPares
}