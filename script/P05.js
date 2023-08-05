/*5) Pinturería
a) Una empresa de pinturas requiere determinar cuánto cobrar por trabajos de
pintura. Considera que se cobra por m2, realiza el algoritmo que le permita ir
generando presupuestos para cada cliente.*/

let cost = parseFloat(prompt('Ingrese el precio de la pintura por m2: '))
let m2 = parseFloat(prompt('Ingrese la cantidad de m2 a pintar: '))
let total = cost * m2
let desc = total - total * 0.2

let opc = parseInt(
  prompt(
    'Ingrese 1 si el siguiente precio se ajusta a su presupuesto \n Ingrese 0 si no se ajusta a su presupuesto: $' +
      total
  )
)

if (opc === 1) {
  console.log('El trabajo costará: ', total)
} else if (opc === 0) {
  total = total - 100
  while (opc === 0 && total >= desc) {
    opc = parseInt(
      prompt(
        'Ingrese 1 si el siguiente precio se ajusta a su presupuesto \n Ingrese 0 si no se ajusta a su presupuesto: $' +
          total
      )
    )
    total = total - 100
  }
  console.log('El trabajo costará: ', total)
}
