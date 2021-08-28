export default class Card {
  constructor(value) {
    this.element = this.toDOMELement(value);
    this.name = this.element.dataset.name;
    this.value = this.element.dataset.value;
  }
  open() {
    this.element.firstChild.hidden = false;
    this.element.classList.add("_open");
  }
  close() {
    this.element.firstChild.hidden = true;
    this.element.classList.remove("_open");
  }

  toDOMELement(value) {
    const gameCard = document.createElement("div");
    const gameCardValue = document.createElement("span");

    gameCardValue.textContent = value;
    gameCardValue.hidden = true;

    gameCard.classList.add("game__card");
    gameCardValue.classList.add("game__card-body");

    gameCard.setAttribute("data-name", "card");
    gameCard.setAttribute("data-value", value);

    gameCard.append(gameCardValue);

    return gameCard;
  }
}
