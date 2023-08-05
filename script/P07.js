/*7) Precio final
a) Realiza un algoritmo para determinar cuánto pagará finalmente una persona
por un artículo, considerando que tiene un descuento de 20%, y debe pagar
15% de IVA (debe mostrar el precio con descuento y el precio final). */

let price = parseFloat(prompt('Ingrese el precio del artículo: '))
let priceIva = 0

console.log('PRECIO: $', price)
console.log('PRECIO FINAL + IVA: $', price * 0.15 + price)
priceIva = price * 0.15 + price
console.log('PRECIO CON DESCUENTO DEL 20%: $', priceIva - priceIva * 0.2)
