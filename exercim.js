/* -------------HackerRanks------------- */

/*📌 Comparar Triplets */
/* 1️⃣

Alice y Bob crearon un problema para HackerRank. Un revisor califica los dos desafíos, otorgando puntos en una escala de 1 a 100 para tres categorías: claridad del problema, originalidad, y dificultad.

La calificación para el desafío de Alice es el triplete a = (a[0], a[1], a[2])y la calificación para el desafío de Bob es el triplete b = (b[0], b[1], b[2]).

La tarea es calcular sus puntos de comparación comparando cada categoría:

Si a[i] > b[i], entonces Alice es premiada 1 punto.
Si a[i] < b[i], entonces Bob es galardonado 1 punto.
Si a[i] = b[i], entonces ninguna persona recibe un punto.
Ejemplo

a = [1, 2, 3]
b = [3, 2, 1]

Para los elementos *0*, Bob recibe un punto porque a[0] < b[0].
Para los elementos iguales a[1] y b[1], no se ganan puntos.
Finalmente, para elementos 2, a[2] > b[2] entonces Alice recibe un punto.
La matriz de retorno es [1, 1] con el puntaje de Alice primero y el segundo de Bob.

Función Descripción

Completa la función compararTriplets con el siguiente parámetro(s):

int a[3]: La calificación de desafío de Alice
int b[3]: La calificación de desafío de Bob
Devoluciones

int[2]: el primer elemento es el puntaje de Alice y el segundo es el puntaje de Bob
Formato de Entrada

La primera línea contiene 3 enteros separados por espacio, a[0], a[1], y a[2], los valores respectivos en triplete a.
La segunda línea contiene 3 enteros separados por espacio, b[0], b[1], y b[2], los valores respectivos en triplete b.

Restricciones

1 ≤ a[i] ≤ 100
1 ≤ b[i] ≤ 100
Entrada de Muestra 0

5 6 7
3 6 10
Salida de la muestra 0

1 1
Explicación 0

En este ejemplo:

Ahora, comparemos cada puntaje individual:

él recibe punto.
, entonces nadie recibe un punto.
, entonces Bob recibe punto.
El puntaje de comparación de Alice es y el puntaje de comparación de Bob es . Por lo tanto, devolvemos la matriz .

Entrada de Muestra 1

17 28 30
99 16 8
Salida de la muestra 1

2 1
Explicación 1

Comparando el elementos,  entonces Bob recibe un punto.
Comparando el y elementos, y  entonces Alice recibe dos puntos.
La matriz de retorno es .

*/
const comparedTriplets = (a, b) => {
  let Apoints = 0;
  let Bpoints = 0;

  const maxLength = Math.max(a.length, b.length);

  for (let i = 0; i < maxLength; i++) {
    const aValue = a[i] !== undefined ? a[i] : 0;
    const bValue = b[i] !== undefined ? b[i] : 0;

    if (aValue > bValue) {
      Apoints++;
    } else if (aValue < bValue) {
      Bpoints++;
    }
  }

  return [Apoints, Bpoints];
};
// console.log(comparedTriplets([1, 2, 3], [1, 2, 3, 4, 5]));

//📌 Una Suma Muy Grande
/* 2️⃣ 
En este desafío, debe calcular e imprimir la suma de elementos en una matriz, teniendo en cuenta que algunos enteros pueden ser muy grandes.

Función Descripción

Completa el función con el siguiente parámetro(s):

: una matriz de enteros
Devolución

: la suma de los elementos de la matriz
Formato de Entrada

La primera línea de la entrada consiste en un número entero .
La siguiente línea contiene enteros separados por espacio contenidos en la matriz.

Formato de Salida

Devuelve la suma entera de los elementos en la matriz.

Restricciones


Entrada de Muestra

STDIN                                                   Function
-----                                                   --------
5                                                       arr[] size n = 5
1000000001 1000000002 1000000003 1000000004 1000000005  arr[...]  
Salida

5000000015
Nota:

El rango del entero de 32 bits es .

Cuando agregamos varios valores enteros, la suma resultante puede exceder el rango anterior. Es posible que deba usar long int C/C++/Java para almacenar dichas sumas.
*/
const aVeryBigSum = (ar) => {
  let sum = 0;

  ar.forEach((element) => {
    sum += element;
  });
  return sum;
};
// console.log(aVeryBigSum([1232323, 473737272, 916281623, 6499271134, 8863351423]));

