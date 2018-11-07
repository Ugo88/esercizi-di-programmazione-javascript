/*
  Invertimi
  Scrivi un programma che prenda in input un numero N generi una serie di N numeri all'interno di un array, stampa la serie di numeri ma invertendola.

  Variente
  Non utilizzare array di appoggio per inversione.
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
console.log(array.reverse());
