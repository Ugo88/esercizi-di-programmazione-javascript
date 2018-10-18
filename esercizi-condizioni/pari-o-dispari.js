/*
  Pari o dispari?
  Scrivi un programma che prenda in input un numero intero e restituisca 0 se è pari o 1 se è dispari.
  http://www.imparareaprogrammare.it
*/
var num = 197;
num = Math.round(num);
if ((num%2) == 0)
console.log('il numero è pari');
else
console.log('il numero è dispari');
