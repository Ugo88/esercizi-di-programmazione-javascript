/*
  Chi l'azzecca?
  Scrivi un programma che generi un numero casuale compreso tra 1 e 100 (zero escluso).
  Successivamente prendi in input altri due numeri di due ipotetici utenti, e comunica
  se uno dei due ha azzeccato il numero casuale, in caso contrario quale dei due si è avvicinato di più al numero.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, che restituisce un intervallo compreso
   tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/
var min=1;
var max=100;
function getRandomInt(min, max) {
//usare ceil e floor per assicurarsi che i numeri siano degli interi
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min+1)) + min; //The maximum is inclusive and the minimum is inclusive
}

var risultato=getRandomInt(min,max);
console.log('il risultato è '+risultato);

var risp1 = 24;
var risp2 = 2;
var dr1 = Math.abs(risultato - risp1);
var dr2 = Math.abs(risultato - risp2);
// controllo se uno dei due valori è uguale a risultato
if (risp1 == risp2 == risultato)
console.log('Entrambi hanno indovinato');
else if (risp1 == risultato && risp1!= risp2)
console.log('Il primo ha indovinato');
else if (risp2 == risultato && risp1!= risp2)
console.log('il secondo ha indovinato');
else if (risp1 == risp2 && risp1 != risultato && risp2 != risultato)
console.log('nessuno ha indovinato ed il risultato è pari');
//se nessuno ha indovinato controllo chi si è avvicinato di più
else if (risp1 != risultato && risp2 != risultato){
    if (dr1 > dr2)
    console.log('Il secondo si è avvicinato');
    else
    console.log('il primo si è avvicinato');
}
