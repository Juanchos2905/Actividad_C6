/*4) Estacionamiento
a) Un estacionamiento requiere determinar el cobro que debe aplicar a las
personas que lo utilizan. Considera que el cobro es con base en las horas
que lo disponen y que las fracciones de hora se toman como completas,
realiza el algoritmo que permita determinar el cobro. */

let cost = parseFloat(prompt('Ingrese cuanto cuesta 1 hora de parqueadero: '))
let hour = parseInt(prompt('Ingrese las horas que hizo uso del parqueadero: '))
let min = parseInt(prompt('Ingrese los minutos: '))

if (min === 0) {
  console.log('Costo por hora/fracción: ', cost)
  console.log(
    'Usted hizo uso del parqueadero por: ',
    hour,
    ' H : ',
    min,
    ' MINS'
  )
  console.log('Usted debe pagar: ', cost * hour)
} else {
  console.log('Costo por hora/fracción: ', cost)
  console.log(
    'Usted hizo uso del parqueadero por: ',
    hour,
    ' H : ',
    min,
    ' MINS'
  )
  console.log('Usted debe pagar: ', cost * hour + cost)
}
