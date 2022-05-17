const nomeUtente = prompt ("Quale è il suo nome?");
const cognomeUtente = prompt ("Quale è il suo cognome?");
const colorePreferito = prompt("Quale è il suo colore preferito?");

alert(`Salve sig. ${nomeUtente} ${cognomeUtente} ${colorePreferito} 22.`);
// const nomeUtente = "Mattia"
// const cognomeUtente = "Folcarelli"
// const colorePreferito = "verde" 
const spanNomeCognomeColore = document.getElementById(`nome-cognome-colore`);

spanNomeCognomeColore.innerHTML =`<strong class="text-primary">
                              ${nomeUtente} ${cognomeUtente}
                            </strong>                             
                            <small>ti piace ${colorePreferito} come colore 22.</small>`;
console.log(spanNomeCognomeColore);
