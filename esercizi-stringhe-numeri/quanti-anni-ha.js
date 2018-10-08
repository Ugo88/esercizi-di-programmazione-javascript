/*
  Quanti anni ha?
  Scrivi un programma che prenda in input un anno di nascita e determini l'età
  della persona, calcola anche quanti anni sono necessari per raggiungere i 100. Stampa in output entrambi i risultati.
  http://www.imparareaprogrammare.it
*/

var annodinascita = 1988;
var annocorrente = 2018;
var età=annocorrente - annodinascita;
console.log('Ugo ha' + età + 'anni');
console.log('a Ugo mancano' + (100 - età) + 'anni per fare un secolo');
