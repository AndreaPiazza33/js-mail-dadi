//lista email
const emailList = ["a@email.com","b@email.com","c@email.com","d@email.com","e@email.com"]

//richiesta utente
const userEmail = prompt("inserisci la tua email")


//controllo email
if ((userEmail =="a@email.com") || (userEmail =="b@email.com") || (userEmail =="c@email.com") || (userEmail =="d@email.com") || (userEmail =="e@email.com")) {
    alert("la tua email ha ottenuto l'accesso")
    console.log(userEmail);
}
else {
    alert("la tua email NON ha ottenuto l'accesso")
}

