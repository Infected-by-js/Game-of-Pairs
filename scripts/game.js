import Card from "./components/card/Card.js";
import createGameHeader from "./components/game-header/game-header.js";
import createGameTable from "./components/table/table.js";
import createTimer from "./components/timer/timer.js";
import prepareCardValuesStore from "./core/cardsValuesStore.js";
import { renderBeginGame, renderEndGame, renderGameTable } from "./view.js";

export default function startGame(cardsCount) {
  const container = document.querySelector("#app");
  const gameHeader = createGameHeader();
  const gameTable = createGameTable(cardsCount);
  const cardValues = prepareCardValuesStore(cardsCount);

  const gameOptions = { renderBeginGame, renderEndGame };
  const cards = cardValues.map((cardValue) => new Card(cardValue));
  const { timer, timerInterval } = createTimer(cardsCount, gameOptions);

  const openedCards = [];

  let openedCardsCount;
  let clickCount = 0;

  container.innerHTML = "";

  gameTable.addEventListener("click", (event) => {
    const targetCard = event.target.closest('[data-name="card"');

    if (!targetCard) return;
    if (targetCard.classList.contains("_open")) return;

    const activeCard = cards.find(({ element }) =>
      element.isSameNode(targetCard)
    );

    if (openedCards.length === 2) {
      if (openedCards[0].value === openedCards[1].value) {
        openedCards.splice("");
      } else {
        openedCards.forEach((el) => el.close());
        openedCards.splice("");
      }
    }

    openedCards.push(activeCard);
    activeCard.open();

    ++clickCount;
    openedCardsCount = document.querySelectorAll("._open").length;

    if (openedCardsCount === cardsCount) {
      clearInterval(timerInterval);
      renderEndGame(clickCount);
    }
  });

  renderGameTable(cards, gameTable);
  container.append(gameHeader, gameTable, timer);
}
