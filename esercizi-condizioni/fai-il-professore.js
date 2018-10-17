/*
  Fai il professore
  Scrivi un programma che converte un voto numerico in un giudizio seguendo questi parametri:
    v < 18:  insufficiente
    18 < = v <21:  sufficiente
    21 < = v <24:  buono
    24 < = v <27:  distinto
    27 < = v <29:  ottimo
    v = 30:  eccellente
  Utilizza costrutto If.

  Variante
  Realizzare una versione con il costrutto Switch-Case.
  http://www.imparareaprogrammare.it
*/
var voto=29;
/*
COSTRUTTO IF-ELSE IF

if (voto < 18)
console.log('insufficiente');
else if (18<=voto  && voto<21)
console.log('sufficiente');
else if (21<=voto && voto<24)
console.log('buono');
else if (24<=voto && voto<27)
console.log('distinto');
else if (27<=voto && voto<30)
console.log('ottimo');
else if (voto == 30)
console.log('eccellente');
*/

//COSTRUTTO SWITCH CASE, uso true tra parentesi perché devo confrontare delle condizioni tra di loro
switch (true) {
  case voto <18:
  console.log('insufficiente');
  break;
  case 18<=voto  && voto<21:
  console.log('sufficiente');
  break;
  case 21<=voto  && voto<24:
  console.log('buono');
  break;
  case 24<=voto  && voto<27:
  console.log('distinto');
  break;
  case 27<=voto  && voto<30:
  console.log('ottimo');
  break;
  case 30:
  console.log('eccellente');
  break;
  default:
  console.log('voto non accettabile')
}
