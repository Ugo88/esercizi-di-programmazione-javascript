/*
  Vinci tu!
  Scrivi un programma che simula un gioco di dadi tra due utenti, prendi in input il numero di quanti tiri effettuare
  per ciascun giocatore (N), dopodiché ogni utente tira N volte un dado a sei facce.
  Stampa il vincitore che ha totalizza più punti.
  http://www.imparareaprogrammare.it
*/
var  min=1, max=6;
var tiri=1000, risultatoprimo=0, risultatosecondo = 0;
var i=1, y=0;
do{
  function getRandomInt(min, max) {
//usare ceil e floor per assicurarsi che i numeri siano degli interi
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min+1)) + min; //The maximum is inclusive and the minimum is inclusive
}
if (i<= tiri)
risultatoprimo=risultatoprimo + getRandomInt(min, max);
else
risultatosecondo=risultatosecondo + getRandomInt(min, max);

i++;
}while (i<=(2*tiri))
console.log(`il primo concorrente ha fatto ${risultatoprimo} `);

/*
POSSO ANCHE DUPLICARE I DO INVECE DI FARE IF PRECEDENTE
do{
  function getRandomInt(min, max) {
//usare ceil e floor per assicurarsi che i numeri siano degli interi
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min+1)) + min; //The maximum is inclusive and the minimum is inclusive
}
risultatosecondo=risultatosecondo + getRandomInt(min, max);
y++;
}while (y<tiri)*/
console.log(`il secondo concorrente ha fatto ${risultatosecondo} `);

if (risultatoprimo<risultatosecondo)
console.log('il secondo ha vinto');
else if (risultatoprimo>risultatosecondo)
console.log('il primo ha vinto');
else
console.log('pareggio');
