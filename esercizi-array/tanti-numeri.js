/*
  Tanti numeri
  Scrivi un programma che dato un insieme di valori in un array, calcolai la media dei valori e restituisca in output tutti i valori minori della media.
  Stampa anche quanti sono i valori monori della media e quanti quelli maggiori.
  http://www.imparareaprogrammare.it
*/
var array = [1];
array.length = 100;
var i =0;
var somma = 0;

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}


for (i=0; i < array.length; i++){
array[i]= getRandomIntInclusive(1, 50);
somma = somma + array[i];
}

var media=somma / array.length;
console.log('la media è ' + media);

function minori(value){
    return value < media;
}
var minori =array.filter(minori)
console.log(minori);
console.log('i valori minori della media sono ' + minori.length);
console.log('i valori maggiori della media sono ' + (array.length - minori.length));
