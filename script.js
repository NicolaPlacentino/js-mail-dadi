/* ESERCIZIO 1 - Gioco dei dadi
 Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
 Stabilire il vincitore, in base a chi fa il punteggio più alto.
 Stampiamo in pagina i due tiri e il risultato */

// 1. Prendo gli elementi dal DOM
const userThrow = document.getElementById('user-throw')
const cpuThrow = document.getElementById('cpu-throw')
const button = document.getElementById('button')
const winner = document.getElementById('winner')

const results = []

// 2. Creo un event listener
button.addEventListener('click', function(){
    
    results.shift()
    results.pop()

    // 3. Creo un ciclo che...
    for (let i = 0; i < 2; i++) {


        // 4. ...generi due numeri random...
        const randomNumber = Math.floor(Math.random() * 6 + 1)

        // 5. ...e li aggiunga all'array
        results.push(randomNumber)
        
    }
    
    // 6. Stampo in pagina e annuncio il vincitore
    const firstElement = results[0]
    userThrow.innerText = firstElement

    const lastElement = results[results.length - 1]
    cpuThrow.innerText = lastElement

    if (firstElement > lastElement){
        winner.innerText = 'Vince il giocatore!'
    } else if (firstElement < lastElement){
        winner.innerText = 'Vince il computer!'
    } else {
        winner.innerText = 'È un pareggio!'
    }

});


// -----------------------------------------------------------------

/*ESERCIZIO 2 - Finta Login
Inventa una lista di email autorizzate
Chiedi all’utente la sua email, con un piccolo form.
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/