/*📌 Diagonal Difference */
/** 3️⃣
 * Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix  is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = . 1 + 5 + 9 = 15
The right-to-left diagonal = . 3 + 5 + 9 = 17
Their absolute difference is . [15 - 17] = 2

Function description

Complete the diagonalDiference function with the following parameter:

int arr[n][m]: a 2-D array of integers
Return

return int: the absolute difference in sums along the diagonals
Input Format

The first line contains a single integer, , the number of rows and columns in the square matrix .
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints

Sample Input

STDIN      Function
-----      --------
3           arr[][] sizes n = 3, m = 3
11 2 4     arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]]
4 5 6
10 8 -12
Sample Output

15
Explanation

The primary diagonal is:

11
   5
     -12
Sum across the primary diagonal: . 11 + 5 - 12 = 4;

The secondary diagonal is:

     4
   5
10
Sum across the secondary diagonal: 4 + 5 +10 = 19;
Difference: [4 - 19] = 15
*/
const diagonalDifference = (arr) => {
  const n = arr.length;

  let sum1 = 0;
  let sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - 1 - i];
  }

  return Math.abs(sum1 - sum2);
};
// console.log(
//   diagonalDifference([
//     [12, 45, 78, 23, 56, 89, 34, 67, 90, 21],
//     [54, 76, 32, 98, 10, 65, 87, 43, 29, 81],
//     [67, 89, 23, 45, 78, 90, 12, 34, 56, 98],
//     [43, 21, 67, 89, 12, 45, 78, 23, 56, 90],
//     [98, 76, 32, 54, 10, 65, 87, 43, 29, 81],
//     [23, 45, 78, 90, 12, 34, 56, 98, 67, 89],
//     [54, 76, 32, 98, 10, 65, 87, 43, 29, 81],
//     [67, 89, 23, 45, 78, 90, 12, 34, 56, 98],
//     [43, 21, 67, 89, 12, 45, 78, 23, 56, 90],
//     [-98, 76, 32, 54, 10, 65, 87, 43, 29, 81],
//   ])
// );

/*📌Calcule las proporciones */
/*4️⃣
Dada una matriz de enteros, calcule las proporciones de sus elementos que son positivos , negativos y zero,  Imprima el valor decimal de cada fracción en una nueva línea con 6 lugares después del decimal.

Nota: Este desafío introduce problemas de precisión. Los casos de prueba se escalan a seis decimales, aunque respuestas con error absoluto de hasta 10 -4 son aceptadas.

Ejemplo:
arr = [1, 1, 0, -1, -1]

Hay n = 5 elementos : dos positivos , dos negaticos y uno cero , Sus proporciones son 2/5 = 0.4, 2/5 = 0.4, 1/5 = 0.2 . Los resultados se imprimen como: 

***************************************************************
* 0.4                                                         *
* 0.4                                                         *
* 0.4                                                         *
***************************************************************

Imprimir

Imprima las relaciones de valores positivos, negativos y cero en la matriz. Cada valor debe imprimirse en una línea separada con 6 dígitos después del decimal. La función no debe devolver un valor.

Formato de Entrada

La primera línea contiene un número entero, n  , el tamaño de la matriz.
La segunda línea contiene n enteros separados por espacio que describen arr[n].


Entrada de Muestra

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
Salida de Muestra

0.500000
0.333333
0.166667
*/
const plusMinus = (arr) => {
  let positive = 0;
  let negative = 0;
  let zero = 0;

  arr.forEach((value) => {
    if (value < 0) negative++;
    if (value === 0) zero++;
    if (value > 0) positive++;
  });

  let result1 = positive / arr.length;
  let result2 = negative / arr.length;
  let result3 = zero / arr.length;
  let absoluteResult = [result1, result2, result3];

  absoluteResult.forEach((element) => {
    console.log(element);
  });
};
// plusMinus([1,-1 , -1, 1, 1]);
