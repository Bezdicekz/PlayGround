// Do hranaté závorky jméno formuláře a následně jméno prvku
const formular = document.forms["prihlaseni"];
const email = document.forms["prihlaseni"]["email"];
const heslo = document.forms["prihlaseni"]["heslo"];


console.log(email.value);

let okno = document.querySelector(".okno-presvse");
let btn = document.querySelector("#odesli");

okno.style.display = "none";
console.log(okno.style);

btn.addEventListener("click", () => {
    okno.style.display = "flex";
    console.log("Kliknul jsi na tlačítko");
}
);

window.addEventListener("click", (event) => {
    if (event.target == okno) {
        okno.style.display = "none";
    }
});