/*
  Operazioni tra array
  Scrivi un programma che dichiari 2 array di 10 elementi interi e li riempia con numeri casuali da 1 a 10.
  Il programma prende in input dall'utente il tipo di operazione aritmetica da effettuare, una delle seguenti:
    addizione
    sottrazione
    moltiplicazione
    divisione
  Ed esegue il calcolo tra ogni elemento dei due array salvando ciascun risultato in un terzo array di appoggio.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/
var array1 = [], array2 = [], risultato=[];
array1.length = 10;
array2.length = array1.length;
var i =0;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
for (i=0; i < array1.length; i++){
array1[i]= getRandomIntInclusive(1, 10);
array2[i]= getRandomIntInclusive(1, 10);
}
console.log(array1);
console.log(array2);
var ins = prompt ('inserisci operazione');

switch (ins){
    case 'addizione':
        for (i=0; i < array1.length; i++){
        risultato[i] = array1 [i] + array2 [i];
        }
        break;
    case 'sottrazione':
        for (i=0; i < array1.length; i++){
        risultato[i] = array1 [i] - array2 [i];
        }
        break;
    case 'moltiplicazione':
        for (i=0; i < array1.length; i++){
        risultato[i] = array1 [i] * array2 [i];
        }
        break;
    case 'divisione':
        for (i=0; i < array1.length; i++){
        risultato[i] = array1 [i] / array2 [i];
        }
        break;
    default:
    console.log('operazione non valida');
}

console.log(risultato);
