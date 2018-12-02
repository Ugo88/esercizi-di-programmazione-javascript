/*
  Pa-pa-pa lindomo
  Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.
  Nel controllo scarta gli spazi e i segni di punteggiatura.
    Input : i topi non avevano nipoti
    Output:
            TRUE
  Hint: puoi eliminare spazi e segni di punteggiatura usando le espressioni regolarie e il metodo del tipo stringa chiamato replace, in questo modo: str.replace(/\W/g, "")
  http://www.imparareaprogrammare.it
*/
var palind='itopinonavevanonipoti';
function palindroma (name){
  var k=name.length-1;
  for(var n=0; n<=(name.length/2);n++){
    if (name.charAt(n)!==name.charAt(k)){
      return false;
  }
  k--;
  }
  return true;
}
console.log(palindroma(palind));
