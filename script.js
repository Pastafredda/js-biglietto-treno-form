// Dichiarazione di variabili
let prezzoBiglietto, sconto, prezzoFinale;
const cifra= "€";
const chilometri= document.getElementById("chilometri");
const userEta = document.getElementById("userEta");
const salva= document.getElementById("salva");

// Chiediamo quanti chilometri deve percorrere 
document.getElementById("chilometri").value="";
console.log(chilometri);

// Chiediamo l'età
document.getElementById("userEta").value="";
console.log(userEta);

salva.addEventListener("click",
    
)




if (userEta <= 18) {
    // Sconto per minorenni
    sconto = 20;
    
} else if (userEta >= 65) {
    // Sconto per over 65
    sconto = 40;
    
} else{
   sconto=0
}

console.log(sconto);

// Prezzo del biglietto 


// Sconto
bigliettoSconto = prezzoBiglietto * sconto / 100  ;
console.log(bigliettoSconto);

prezzoFinale = prezzoBiglietto - bigliettoSconto ;
console.log(prezzoFinale);


document.getElementById("costo").innerHTML= prezzoFinale.toFixed(2) + cifra;

