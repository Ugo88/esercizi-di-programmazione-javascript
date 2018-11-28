/*
  Fai il sensitivo
  Scrivi una funzione che calcoli la vicinanza tra tre argomenti numerici, A, B e N, e restituisca:
    - 0 Se A e B sono equidistanti da N
    - 1 Se B è più vicino a N rispetto ad A
    - -1 Se A è più vicino a N rispetto a B: restituis

  Variante
  Utilizza questa funzione per creare un programma che simuli un gioco tra due utenti: vince chi indovina per primo il numero N che verrà generato casualmente tra 1 e 100.
  http://www.imparareaprogrammare.it
*/
var primo = 15;
var secondo = 11;
var riferimento = 30; //per la variante mettere qui un random e definire le due variabili sopra come prompt di comandi
function sensitive (a,b,n){
    var distA= Math.abs(a-n);
    var distB= Math.abs(b-n);
    var winner=0;
    if(distA > distB){
        winner=1;
    }
    else if (distA < distB){
        winner=-1;
    }
    return winner;
}
switch (sensitive(primo,secondo,riferimento)){
    case 0:
    console.log('Pareggio');
    break;
    case 1:
    console.log('Ha vinto il secondo giocatore');
    break;
    case -1:
    console.log('Ha vinto il primo giocatore');
}
