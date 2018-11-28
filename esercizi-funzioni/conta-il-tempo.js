/*
  Conta il numero
  Scrivi una funzione che prenda in input un numero intero e restituisca il numero di cifre presenti.
    Input : 9999
    Output:
            4
  Hint: puoi convertire il tipo di dato
  http://www.imparareaprogrammare.it
*/
var x=9999;

function lunghezza (number){
            var y= number.toString(10);
            var z= y.length;
            return z;
            }

console.log(lunghezza(x));
