/*
  La funzione che sembra difficile
  Scrivi una funzione che prenda in input due numeri N e K e restituisca la k-esima cifra (partendo da destra) di N.
  Se K è maggiore del numero delle cifre di N, la funzione restituirà 0.
    Input : 123456, 3
    Output:
            4
  http://www.imparareaprogrammare.it
*/
var numero=13456;
var contatore=4;
function sembradifficile (N,K){
   var string=N.toString();
   var index=string.length - K;
   if(index>=0){
    console.log(string.charAt(index));
   }
   else {
     return 0;
   }
}
sembradifficile(numero,contatore);
