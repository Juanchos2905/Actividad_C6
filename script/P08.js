/*8) Ahorros
a) Realiza un algoritmo para determinar cuánto dinero ahorra una persona en
un año si considera que cada semana ahorra 15% de su sueldo (considera
cuatro semanas por mes y que no cambia el sueldo).*/

let salary = parseFloat(prompt('Ingrese su sueldo: '))

console.log('Usted va a ahorrar: $', salary * 0.15 * 48)
