// Dichiarazione di variabili
let prezzoBiglietto, sconto, prezzoFinale;
const cifra= "€";

salva.addEventListener("click",calcola)
    
function calcola(){

    // Chiediamo il nome
    const name= document.getElementById("nome").value;
    console.log(name);

    // Chiediamo quanti chilometri deve percorrere 
    const chilometri= parseInt(document.getElementById("chilometri").value);
    console.log(chilometri);

    // Chiediamo l'età
    const userEta = document.getElementById("userEta").value;
    console.log(userEta);

    const salva= document.getElementById("salva");


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
    prezzoBiglietto = chilometri * 0.21 ;
    console.log(prezzoBiglietto);
    
    // Sconto
    bigliettoSconto = prezzoBiglietto * sconto / 100  ;
    console.log(bigliettoSconto);
    prezzoFinale = prezzoBiglietto - bigliettoSconto ;
    console.log(prezzoFinale);

    // Output
    document.getElementById("costo").innerHTML= prezzoFinale.toFixed(2) + cifra;
    document.getElementById("name-after").innerHTML= name;
}







