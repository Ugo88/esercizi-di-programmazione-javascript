/*
  Il genio delle date
  Scrivi una funzione che prenda in input due argomenti, il Giorno e il Mese. La funzione deve restituire il numero del giorno compreso tra 1 e 366.
    Input : 5, 2
    Output:
            36

  Hint: puoi definire un array con i giorni di ogni mese e ciclarlo.
  http://www.imparareaprogrammare.it
*/
var giorno=30;
var mese=10;
function calendario (day, month){
  var mesidellanno=[31,28,31,30,31,30,31,31,30,31,30,31];
  var somma=0;
  for (var i=0; i<month-1;i++){
    somma+=mesidellanno[i];
  }
  somma+=day;
  return somma;
}

console.log(calendario(giorno,mese));
