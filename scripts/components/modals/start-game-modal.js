export default function createStartModal(GAME_PRESET, initOption, startGame) {
  const modal = document.createElement("div");
  const modalContainer = document.createElement("div");

  const { title, description } = createModalHeader();
  const {
    optionsWrapper,
    prevBtn,
    outputField,
    nextBtn,
  } = createOptionsWrapper(initOption);
  const startButton = createStartButton();

  modal.classList.add("modal");
  modalContainer.classList.add("modal__container");

  const GAME_FIELDS = Object.keys(GAME_PRESET);
  let currentPosition = GAME_FIELDS.indexOf(initOption);

  optionsWrapper.addEventListener("click", (e) => {
    if (e.target === nextBtn) {
      outputField.textContent = GAME_FIELDS[++currentPosition];
      nextBtn.disabled = currentPosition === GAME_FIELDS.length - 1;
      prevBtn.disabled = false;
    } else if (e.target === prevBtn) {
      outputField.textContent = GAME_FIELDS[--currentPosition];
      prevBtn.disabled = currentPosition === 0;
      nextBtn.disabled = false;
    }
  });

  startButton.addEventListener("click", () => {
    modal.style.display = "none";
    modal.remove();

    startGame(GAME_PRESET[GAME_FIELDS[currentPosition]]);
  });

  modalContainer.append(title, description, optionsWrapper, startButton);
  modal.append(modalContainer);

  return modal;
}

function createModalHeader() {
  const title = document.createElement("h2");
  const description = document.createElement("p");

  title.classList.add("modal__title");
  description.classList.add("modal__description");

  title.textContent = 'Игра в "Пары"';
  description.textContent = "Выберите размер поля: ";

  return { title, description };
}

function createOptionsWrapper(selectedOption = "4x4") {
  const optionsWrapper = document.createElement("div");
  const prevBtn = document.createElement("button");
  const nextBtn = document.createElement("button");
  const outputField = document.createElement("p");

  optionsWrapper.classList.add("modal__options_wrapper");
  prevBtn.classList.add("modal__options_prev-btn");
  nextBtn.classList.add("modal__options_next-btn");
  outputField.classList.add("modal__options_output");

  prevBtn.textContent = "Меньше";
  nextBtn.textContent = "Больше";
  outputField.textContent = selectedOption;

  optionsWrapper.append(prevBtn, outputField, nextBtn);

  return { optionsWrapper, prevBtn, outputField, nextBtn };
}

function createStartButton() {
  const startButton = document.createElement("button");

  startButton.classList.add("modal__start-btn");
  startButton.textContent = "Начать игру";

  return startButton;
}
