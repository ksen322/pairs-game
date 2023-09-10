let cardsArr = [];
let openedCards = [];
let timer = null;

function createNumbersArray(count) {

  const pairsCards = [];
  for (let i = 1; i <= count / 2; i++) {
    pairsCards.push(i);
    pairsCards.push(i);
  }
  return pairsCards;

}

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. arr - массив чисел

function shuffle(arr) {

  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;

}

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.

function createCard(number, cardSize) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.classList.add('hvr-radial-out');
  card.style.width = `${cardSize}px`;
  card.style.height = `${cardSize}px`;
  card.innerHTML = `<div class="card-front"></div><div class="card-back">${number}</div>`;

  card.addEventListener('click', function () {
    flipCard(card);
  });
  return card;
}

function createBoard(size) {
  const board = document.getElementById('board');
  board.innerHTML = '';

  const pairArr = createNumbersArray(size * size);
  const shuffleArr = shuffle(pairArr);

  const containerWidth = document.getElementById('board').offsetWidth;

  const cardSize = containerWidth / size;
  // const cardSize = containerWidth / size;

  for (let i = 0; i < size * size; i++) {
    const card = createCard(shuffleArr[i], cardSize);
    board.appendChild(card);

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  }
}

function flipCard(card) {
  if (!card.classList.contains('open') && openedCards.length < 2) {
    card.classList.add('open');

    openedCards.push(card);

    if (openedCards.length === 2) {
      setTimeout(checkMatch, 500);
    }
  }
}

function checkMatch() {
  const [card1, card2] = openedCards;

  if (card1.innerText === card2.innerText) {
    card1.classList.add('matched');
    card2.classList.add('matched');
  } else {
    card1.classList.remove('open');
    card2.classList.remove('open');
  }

  openedCards = [];

  checkEndGame();
}

function checkEndGame() {
  const matchedCards = document.querySelectorAll('.card.matched');

  if (matchedCards.length === cardsArr.length) {
    clearInterval(timer);
    alert('congrate');

    const playAgain = confirm('play again?');
    if (playAgain) {
      startGame();
    }
  }
}

function startGame() {
  let timerLimit = prompt('Введите значение таймера');
  if (timerLimit === '' || timerLimit === null) {
    timerLimit = 60;
  }
  const size = parseInt(prompt("Введите кол-во строчек по вертикали/горизонтали"));
  if (size % 2 !== 0 || size < 2 || size > 10 || size === null) {
    createBoard(4);
  } else {
    createBoard(size);
  }



  cardsArr = document.querySelectorAll('.card');
  openedCards = [];

  if (timer) {
    clearInterval(timer);
  }

  let timeLeft = timerLimit;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById('timer').innerText = `time left: ${timeLeft}`;

    if (timeLeft === 0) {
      clearInterval(timer);
      alert('time left!');

      const playAgain = confirm('play again?');
      if (playAgain) {
        startGame();
      }
    }
  }, 1000);
}

window.onload = function () {
  startGame();
};
