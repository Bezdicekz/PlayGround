console.log("Toto jsou proměnné:");
let nazev = "Zdeněk";
var vek = 47;
let pravda = true;
let vek2 = 10;

console.log(nazev);
console.log(vek);
console.log(pravda);

console.log(vek2 + vek); // Sčítání věku

let nazev2 ="Bezdíček";

console.log(nazev + " " + nazev2);

const konstanta = 10;

console.log(konstanta);

// funkce s parametry - prázdné závorky
function vypisCislo(cislo,cislo2) {
    console.log("Číslo 1: " + cislo);
    console.log("Číslo 2: " + cislo2);
    console.log("Součet: " + cislo + cislo2);
}

// použití vytvoření funkce - tzn. volání
vypisCislo();

function vypisJmeno() {
    console.log("Zdeňku");
}

vypisCislo(5,10);
vypisCislo(10,20);
vypisCislo(20,30);
vypisCislo(55,106);
vypisJmeno();