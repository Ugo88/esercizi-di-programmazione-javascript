/*
  Conta il tempo
  Scrivi un programma che prenda in input un numero di secondi e calcoli la quantità di ore, minuti e secondi corrispondenti, poi stampa il risultato. L'output avrà solo numeri interi.
  Esempio
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.
  http://www.imparareaprogrammare.it
*/

var numsecondi = 160;
var ore = Math.round(numsecondi/3600);
var numsecondi = numsecondi%3600;
var minuti = Math.round(numsecondi/60);
var numsecondi = numsecondi%60;

console.log('i secondi corrispondono a ' + ore + ' ore, ' + minuti + ' minuti e ' + numsecondi + ' secondi.');
