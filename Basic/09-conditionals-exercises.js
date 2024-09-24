// 1. Imprime por consola tu nombre si una variable toma su valor

let name = "Fran"

if (name == "Fran") {
    console.log("Mi nombre es Fran")
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos

let userName = "Fran"
let userPassword = "12345"

if (userName == "Fran" && userPassword == "12345") {
    console.log("Bienvenido, usuario autorizado")
} else {
    console.log("Error de autenticación")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje

let number = 0

if (number > 0) {
    console.log("El número es positivo")
} else if (number < 0) {
    console.log("El número es negativo")
} else {
    console.log("El número es cero")
}


// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan

let age = 12
let age2 = 18 - age

if (age >= 18) {
    console.log("Puedes votar")
} else if (age < 18) {
    console.log("Faltan " + (age2) + " años para votar")
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad 

const edad = 18
const categoria = edad >= 18 ? "adulto" : "menor"
console.log(categoria)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

let monthx = 7
let monthNamex

if (monthx == 0) {
    monthNamex = "Enero"
} else if (monthx == 1) {
    monthNamex = "Febrero"
} else if (monthx == 2) {
    monthNamex = "Marzo"
} else if (monthx == 3) {
    monthNamex = "Abril"
} else if (monthx == 4) {
    monthNamex = "Mayo"
} else if (monthx == 5) {
    monthNamex = "Junio"
} else if (monthx == 6) {
    monthNamex = "Julio"
} else if (monthx == 7) {
    monthNamex = "Agosto"
} else if (monthx == 8) {
    monthNamex = "Septiembre"
} else if (monthx == 9) {
    monthNamex = "Octubre"
} else if (monthx == 10) {
    monthNamex = "Noviembre"
} else if (monthx == 11) {
    monthNamex = "Diciembre"
}
console.log(monthNamex)

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma

let languague = "0"
let saludo

switch (languague) {
    case 0:
        saludo = "Hola"
        break
    case 1:
        saludo = "Hello"
        break
    default:
        saludo = "No podemos encontrar tu idioma"
}
console.log(saludo)

// 9. Usa un switch para hacer de nuevo el ejercicio 6

let month = 3
let monthName

switch (month) {
    case 0:
        monthName = "Enero"
        break
    case 1:
        monthName = "Febrero"
        break
    case 2:
        monthName = "Marzo"
        break
    case 3:
        monthName = "Abril"
        break
    case 4:
        monthName = "Mayo"
        break
    case 5:
        monthName = "Junio"
        break
    case 6:
        monthName = "Julio"
        break
    case 7:
        monthName = "Agosto"
        break
    case 8:
        monthName = "Septiembre"
        break
    case 9:
        monthName = "Octubre"
        break
    case 10:
        monthName = "Noviembre"
        break
    case 11:
        monthName = "Diciembre"
        break
    default:
        monthName = "No es un mes del año"
}

console.log(monthName)