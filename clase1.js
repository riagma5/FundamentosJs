// console.log('Hola mundo JS!')

/*var nombre = 'Ricardo',
    apellido = 'Aguilera'
var edad = '28 años'

console.log('Hola ' + nombre + ' ' + apellido)
console.log('Tengo ' + edad)

var peso = 75*/

var nombre = 'Ricardo', apellido = 'Aguilera'

var nombreEnMayusculas = nombre.toUpperCase()
var apellidoEnMinusculas = apellido.toLowerCase()

var primeraLetraDelNombre = nombre.charAt(0)

var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

var str = nombre.substr(1, 2)

//Reto: mostrar al usuario la ultima letra de su nombreEnMayusculas
var ultimaLetra = nombre.charAt(nombre.length-1)
