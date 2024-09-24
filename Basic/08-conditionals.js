// if, else if, else

// if (si)

let age = 25

if (age == 25) {
    // Bloque de código
    console.log("La edad es 25")
}

// else (si no)

if (age == 25) {
    // Bloque de código
    console.log("La edad es 25")
} else {
    console.log("La edad no es 25")
}

// else if (si no, si)

if (age == 25) {
    // Bloque de código
    console.log("La edad es 25")
} else if (age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 25 ni es menor de edad")
}

// Operador ternario 

const message = age == 25 ? "La edad es 25" : "La edad no es 25"
console.log(message)

// Switch

let day = 0
let dayName

switch (day) {
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miércoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default:
        dayName = "No es un día de la semana"
}

console.log(dayName)