// Inizializzazione variabile bottone di invio dati
const buttonSubmit = document.querySelector("#input-submit");

buttonSubmit.addEventListener('click', function(){
    console.log(document.getElementById('input-userKm').value);
    console.log(document.getElementById('input-userAge').value);
});

// Conversione dei dati in numeri interi
const userKm = parseInt(document.querySelector("#input-userKm"));
const userAge = parseInt(document.querySelector("#input-userAge"));
console.log(userKm);
console.log(userAge);