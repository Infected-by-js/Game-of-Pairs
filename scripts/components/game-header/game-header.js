export default function createGameHeader() {
  const wrapper = new DocumentFragment();
  const title = createGameTitle();
  const description = createGameDescription();

  wrapper.append(title, description);

  return wrapper;
}

function createGameTitle() {
  const gameTitle = document.createElement("h1");

  gameTitle.classList.add("game__title");
  gameTitle.textContent = 'Игра в "Пары"';

  return gameTitle;
}

function createGameDescription() {
  const gameDescription = document.createElement("p");

  gameDescription.classList.add("game__description");
  gameDescription.textContent =
    "За отведенное время, найдите по две карты с одинаковыми значениями";

  return gameDescription;
}
