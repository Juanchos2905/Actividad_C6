/*9) Cheque
a) Una empresa desea determinar el monto de un cheque que debe
proporcionar a uno de sus empleados que tendrá que viajar durante un
determinado número de días. Los gastos que cubre la empresa son: hotel,
comida y 200 pesos diarios para otros gastos. El monto debe estar
desglosado para cada concepto. Realiza un algoritmo que determine el
monto del cheque. */

let nDay = parseInt(prompt('Ingrese el número de días que va a viajar: '))
let priceH = parseFloat(prompt('Ingrese el precio de la noche en el hotel: '))
let priceF = parseFloat(prompt('Ingrese el precio de la comida consumida: '))

console.log('Hotel: ', priceH)
console.log('Comida: ', priceF)
console.log('bono: ', 200 * nDay)
console.log('\n Monto del cheque: ', (priceF + priceH, 200 * nDay))
