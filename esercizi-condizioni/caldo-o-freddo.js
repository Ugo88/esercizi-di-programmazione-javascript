/*
  Caldo o freddo
  Scrivi un programma che prenda in input sette valori relativi alle temperature della settimana e stabilisca la giornata più calda e quella più fredda.
  http://www.imparareaprogrammare.it
*/
var mon = 25, tue = 30, wed = 28, thu= 29, fri = 31, sat = 30, sun = 28;
x = Math.max (mon, tue, wed, thu, fri, sat, sun);
y = Math.min (mon, tue, wed, thu, fri, sat, sun);
switch (x){
  case mon:
  console.log('Il giorno più caldo della settimana è Lunedì');
  break;
  case tue:
  console.log('Il giorno più caldo della settimana è Martedì');
  break;
  case wed:
  console.log('Il giorno più caldo della settimana è Mercoledì');
  break;
  case thu:
  console.log('Il giorno più caldo della settimana è Giovedì');
  break;
  case fri:
  console.log('Il giorno più caldo della settimana è Venerdì');
  break;
  case sat:
  console.log('Il giorno più caldo della settimana è Sabato');
  break;
  case sun:
  console.log('Il giorno più caldo della settimana è Domenica');
}
switch (y){
  case mon:
  console.log('Il giorno più freddo della settimana è Lunedì');
  break;
  case tue:
  console.log('Il giorno più freddo della settimana è Martedì');
  break;
  case wed:
  console.log('Il giorno più freddo della settimana è Mercoledì');
  break;
  case thu:
  console.log('Il giorno più freddo della settimana è Giovedì');
  break;
  case fri:
  console.log('Il giorno più freddo della settimana è Venerdì');
  break;
  case sat:
  console.log('Il giorno più freddo della settimana è Sabato');
  break;
  case sun:
  console.log('Il giorno più freddo della settimana è Domenica');
}
