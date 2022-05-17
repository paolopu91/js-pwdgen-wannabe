const nomeUtente = prompt ("Quale è il suo nome?");
const cognomeUtente = prompt ("Quale è il suo cognome?");
const colorePreferito = prompt("Quale è il suo colore preferito?");

alert(`Salve sig. ${nomeUtente} ${cognomeUtente} ${colorePreferito} 22.`);
const spanNomeCognomeColore = document.getElementById(`nome-cognome-colore`);

spanNomeCognomeColore.innerHTML = `<strong class="text-primary">
                              ${nomeUtente} ${cognomeUtente}
                            </strong><br>                             
                            <small>ti piace ${colorePreferito} come colore 22.</small>`;
console.dir ("spanNomeCognomeColore");
