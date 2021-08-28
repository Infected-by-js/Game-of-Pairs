export default function createGameTable(cardsCount) {
  const gameTable = document.createElement("div");

  gameTable.classList.add("game__table");
  gameTable.style.gridTemplateColumns = `repeat(${Math.sqrt(cardsCount)}, 1fr)`;

  return gameTable;
}
