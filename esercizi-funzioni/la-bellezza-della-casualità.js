/*
  La bellezza della casualità
  Scrivi una funzione che prenda in input un numero e restituisca un numero casuale compreso tra 0 e l'argomento passato.
  http://www.imparareaprogrammare.it
*/
function getRandomIntInclusive(max) {
  var min = 0;
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}
var massimo=10;
console.log(getRandomIntInclusive(10));
