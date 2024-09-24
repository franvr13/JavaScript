// 1. Escribe un comentario en una línea
// Esto es un comentario

// 2. Escribe un comentario en varias líneas
/* Esto es
un comentario 
en varias líneas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos
let myAdress = "Calle El Cisne 4, 2-2"
let myAge = 25
let myHeight = 1.75
let isStudent = true
let undefinedValue = undefined
let nullValue = null
let mySymbol = Symbol("mysymbol")
let myBigInt = BigInt(1000000000000000000)
let myBigInt2 = 1000000000000000000n

// 4. Imprime por consola el valor de todas las variables
console.log(myAdress)
console.log(myAge)
console.log(myHeight)
console.log(isStudent)
console.log(undefinedValue)
console.log(nullValue)
console.log(mySymbol)
console.log(myBigInt)
console.log(myBigInt2)

// 5. Imprime por consola el tipo de todas las variables
console.log(typeof myAdress)
console.log(typeof myAge)
console.log(typeof myHeight)
console.log(typeof isStudent)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof mySymbol)
console.log(typeof myBigInt)
console.log(typeof myBigInt2)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myAdress = "Avenida Barcelona"
myAge = 20
myHeight = 1.80
isStudent = false
undefinedValue = undefined
nullValue = null
mySymbol = Symbol("mysymbol2")
let myBigInt3 = 2000000000000000000n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myAdress = "12345" 
myAge = "twenty-five" 
myHeight = false 
isStudent = "yes" 
undefinedValue = 0 
nullValue = "null" 
mySymbol = "123" 
myBigInt = "a very large number" 
myBigInt2 = 100.5 

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos
const myAdress2 = "Calle El Cisne 4, 2-2"
const myAge2 = 25
const myHeight2 = 1.75
const isStudent2 = true
const undefinedValue2 = undefined
const nullValue2 = null
const mySymbol2 = Symbol("mysymbol")
const myBigInt4 = 1000000000000000000n

// 9. No se pueden modificar los valores de las constantes
// Comentamos estas líneas porque producirían un error
// myAdress2 = 12345 
// myAge2 = "twenty-five" 
// myHeight2 = false 
// isStudent2 = "yes" 
// undefinedValue2 = 0 
// nullValue2 = "null" 
// mySymbol2 = 123 
// myBigInt4 = "a very large number" 
// myBigInt2 = 100.5 