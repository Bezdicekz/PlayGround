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

function nakrajejZeleninu(zelenina) {
    console.log(zelenina);
}

// pou6it9 vztvo5en9 funkce s parametrem
nakrajejZeleninu("mrkev");
nakrajejZeleninu("cibuli");
nakrajejZeleninu("rajčata");


vypisCislo(5,10);
vypisCislo(10,20);
vypisCislo(20,30);
vypisCislo(55,106);
vypisJmeno();

// Sčítací funkce
function secti(a, b) {
    console.log(a + b);
}

secti(1, 2); // 3
secti(10, 20); // 30
secti(100, 200); // 300

var soucet = secti(100, 200); // 300

console.log(soucet)

// pole
let pole = [1, 2, 3, 4, 5, 6, 7];
let pole1 = ["a", "b", true, ["ahoj","nazdar"]];

console.log(pole1[2]);

// Objekt
let osoba = {
    jemno: "Tomáš",
    vek: 25,
    pravda: true,
    kolegove: ["Tomáš", "Karel", "Marie"],
    zamestnavatel: {
        holding: {
            nazev: "PPF Group",
            adresa: "Praha1",
            pocetfirem: 10,
        },
        nazev: "Google",
        adresa: "Praha6",
        pocetZamestnancu: 1000,
    },
};

console.log(osoba.jemno)
console.log(osoba.zamestnavatel.holding.nazev)

osoba.jemno = "Petr";

console.log(osoba.jemno)

let button = document.getElementById("btn");
let textovapole = document.getElementsByTagName("p");
let Odkazy = document.getElementsByTagName("a");
let Odkazy1 = document.querySelector("p:first-child");



console.log(button);
console.log(textovapole);
console.log(Odkazy);

console.log(Odkazy[2]);
console.log(Odkazy1[2]);

// Práce s objektem pomocí JS 
// Vyber objekt s ID poznamka-pod-carou 
const poznamkaPodCarou = document.getElementById("poznamka-pod-carou");

// skryjeme poznámku přepsáním CSS
// Nastavíme display na none a tím text zmizí
poznamkaPodCarou.style.display = "none"

// změna barvy tlačítka
console.log(button.style.backgroundColor = "gray"); 

console.log(button.style);

console.log(document.URL);


// Ulož si do paměti element s třídou poznamka - [0] první element s touto třídou na stránce 
const poznamka = document.getElementsByClassName("poznamka")[0];

// Vyberu první element s označením main
const hlavniObsah = document.getElementsByTagName("main")[0];

// Vytvořím nový element
const element = document.createElement("p");

// pomocí vlastností nastavíme co je třeba
element.classList.add("poznamka");

// a tady je textový obsah, který vložím
element.textContent = "Poznámka pod čarou.";

// Nakonec nový element připojíme k hlavnímu obsahu
hlavniObsah.append(element);
