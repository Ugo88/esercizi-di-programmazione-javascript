/*
  La difficoltà del fattoriale
  Scrivi una funzione che calcoli in maniera iterativa (usando un ciclo) il fattoriale di un numero preso in input.
    Input : 5
    Output:
            120
  Hint: 5! = 5*4*3*2*1
  http://www.imparareaprogrammare.it
*/

function fattoriale (number){
        risultato = 1;
        do{
            risultato = risultato*number;
            number--;
        }while (number > 0)
        return risultato;
        }

var x = 5;
console.log(fattoriale (x));
