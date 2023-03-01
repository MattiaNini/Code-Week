import { cE, qS, cardGen } from "./utils.js";

const cardsContainerEl = cE("div");
cardsContainerEl.className = "cards__container";

//SEZIONE 2 - Sezione di Ricerca

//SEZIONE 3 - Lista Contatti
//FETCH all'API
async function fetchUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return users;
}

//Creazione Cards
fetchUsers().then((users) => {
  users.forEach((user) => cardGen(user));
  users.forEach((elements) => console.log(elements));
  console.log("Users", users);
});

document.body.appendChild(cardsContainerEl);
