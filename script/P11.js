/**11) Nota promedio
a) Realiza el algoritmo para determinar el promedio que obtendrá un alumno,
considerando que realiza tres exámenes, de los cuales el primero y el
segundo tienen una ponderación de 25%, mientras que el tercero de 50%. */

let score = new Array(3)
let average = new Array(3)
let av = 0

for (let i = 0; i < score.length; i++) {
  score[i] = parseFloat(prompt('Ingrese la nota # ' + (i + 1) + ':'))
}

for (let i = 0; i < score.length; i++) {
  i <= 1 ? (average[i] = score[i] * 0.25) : (average[i] = score[i] * 0.5)
  av = av + average[i]
}

console.log('Su promedio es de: ', av)
