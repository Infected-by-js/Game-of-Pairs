export default function createEndModal(clicks, renderBeginScreen) {
  const modal = document.createElement("div");
  const modalContainer = document.createElement("div");

  const { title, description } = createModalHeader(clicks);
  const resetButton = createResetButton();

  modal.classList.add("modal");
  modalContainer.classList.add("modal__container");

  modalContainer.append(title, description, resetButton);
  modal.append(modalContainer);

  resetButton.addEventListener("click", () => {
    modal.remove();
    renderBeginScreen();
  });

  return modal;
}

function createModalHeader(clicks = 0) {
  const title = document.createElement("h2");
  const description = document.createElement("p");
  const clickCounter = document.createElement("span");

  title.classList.add("end__title");
  description.classList.add("end__description");
  clickCounter.classList.add("clicker");

  if (!clicks) {
    title.textContent = "Конец игры";
    description.textContent = "Время вышло, попробуйте снова";
  } else {
    title.textContent = "Поздравляю!";
    description.textContent = "Количество открытых карт:";
    clickCounter.textContent = clicks;
    description.append(clickCounter);
  }

  return { title, description };
}

function createResetButton() {
  const startButton = document.createElement("button");

  startButton.classList.add("modal__start-btn");
  startButton.textContent = "Начать новую игру";

  return startButton;
}
