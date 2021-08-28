import { TIME_SETTING } from "../../core/constants.js";

export default function createTimer(cardsCount, options) {
  const { timer, timeCounter, resetBtn } = createTimerElement(cardsCount);

  const renderBeginGame = options.renderBeginGame || (() => {});
  const renderEndGame = options.renderEndGame || (() => {});

  let timerInterval = setInterval(() => {
    --timeCounter.textContent;

    if (timeCounter.textContent == 0) {
      clearInterval(timerInterval);
      renderEndGame();
    }
  }, 1000);

  resetBtn.addEventListener("click", () => {
    clearInterval(timerInterval);
    renderBeginGame();
  });

  return { timer, timerInterval };
}

function createTimerElement(cardsCount) {
  const timer = document.createElement("div");
  const timerLabel = document.createElement("p");
  const timeCounter = document.createElement("span");
  const resetBtn = document.createElement("button");

  timer.classList.add("timer__wrapper");
  timerLabel.classList.add("timer__label");
  timeCounter.classList.add("time__counter");
  resetBtn.classList.add("reset-button");

  timerLabel.textContent = "Осталось времени: ";
  resetBtn.textContent = "Начать новую игру";
  timeCounter.textContent = TIME_SETTING[cardsCount] / 1000;

  timer.append(timerLabel);
  timerLabel.append(timeCounter);
  timer.append(resetBtn);

  return {
    timer,
    timeCounter,
    resetBtn,
  };
}
