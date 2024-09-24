// array 

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Fran", "Dev", "FranDev", 25]
myArray2 = new Array("Fran", "Dev", "FranDev", 25, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array (3)
myArray2[0] = "Fran"
myArray2[1] = "Dev"
myArray2[2] = "FranDev"

console.log(myArray2)

myArray = []
myArray[2] = "Fran"
// myArray[0] = "Fran"
myArray[1] = "FranDev"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Fran")
myArray.push("Dev")
myArray.push("FranDev")
myArray.push(25)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Fran", "Dev")
console.log(myArray)

// lenght

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // alternativa, pero mejor no utilizarla
console.log(myArray)

// slice

myArray = ["Fran", "Dev", "FranDev", 25, true]

let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3)
console.log(myArray)

myArray = ["Fran", "Dev", "FranDev", 25, true]

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)