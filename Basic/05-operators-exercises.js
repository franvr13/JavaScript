// 1. Crea una variable para cada operación aritmética

let a = 15
let b = 7

console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo
console.log(a ** b) // Exponente

a++
console.log(a) // Incremento

b--
console.log(a) // Decremento

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

let myVariable = 5
console.log(myVariable)
myVariable += 5
console.log(myVariable) // Asignación suma
myVariable -= 5
console.log(myVariable) // Asignación resta
myVariable *= 5
console.log(myVariable) // Asignación multiplicación
myVariable /= 5 
console.log(myVariable) // Asignación división
myVariable %= 5
console.log(myVariable) // Asignación módulo
myVariable **=5
console.log(myVariable) // Asignación exponente

// 3. Imprime 5 comparaciones verdades con diferentes operadores de comparación

console.log(5 == 5) // Igualdad
console.log(5 != 5) // Desigualdad
console.log(5 > 5) // Mayor que
console.log(5 < 5) // Menor que
console.log(5 >= 5) // Mayor o igual que

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación

console.log(5 == 3) // Igualdad
console.log(5 != 3) // Desigualdad
console.log(5 > 3) // Mayor que
console.log(5 < 3) // Menor que
console.log(5 >= 3) // Mayor o igual que

// 5. Utiliza el operador lógico and

console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// 6. Utiliza el operador lógico or

console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 || 15 > 20 || 30 > 40)
console.log(5 > 10 && 15 > 20 || 30 < 40)

// 7. Combina ambos operadores lógicos

console.log(5 > 10 && 15 > 20 || 30 < 40)

// 8. Añade alguna negación

console.log(!(5 > 10 && 15 > 20 || 30 < 40))

// 9. Utiliza el operador ternario

const Amarillo = true
Amarillo ? console.log("El color es amarillo") : console.log("El color no es amarillo")

// 10. Combina operadores aritméticos, de comparáción y lógicas

let c = 10
let d = 20
console.log((c > d) && (c * d > 20) || (c - d == 5))