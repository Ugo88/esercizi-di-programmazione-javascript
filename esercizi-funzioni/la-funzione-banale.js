/*
  La funzione banale
  Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca 'Vero' se i due argomenti sono identici, altrimenti 'Falso'.
  http://www.imparareaprogrammare.it
*/
function trueFalse (first,second){
    if(first == second){
          console.log('vero');
    }
    else{
          console.log('falso');
    }
}

var primo = prompt ('inserisci il primo argomento');
var secondo = prompt ('inserisci il secondo argomento');

trueFalse (primo,secondo)
