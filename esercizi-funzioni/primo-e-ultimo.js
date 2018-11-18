/*
  Primo e ultimo
  Scrivi due funzioni, una che prenda in input tre numeri e restituisca il maggiore, l'altra che restituisca il minore.

  Variante
  Scrivi due funzioni che prendano in input un array di numeri, una funzione deve restituire il valore maggiore contenuto nell'array, l'altra il valore minore.
  http://www.imparareaprogrammare.it
*/

/*
//primo esercizio
function max(first,second,third){
        console.log(Math.max(first,second,third));
}
function min(first,second,third){
        console.log(Math.min(first,second,third));
}

var primo = prompt ('inserisci il primo numero ');
var secondo = prompt ('inserisci il secondo numero');
var terzo = prompt ('inserisci il terzo argomento');

min(primo,secondo,terzo);
max(primo,secondo,terzo)
*/

//secondo esercizio
var listanumeri =  [0,3,6];

function maxarray(array){
      return Math.max(...array);
        }

function minarray(array){
      return Math.min(...array);
        }
var maximum = maxarray(listanumeri);
var minimum = minarray(listanumeri);

console.log(`il numero massimo dell'array è ${maximum}`);
console.log(`il numero minimo dell'array è ${minimum}`);
