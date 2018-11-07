/*
  La tombola magica
  Scrivi un programma che dichiari un array di 5 elementi e vi inserisca casualmente i valori da 1 a 90 senza ripetizioni.
  Permetti all’utente di effettuare una partita scegliendo 5 numeri a suo piacimento e verifica quanti sono presenti nella array principale, restituisci un risultato del tipo:
    1 numero uguale => estratto
    2 numeri uguali => ambo
    3 numeri uguali => terno
    4 numeri uguali => quaterna
    5 numeri uguali => cinquina
  In caso di vittoria dovrà essere stampato un messaggio adeguato a tua scelta, in caso di perdina dovrà essere concesso un nuovo tentativo senza una nuova estrazione.
  Hint: Per generare un numero casuale utlizza la funzione javascript random, restituisce un intervallo compreso tra 0 e 1 che necessita di essere convertito per il tuo intervallo.
  http://www.imparareaprogrammare.it
*/
var array = [1];
array.length = 5;
var i=0, y=0;
var uguali=0;
//riempire casualmente un array
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

do{
    do{ //controllo su unicità degli elementi di un array
        var nuovo = getRandomIntInclusive(1, 90);
        if (array[y] != nuovo){
            array [i] = nuovo;
            y++;
        }
        else {
          break;
        }
      }while (y<i);
  i++;
  y=0;
 }while (i < array.length)

 console.log('i numeri estratti sono ' + array);

 for (i=0; i< array.length; i++){
      var ins = prompt ('scegli un numero');
          if (ins==array[i]){
            uguali++;
          }
 }

 console.log('hai indovinato ' + uguali + ' numeri');
