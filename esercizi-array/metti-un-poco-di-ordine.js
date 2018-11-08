/*
  Metti un po' d'ordine
  Scrivi un programma che data un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente.

  Variante
  Prova ad ordinali in modo crescente.
  http://www.imparareaprogrammare.it
*/
var array = [];
array.length = 10;
var i =0;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

var  minimum= Number.MIN_SAFE_INTEGER;
var  maximum= Number.MAX_SAFE_INTEGER;
for (i=0; i < array.length; i++){
array[i]= getRandomIntInclusive(minimum, maximum);
}
console.log(array);
var cresc=array.sort();
console.log(cresc);
var decresc=cresc.reverse();
console.log(decresc);
