/*
  Menu dei dolci
  Scrivi un programma stampi il seguente menu:
    MENU:
    1. Tiramisù
    2. Torta della nonna
    3. Cheesecake alla nutella
    4. Macedonia
  Inoltre, prenda in input il valore numerico della scelta.
  Se la scelta non è tra quelle elencate verrà stampata la scritta 'Dolce non disponibile' altrimenti verrà visualizzata la scelta effettuata 'Hai scelto il dolce X'.
  http://www.imparareaprogrammare.it
*/
console.log('MENU:');
console.log('1. Tiramisù');
console.log('2. Torta della nonna');
console.log('3. Cheesecake alla nutella');
console.log('4. Macedonia');

var scelta=1;

switch (scelta){
  case 1:
  console.log('il cliente ordina Tiramisù');
  break;
  case 2:
  console.log('il cliente ordina Torta della nonna');
  break;
  case 3:
  console.log('il cliente ordina Cheesecake alla nutella');
  break;
  case 4:
  console.log('il cliente ordina Macedonia');
  break;
  default:
  console.log('Dolce non disponibile');
}
