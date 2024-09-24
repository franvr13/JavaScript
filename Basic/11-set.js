// set 

// Declaración

let mySet = new Set()

console.log(mySet)

// Inicialización

mySet = new Set (["Fran", "Dev", "FranDev", 25, true, "f13villalbaroldan@gmail.com"])

console.log(mySet)

// Métodos comunes

// add y delete

mySet.add("https://www.Google.com")

console.log(mySet)

mySet.delete("https://www.Google.com")

console.log(mySet)

console.log(mySet.delete("Fran"))
console.log(mySet.delete(4))

console.log(mySet)

// has

console.log(mySet.has("Dev"))
console.log(mySet.has("Fran"))

// size

console.log(mySet.size)

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray)

// Convertir un array a set

mySet = new Set(myArray)
console.log(mySet)

// No admite duplicados

mySet.add("f13villalbaroldan@gmail.com")
mySet.add("f13villalbaroldan@gmail.com")
mySet.add("f13villalbaroldan@gmail.com")
mySet.add("f13villalbaroldan@gmail.com")
console.log(mySet)