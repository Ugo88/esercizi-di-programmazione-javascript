/*
  Azzecca e azzera
  Scrivi un programma che dichiari un array di 100 elementi interi e lo riempia con numeri casuali da 1 a 50.
  Permetti all'utente di inserire una serie di numeri e azzera tutti i numeri nell'array principale che contengono un multiplo del numero inserito.
  Il programma termina quando tutti gli elementi dell'array principale sono uguali a zero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/

var array = [1];
array.length = 100;
var i =0;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

function isZero(numb,posiz,array2){
  return numb == 0;
}
for (i=0; i < array.length; i++){
array[i]= getRandomIntInclusive(1, 50)
}

console.log(array);
var prova = isZero();
console.log('il risultato è '+ prova);
do{
    var ins = prompt ('inserisci un numero');
  array.forEach(function (number,posizione,arrayapp){
      if (number % ins == 0){
          arrayapp[posizione] = 0;
        }
      });
      console.log(array);

}while (array.every(isZero) == false);
console.log('Stop');
