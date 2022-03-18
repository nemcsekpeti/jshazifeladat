var kep = [
  {
    cim: "Első kép címe",
    ar: 2345,
    eleresiUt: "kepek/kep1.jpg",
  },
  {
    cim: "2 kép címe",
    ar: 15432,
    eleresiUt: "kepek/kep2.jpg",
  },
  {
    cim: "3. kép címe",
    ar: 2333,
    eleresiUt: "kepek/kep3.jpg",
  },
];

/**FŐPROGRAM */
var atlagom = atlagAr();
console.log(atlagom);

var vane=vaneDragabbMint10000();
if (vane) {
    console.log("van");
  } else {
    console.log("nincs");
  }
kisebbekMint10000();

/**Függvények */

function atlagAr() {
  /* Mennyi a képek átlagára? */
  var osszeg = 0;
  for (let index = 0; index < kep.length; index++) {
    osszeg = osszeg + kep[index].ar;
  }
  var atlag = osszeg / kep.length;
  return atlag;
}

function vaneDragabbMint10000() {
  /**Van-e 10.000-nél  drágább kép? */
  let index = 0;
  while (index < kep.length && !(kep[index].ar > 10000)) {
    index++;
  }
  var vane = index < kep.length;

  return vane;
}

function kisebbekMint10000() {
  /**Írd ki azon képek címét, melyek ára 10.000nél kisebb */
  var kisebb10000 = [];
  for (let index = 0; index < kep.length; index++) {
    if (kep[index].ar < 10000) {
      kisebb10000.push(kep[index].cim);
    }
  }
  /**kiírás */
  for (let index = 0; index < kisebb10000.length; index++) {
    console.log(kisebb10000[index]);
  }

  /**Írd ki azon képek címét, melyek ára 10.000nél kisebb */
  kisebb10000 = [];
  index = 0;
  while (index < kep.length) {
    if (kep[index].ar < 10000) {
      kisebb10000.push(kep[index].cim);
    }

    index++;
  }
  /**kiírás */
  for (let index = 0; index < kisebb10000.length; index++) {
    console.log(kisebb10000[index]);
  }
}

/**objektumok */

var szemely = {
  nev: "Géza",
  kor: 34,
  gyerekek: ["Juci", "Teri", "Sári"],
};
var szemely2 = {
  nev: "Béla",
  kor: 38,
  gyerekek: ["Gábor"],
};

console.log(szemely);

szemely.nem = "férfi";
console.log(szemely);

szemely.nev = "Jolán";
console.log(szemely);

delete szemely.nev;
console.log(szemely);

var szemelyek = [
  {
    nev: "Géza",
    kor: 34,
    gyerekek: ["Juci", "Teri", "Sári"],
  },
  {
    nev: "Béla",
    kor: 38,
    gyerekek: [szemely, szemely2],
  },
];

console.log(szemelyek[1].nev);
