// Carrello e sconti particolari

/*
Oggi il tuo compito è creare la logica per un sito di e-commerce che deve supportare sconti extra per utenti speciali.
A partire da una lista di prezzi, un utente e un costo di spedizione l'algoritmo deve determinare il costo totale del carrello.
ATTENZIONE! Gli argomenti di questa settimana sono cruciali per lo svolgimento di un lavoro di un developer (il 90% del dati che maneggerai saranno array di oggetti!!) quindi 
assicurati di COMPRENDERE la logica. Se ti trovi in difficolta', scrivi ad un membro del teaching staff! :) 

Se l'utente ha la proprietà "isAmbassador" con valore true, il carrello deve venire scontato del 30%, PRIMA di calcolare la spedizione (anche gli utenti speciali pagano le spedizioni).
Se l'utente ha la proprietà "isAmbassador" con valore false, il carrello NON deve venire scontato.
In entrambi i casi, la spedizione è gratuita per ogni carrello con costo superiore a 100. Altrimenti, aggiungi il valore fornito per coprire il costo della spedizione.

In basso troverai degli esempi di utenti, una lista prezzi e un costo fisso di spedizione.
Crea un array di utenti (usando .push) e stampa, per ogni utente (quindi con un loop) la frase "NOMEUTENTE COGNOMEUTENTE e' / non e' un ambassador" basandoti sui dati contenuti nell'oggetto. 
ES. L'utente Marco Rossi e' un ambassador, quindi la frase dovrebbe essere "Marco Rossi e' un ambassador"
Infine, crea un SECONDO array in cui inserirai SOLO gli ambassador.
*/

// UTENTI

const marco = {
    name: "Marco",
    lastName: "Rossi",
    isAmbassador: true,
  }
  
  const paul = {
    name: "Paul",
    lastName: "Flynn",
    isAmbassador: false,
  }
  
  const amy = {
    name: "Amy",
    lastName: "Reed",
    isAmbassador: false,
  }

  // COSTI E PREZZI

  const prices = [34, 5, 2];
  const shippingCost = 50;
  let utenteCheEffettuaLAcquisto = marco; 
  let costoTotaleCarrello = 0;

  //calcolare il costo totale del carrello, prezzi elencati in prices.

  for (let i = 0; i < prices.length; i++){
    costoTotaleCarrello = costoTotaleCarrello + prices[i];
    
  }
  console.log(costoTotaleCarrello);

  // applicare lo sconto solo agli ambassador del 30%

  if ( utenteCheEffettuaLAcquisto.isAmbassador ){
    costoTotaleCarrello = costoTotaleCarrello * 0.7;
  }

  if (costoTotaleCarrello <= 100){    
    costoTotaleCarrello += shippingCost ;
  }

  console.log(costoTotaleCarrello);

  // crea un array utenti, e aggiungi tutti gli utenti con push, poi con un ciclo in modo che stampi quello richiesto.

  let utenti = [];
  utenti.push( marco, paul, amy);

  console.log(utenti);

  for (let i = 0; i < utenti.length; i++){
    let lista = `${utenti[i].name} ${utenti[i].lastName} `
  
      if (utenti[i].isAmbassador)
      {
        lista += "è"
      } else{
        lista += "non è"
      }

      lista += " un ambassador"

    console.log(lista);
  }
  
  let utentiAmbassador = [];

  for( let i = 0; i < utenti.length; i++){
    if (utenti[i].isAmbassador){
      utentiAmbassador.push(utenti[i])
    }
  }

  console.log(utentiAmbassador);



