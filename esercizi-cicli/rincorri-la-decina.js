/*
  Rincorri la decina
  Scrivi un programma che che stampi i numeri da 1 a 100 andando a capo ogni 10.
  Hint: per andare a capo stampa '\n'.
  http://www.imparareaprogrammare.it
*/
var num = 1;
var count=0;
while (num<=100){
  console.log(num);
  num ++;
  count++;
  if ((count%10)==0){
    console.log('\n');
  }
}
