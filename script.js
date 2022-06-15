// Inizializzazione variabile bottone di invio dati
const buttonSubmit = document.querySelector("#input-submit");

buttonSubmit.addEventListener('click', function(){
    const userKm = parseInt(document.getElementById('input-userKm').value);
    const userAge = parseInt(document.getElementById('input-userAge').value);
    console.log(userKm);
    console.log(userAge);

    // Calcolo del costo del biglietto
    let userTicket = (userKm * 0.26);
    console.log(`Prezzo biglietto ${userTicket}`);

    // Condizione sull'età per ricevere lo sconto
    if (userAge < 18) {
        userTicket = (userTicket - userTicket * 15 / 100);
        console.log(`Prezzo biglietto con sconto 15% per minorenni ${userTicket}`);
    } else if (userAge >= 65) {
        userTicket = (userTicket - userTicket * 35 / 100 );
        console.log(`Prezzo biglietto con sconto 35% per over65 ${userTicket}`);
    }

    // Arrotondamento prezzo a due cifre decimali
    userTicket = userTicket.toFixed(2);
    console.log(`Prezzo biglietto arrotondato ${userTicket}€`);

    // Scrittura variabili sulla pagina
    document.getElementById('userKm').innerHTML = userKm + ' Km da percorrere';
    document.getElementById('userAge').innerHTML = userAge + ' anni';
    document.getElementById('userTicket').innerHTML = userTicket + '€';
});