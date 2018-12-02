/*
  I primi numeri… primi!
  Scrivi una funzione che prenda in input un numero e restituisca TRUE se è un numero primo, FALSE altrimenti.
  Scrivi una seconda funzione, che prenda in input un numero N e stampi i primi N numeri primi. Per farlo puoi
   richiamare la prima funzione.
    Input : 5
    Output:
            2
            3
            5
            7
            11
  http://www.imparareaprogrammare.it
*/
function primi (input){
  var start = 2;
  while (start <= Math.sqrt(input)){
    if(input%start == 0){
      return false;
    }
    start++;
  }
  return true;
}
var numero=5;
console.log(primi(numero));
var numeriprimi = 6;
function elencoprimi (N){
  var count = 1;
  numero =1;
    do{
      if(primi(numero)==true){
        console.log(numero);
        count++;
      }
      numero++;
    }while(count <= N)
}
elencoprimi(numeriprimi);
