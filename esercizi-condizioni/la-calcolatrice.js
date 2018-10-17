/*
  La calcolatrice
  Scrivi un programma che prenda tre input:
    - Due numeri
    - Una stringha che identifichi l'operazione da eseguire, es: "somma"
  Le operazioni supportate sono le suguenti:
    somma => +
    sottrazione => -
    moltiplicazione => *
    divisione => /
    modulo (solo tra interi) => %
    potenza => ^
    media => m
  Utilizza il costrutto Switch-Case mediante acquisizione di caratteri.
  http://www.imparareaprogrammare.it
*/

var n1=25, n2=24;
var operazione= 'divisione';

switch (operazione){
  case 'somma':
  console.log(n1 + n2);
  break;
  case 'sottrazione':
  console.log(n1 - n2);
  break;
  case 'moltiplicazione':
  console.log(n1 * n2);
  break;
  case 'divisione':
  console.log(n1 / n2);
  break;
  case 'modulo':{
                  if (Number.isInteger(n1) && Number.isInteger(n2))
                  console.log(n1 % n2);
                 else
                  console.log('Operazione non possibile');
                }
  break;
  case 'potenza':
  console.log(n1 ^ n2);
  break;
  case 'media':
  console.log((n1 + n2)/2);
  break;
  default:
  console.log('operazione non esistente');
}
