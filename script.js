// Inizializzazione variabile bottone di invio dati
const buttonSubmit = document.querySelector("#input-submit");

buttonSubmit.addEventListener('click', function(){
    console.log(document.getElementById('input-userKm').value);
    console.log(document.getElementById('input-userAge').value);
});

// Conversione dei dati in numeri interi
const userKm = parseInt('input-userKm');
const userAge = parseInt('input-userAge');
console.log(userKm);
console.log(userAge);

// Calcolo del costo del biglietto
let userTicket = (userKm * 0.26);
console.log(userTicket);