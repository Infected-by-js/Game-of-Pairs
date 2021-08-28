export default function prepareCardValuesStore(cardsCount) {
  const cardStore = createCardValuesStore(cardsCount);
  const shuffledCards = shuffleCardValues(cardStore);

  return shuffledCards;
}

function createCardValuesStore(cardsCount) {
  const cardStore = [];

  for (let i = 0; i < cardsCount; i++) {
    cardStore.push((i % (cardsCount / 2)) + 1);
  }

  return cardStore;
}

function shuffleCardValues(cards) {
  return [...cards].reduceRight((acc, _, indx, store) => {
    let deleteIndex = Math.floor(Math.random() * (indx + 1));

    if (store[deleteIndex]) {
      return (acc = [...acc, ...store.splice(deleteIndex, 1)]);
    }
  }, []);
}
