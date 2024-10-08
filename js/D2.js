/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num1 = 50;
const num2 = 105;

if (num1 > num2) {
  console.log("num1", num1, "è più grande di num2", num2);
} else {
  console.log("num2", num2, "è più grande di num1", num1);
}
/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (num1 !== 5) {
  console.log("not equal");
} else {
  console.log("is equal");
}
/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
if (num1 % 5 === 0) {
  console.log("divisibile per 5");
} else {
  console.log("non divisibile per 5");
}
/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num3 = 3;
const num4 = 5;

if (num3 === 8 || num4 === 8) {
  console.log("uno dei due valori è uguale a 8");
} else if (num3 + num4 === 8 || num3 - num4 === 8 || num4 - num3 === 8) {
  console.log("la somma o la sottrazione tra i due numeri è uguale a 8");
} else {
  console.log("nessuna condizione soddisfa la richiesta");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ---- TOGLI QUESTO COMMENTO PER PROVARE IL CODICE SINGOLO
let totalShoppingCart = 70;

if (totalShoppingCart >= 50) {
  //ho inserito maggiore o uguale solo per comodità e per seguire la logica del flow. altrimenti inserire 50 darebbe un console.log inappropriato//
  console.log("Hai diritto alla spedizione gratuita");
} else {
  totalShoppingCart += 10;
  console.log(
    "Il tuo carrello ha un valore inferiore a 50 euro, sono stati aggiunti 10 euro di costi di spedizione al totale, per un valore di",
    totalShoppingCart
  );
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const isBlackFriday = true;
let totalShoppingCart = 70;

if (isBlackFriday) {
  const discount = (totalShoppingCart * 20) / 100;
  totalShoppingCart -= discount;
}
console.log(" il valore del carrello dopo lo sconto è", totalShoppingCart);
if (totalShoppingCart >= 50) {
  //ho inserito maggiore o uguale solo per comodità e per seguire la logica del flow. altrimenti inserire 50 darebbe un console.log inappropriato//
  console.log("Hai diritto alla spedizione gratuita");
} else {
  totalShoppingCart += 10;
  console.log(
    "Il tuo carrello ha un valore inferiore a 50 euro, sono stati aggiunti 10 euro di costi di spedizione al totale, per un valore di",
    totalShoppingCart
  );
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const var1 = 3;
const var2 = 8;
const var3 = 12;

if (var1 >= var2 && var1 >= var3) {
  if (var2 >= var3) {
    console.log("1:", var1, "2:", var2, "3:", var3);
  } else {
    console.log("1:", var1, "2:", var3, "3:", var2);
  }
} else if (var2 >= var1 && var2 >= var3) {
  if (var1 >= var3) {
    console.log("1:", var2, "2:", var1, "3:", var3);
  } else {
    console.log("1:", var2, "2:", var3, "3:", var1);
  }
} else {
  if (var1 >= var2) {
    console.log("1:", var3, "2:", var1, "3:", var2);
  } else {
    console.log("1:", var3, "2:", var2, "3:", var1);
  }
}
/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const var5 = 14;

if (typeof var5 === "number") {
  console.log("La variabile è un", typeof var5);
} else {
  console.log("la variabile non è un number");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const num5 = 13;

if (num5 % 2 == 0) {
  console.log("Il numero è pari");
} else {
  console.log("Il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 7;
if (val < 10 && val > 5) {
  console.log("Meno di 10 ma superiore a 5");
} else if (val < 5) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

me.city = "Toronto";
console.log(me.city);
/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me.lastName);
/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(me.skills);
me.skills.pop; // CHIEDI PERCHè NON FUNZIONA
delete me.skills[2];
console.log(me.skills);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myArray = [];
console.log(myArray);
myArray.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(myArray);
/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myArray.splice(myArray.length - 1, 1, 100); // prima indichi la posizione, poi il numero di elementi da eliminare, poi il valore da inserire//
console.log(myArray);
