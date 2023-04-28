// Dichiarazione di variabili
let numeroKm , eta , prezzoBiglietto, sconto, prezzoFinale;
const cifra= "€";

// Chiediamo quanti chilometri deve percorrere 
function chilometri(){
    document.getElementById("km").value="";
}

// Chiediamo l'età
function laMiaEta(){
    document.getElementById("eta").value="";
}

if (laMiaEta <= 18) {
    // Sconto per minorenni
    sconto = 20;
    
} else if (laMiaEta >= 65) {
    // Sconto per over 65
    sconto = 40;
    
} else{
   sconto=0
}

console.log(sconto);

// Prezzo del biglietto 
prezzoBiglietto = chilometri * 0.21 ;
console.log(prezzoBiglietto);

// Sconto
bigliettoSconto = prezzoBiglietto * sconto / 100  ;
console.log(bigliettoSconto);

prezzoFinale = prezzoBiglietto - bigliettoSconto ;
console.log(prezzoFinale);


document.getElementById("costo").innerHTML= prezzoFinale.toFixed(2) + cifra;

