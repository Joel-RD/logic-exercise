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
