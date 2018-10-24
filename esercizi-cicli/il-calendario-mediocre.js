/*
  Il calendario mediocre
  Scrivi un programma che stampi il calendario di un mese, ricevi in input:
    - Il numero di giorni nel mese
    - Il giorno della settimana in cui questo comincia (0: lunedì ... 6: domenica)

  Variante
  Piuttosto che passarein input i giorni del mese passa direttamente il mese e calcola tu i giorni corrispondenti.
  http://www.imparareaprogrammare.it
*/
var giorni=28, giorno=3, data=1;

do{
  var settimana=giorno%7;
    switch (settimana){
    case 0:
    console.log(`Lunedì ${data}`);
    break;
    case 1:
    console.log(`Martedì ${data}`);
      break;
    case 2:
    console.log(`Mercoledì ${data}`);
      break;
    case 3:
    console.log(`Giovedì ${data}`);
      break;
    case 4:
    console.log(`Venerdì ${data}`);
      break;
    case 5:
    console.log(`Sabato ${data}`);
      break;
    case 6:
    console.log(`Domenica ${data}`);
      break;
  }
giorno++;
data++;
}while(data<=giorni)
