const cE = (type) => document.createElement(type);
const qS = (element) => document.querySelector(element);

const cardGen = (data) => {
  const { name, email, phone, website } = data;
  console.log(name, email, phone, website);
  const myListEl = qS(".myList");
  const myListEl2 = qS(".myList2");

  const cardEl = cE("div");
  cardEl.className = "card__wrapper";
  const infoWrapper = cE("div");
  infoWrapper.className = "info__wrapper";
  const nameEl = cE("h2");
  const emailEl = cE("p");
  const phoneEl = cE("p");
  const websiteEl = cE("p");
  const btnEl = cE("button");
  btnEl.className = "btn__el";

  nameEl.textContent = `${name}`;
  emailEl.textContent = `Email: ${email}`;
  phoneEl.textContent = `Telefono: ${phone}`;
  websiteEl.textContent = `Sito Web: ${website}`;
  btnEl.textContent = "Aggiungi a Preferiti ✔️";

  //Sezione 2 - Sezione di Ricerca
  const searchInput = document.getElementById("search__input");
  const searchButton = document.getElementById("btn__input");
  const searchResults = document.getElementById("resultDiv");

  searchInput.className = "search__input";
  searchButton.className = "btn__input";
  searchResults.className = "resultDiv";

  searchButton.addEventListener("click", () => {
    const searchText = searchInput.value;

    const searchResponse = `${searchText}`;

    searchResults.innerHTML = searchResponse;

    if (searchText === user.name) {
      cardEl.remove();
    }
  });

  // Sezione 3 & Sezione 4 - Sezione Contatti & Sezione Preferiti
  btnEl.addEventListener("click", function () {
    btnEl.remove();

    myListEl2.appendChild(cardEl);

    const returnButton = cE("button");
    returnButton.className = "return__btn";
    returnButton.textContent = "❌";
    returnButton.addEventListener("click", function () {
      returnButton.remove();

      myListEl.appendChild(cardEl);
      cardEl.appendChild(btnEl);
    });
    myListEl2.appendChild(returnButton);
  });

  myListEl.appendChild(btnEl);
  infoWrapper.append(nameEl, emailEl, phoneEl, websiteEl, btnEl);
  cardEl.append(infoWrapper);
  myListEl.append(cardEl);
};

export { cE, qS, cardGen };
