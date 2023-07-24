//variabili numeri
const userNumber = parseInt (Math.random() * 6) + 1
const computerNumber = parseInt (Math.random() * 6) + 1


//controllo risultati
if (userNumber > computerNumber) {
    console.log("l'utente ha vinto!");
}
else if (userNumber < computerNumber){
    console.log("il computer ha vinto!");
}
else{
    console.log("il risultato è pari!");
}
console.log("numero dell'utente: ",userNumber);
console.log("numero del computer: ",computerNumber);