/*12) Monto en cuotas
a) Dado un número real que representa el valor total de una compra, informar
las posibles formas de pago según la siguiente tabla. Específica los datos de
entrada, de salida, estrategia.
1 cuota de $................. (0% de recargo)
2 cuotas de $................. total $................. ( 5% de recargo)
6 cuotas de $................. total $................. ( 40% de recargo) */

let total = parseFloat(prompt('Ingrese el valor total de la compra: '))
let mPayment = parseInt(
  prompt('Formas de pago: \n 1 cuota \n 2 Cuotas \n 6 Cuotas')
)

if (mPayment === 1) {
  console.log('Usted debe pagar 1 cuota de: $', total, '0% de recargo')
} else if (mPayment === 2) {
  console.log('Usted debe pagar 2 cuotas de: $', (total * 1.05) / 2),
    ' total $',
    total * 1.05,
    '5% de recargo'
} else {
  console.log('Usted debe pagar 6 cuotas de: $', (total * 1.4) / 6),
    ' total $',
    total * 1.4,
    '40% de recargo'
}
