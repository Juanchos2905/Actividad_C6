/*2) Conversión USD
a) Una empresa importadora desea determinar cuántos dólares puede adquirir
con determinada cantidad de pesos. Realiza el algoritmo para tal fin. */

let money = parseFloat(prompt('Ingrese la cantidad en pesos que se tiene: '))
let dolar = parseFloat(prompt('Inrese a cuánto equivale 1 cop a USD HOY: '))

console.log('Los dólares que la empresa puede adquirir son: ', dolar * money)
