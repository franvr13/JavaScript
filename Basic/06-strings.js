// Strings

// Concatenación de cadenas

let myName = "Fran"
let greeting = "Hola, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud

console.log(greeting.length)

// Acceso a caracteres

console.log(greeting[0])
console.log(greeting[1])
console.log(greeting[10])

// Métodos comunes 
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("Fran"))
console.log(greeting.indexOf("Administrador"))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("Fran"))
console.log(greeting.includes("Administrador"))
console.log(greeting.slice(0, 11))
console.log(greeting.replace("Fran", "FranDev"))

// Template literals (plantillas literales)

let message = `Hola, este es mi 
curso de
JavaScript`

console.log(message)

let email = "f13villalbaroldan@gmail.com"

console.log(`Hola, ${myName}! Tu email es ${email}`)