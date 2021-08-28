import createEndModal from "./components/modals/end-game-modal.js";
import createStartModal from "./components/modals/start-game-modal.js";
import { CARD_FIELD_PRESET, INIT_OPTION } from "./core/constants.js";
import startGame from "./game.js";

function renderBeginGame() {
  const app = document.querySelector("#app");
  const startModal = createStartModal(
    CARD_FIELD_PRESET,
    INIT_OPTION,
    startGame
  );

  app.append(startModal);
}

function renderEndGame(clickCount) {
  const endModal = createEndModal(clickCount, renderBeginGame);

  document.body.append(endModal);
}

function renderGameTable(store, gameTable) {
  store.forEach(({ element }) => gameTable.append(element));
}

export { renderBeginGame, renderGameTable, renderEndGame };
