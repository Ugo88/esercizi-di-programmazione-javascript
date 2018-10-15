/*
  Che giorno è oggi?
  Scrivi un programma che accetti in ingresso un numero intero compreso tra 1 a 7 e visualizzi il corrispondente giorno della settimana, esempio:
    1 => lunedì
    2 => martedì
    3 => mercoledì
    ...
    6 => domenica
  Utilizza il costrutto Switch-case, prevedi anche il caso in cui il valore immesso non sia valido, e stampare un messaggio di errore a tua scelta.

  Variante
  Scriverne una versione che anziché i giorni della settimana, visualizzi i nomi dei mesi.
  http://www.imparareaprogrammare.it
*/
var int = 20;
switch (int){
  case 1:
  console.log('Lunedì');
  break;
  case 2:
  console.log('Martedì');
  break;
  case 3:
  console.log('Mercoledì');
  break;
  case 4:
  console.log('Giovedì');
  break;
  case 5:
  console.log('Venerdì');
  break;
  case 6:
  console.log('Sabato');
  break;
  case 7:
  console.log('Domenica');
  break;
  default:
  console.log('il giorno non esiste');
}
