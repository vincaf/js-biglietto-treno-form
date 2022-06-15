// Inizializzazione variabile bottone di invio dati
const buttonSubmit = document.querySelector("#input-submit");

buttonSubmit.addEventListener('click', function(){
    const userKm = parseInt(document.getElementById('input-userKm').value);
    const userAge = parseInt(document.getElementById('input-userAge').value);
    console.log(userKm);
    console.log(userAge);

    // Calcolo del costo del biglietto
    let userTicket = (userKm * 0.26);
    console.log(userTicket);
});