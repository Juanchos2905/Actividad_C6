/*Edad
a) Una empresa que contrata personal requiere determinar la edad de las
personas que solicitan trabajo, pero cuando se les realiza la entrevista sólo
se les pregunta el año en que nacieron. Realiza el algoritmo para solucionar
este problema. */

let year = parseInt(prompt('Ingrese el año actual:'))
let birth = parseInt(prompt('Ingrese el año en que nació el trabajador: '))

console.log('El trabajador tiene: ', year - birth, 'años')
