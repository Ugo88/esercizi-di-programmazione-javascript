/*
  Tick, tack, timer!
  Scrivi un programma che dato un numero in input, stampi il conto alla rovescia a partire dal numero acquisito.
    Input : 5
    Output:
            4
            3
            2
            1
            0
  http://www.imparareaprogrammare.it
*/
function timer (number){
        while (number > 0){
          number--;
          console.log(number);
        }
        }

var x = 5;
console.log(timer (x));
