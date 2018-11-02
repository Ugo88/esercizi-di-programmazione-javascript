/*
  Rombo che stampa!
  Scrivi un programma che riceva in input un numero dispari e stampi un rombo di lettere partendo dal valore, in questo modo:
    Input : 5
    Output:
            X
           XXX
          XXXXX
           XXX
            X
  Hint: per indentare puoi usare il tab con '\t'.
  http://www.imparareaprogrammare.it
*/


var diag = 5;
var MaxLettere = 1, MaxTab = diag / 2;
var ContaTab = 0;
var ContaLettere = 0;
var ContaLinee = 0;
MaxTab = Math.floor(MaxTab);
if (diag % 2 == 0){
  console.log('inserire un numero dispari');
}
else{
    while (ContaLinee < diag / 2){
      console.log(`Linea ${ContaLinee}`);
      for (ContaTab = 0; ContaTab < MaxTab; ContaTab ++){
        console.log('\t ');
      }
      for (ContaLettere = 0; ContaLettere < MaxLettere; ContaLettere ++){
      console.log('A');
      }
      ContaLinee++;
      if(MaxLettere<diag){
        MaxTab --;
        MaxLettere +=2;
      }
      else {
        break;
      }
      console.log('\n ');
    }
while (ContaLinee <= diag){

  console.log(`Linea ${ContaLinee}`);
  for (ContaTab = 0; ContaTab < MaxTab; ContaTab ++){
    console.log('\t ');
  }
  for (ContaLettere = 0; ContaLettere < MaxLettere; ContaLettere ++){
  console.log('A');
  }
  ContaLinee++;
  MaxTab ++;
  MaxLettere -=2;
  console.log('\n ');
}
}
