import { useEffect, useState } from 'react';
import { Card } from './cards';

import './styles.css';

// const fields = [
//   { id: 1, hasClicked: false },
//   { id: 2, hasClicked: false },
//   { id: 3, hasClicked: false },
//   { id: 4, hasClicked: false },
//   { id: 5, hasClicked: false },
//   { id: 6, hasClicked: false },
//   { id: 7, hasClicked: false },
//   { id: 8, hasClicked: false },
//   { id: 9, hasClicked: false },
//   { id: 10, hasClicked: false },
//   { id: 11, hasClicked: false },
//   { id: 12, hasClicked: false },
//   { id: 13, hasClicked: false },
//   { id: 14, hasClicked: false },
//   { id: 15, hasClicked: false },
//   { id: 16, hasClicked: false },
//   { id: 17, hasClicked: false },
//   { id: 18, hasClicked: false },
//   { id: 19, hasClicked: false },
//   { id: 20, hasClicked: false },
// ];
const Cardss1 = [
  { id: 1, card: '2', isDone: false },
  { id: 2, card: '2', isDone: false },
  { id: 3, card: 'K', isDone: false },
  { id: 4, card: 'K', isDone: false },
  { id: 5, card: 'A', isDone: false },
  { id: 6, card: 'A', isDone: false },
  { id: 7, card: 'U', isDone: false },
  { id: 8, card: 'U', isDone: false },
];
const Cardss2 = [
  { id: 1, card: '2', isDone: false },
  { id: 2, card: '2', isDone: false },
  { id: 3, card: 'K', isDone: false },
  { id: 4, card: 'K', isDone: false },
  { id: 5, card: 'A', isDone: false },
  { id: 6, card: 'A', isDone: false },
  { id: 7, card: 'U', isDone: false },
  { id: 8, card: 'U', isDone: false },
  { id: 9, card: 'R', isDone: false },
  { id: 10, card: 'R', isDone: false },
  { id: 11, card: '8', isDone: false },
  { id: 12, card: '8', isDone: false },
  { id: 13, card: '4', isDone: false },
  { id: 14, card: '4', isDone: false },
  { id: 15, card: 'Z', isDone: false },
  { id: 16, card: 'Z', isDone: false },
];
const Cardss3 = [
  { id: 1, card: '2', isDone: false },
  { id: 2, card: '2', isDone: false },
  { id: 3, card: 'K', isDone: false },
  { id: 4, card: 'K', isDone: false },
  { id: 5, card: 'A', isDone: false },
  { id: 6, card: 'A', isDone: false },
  { id: 7, card: 'U', isDone: false },
  { id: 8, card: 'U', isDone: false },
  { id: 9, card: 'R', isDone: false },
  { id: 10, card: 'R', isDone: false },
  { id: 11, card: '8', isDone: false },
  { id: 12, card: '8', isDone: false },
  { id: 13, card: '4', isDone: false },
  { id: 14, card: '4', isDone: false },
  { id: 15, card: 'Z', isDone: false },
  { id: 16, card: 'Z', isDone: false },
  { id: 17, card: 'F', isDone: false },
  { id: 18, card: 'F', isDone: false },
  { id: 19, card: '9', isDone: false },
  { id: 20, card: '9', isDone: false },
];

const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

const interval_time = 1000;

const game_time = 0;

export const Memo = () => {
  const [gameFields, setGameFields] = useState(Cardss1);

  const [initialTime, setInitialTime] = useState(game_time);

  const [time, setTime] = useState(game_time);

  const [isGameStarted, setIsGameStarted] = useState(false);

  const [score, setScore] = useState(0);

  const [isGameEnded, setIsGameEnded] = useState(false);

 
  const descriptionHandleClick = (card) => {

    // ignorujemy ukończone elementy

    // sprawdzamy czy to pierwsze kliknięcie i jeśli tak to zapisujemy 1 kliknięcie (i wychodzimy z funkcji)

    // sprawdzamy czy klikamy w ten sam element (jeśli tak to wychodzimy z funkcji i nic nie robimy)

    // zapisujemy drugie kliknięcie (bo wiemy że jest drugie i nie jest takie same skoro tutaj dotarliśmy)

    // jak są te same key to ustawiamy isDone na true dla obu elementów i zwiększamy score o 1

    // jak nie są te same to fajnie jakoś zapisać, że ruch był błędny (dodatkowy use state by wiedzieć kiedy wyświetlać czerwone tła ;D )

    // ustawiamy czyszczenie kliknięć, najlepiej z opóźnieniem by ewentualne czerwone tła miały czas się pokazać (setTimeout)

  };

//Podpowiedź do renderingu:

 

// {gameCards.map((el) => {

//     waruner 1

//     if (el.isDone)

 

//     waruneki 2

//     czy to 1 lub 2 kliknięta karta

 

//     return (

//       I tutaj mamy 3 możliwe opcje:

//       karta zakryta

//       karta na stałe odkryta

//       karta własnie odkryta (może być czerwona)

//     );

//   })}

  const handleStartGame = () => {
    //Wyzerowanie stanu gry
    setIsGameEnded(false);
    setTime(initialTime);
    setScore(0);

    setIsGameStarted(true);
  };
  function shuffleArray(s) {
    for (let i = s.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [s[i], s[j]] = [s[j], s[i]];
    }

    return s;
  }
  const handleStopGame = () => {
    setIsGameStarted(false);
    setIsGameEnded(true);
  };
  //Może być przy drugim kliku
  const resetClickField = () => {
    setTimeout(() => {
      setGameFields(
        gameFields.map((field) => {
          return {
            ...field,
            hasClicked: false,
          };
        })
      );
    }, 300);
  };

  const handleClickField = (clickedField) => {};

  //Do mierzenia czasu interwał
  useEffect(() => {
    if (isGameStarted) {
      const intervalId = setInterval(() => {
        time > -1 && setTime(time + 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [time, isGameStarted]);

  useEffect(() => {
    if (time === 180) {
      handleStopGame();
    }
  }, [time]);

  return (
    <div>
      <h2>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary.
      </h2>

      {isGameStarted ? (
        <div>
          <div className="allgrid">
            {/* CZAS */}

            <div className="allgrid1">
              <div className="title">Czas gry</div>

              <div className="content">
                <button disabled={true}>{time}</button>
              </div>
            </div>

            {/* WYNIK */}

            <div className="allgrid2">
              <div className="title">Wynik</div>

              <div className="content">
                <button disabled={true}>{score}</button>
              </div>
            </div>

            {/* PRZYCISKI STERUJĄCE */}

            <div className="allgrid3">
              <div className="title">Przyciski sterujące</div>

              <div className="content1">
                <button onClick={handleStopGame}>
                  <p>STOP</p>
                </button>
              </div>
            </div>
          </div>

          {/* WIDOK ODKRYWANIA KART */}

          <div className="fieldgrid">
            {gameFields.map((field) => {
              return (
                <div
                  key={field.id}
                  onClick={() => handleClickField(field)}
                  className={`field `}
                >
                  <Card card={field} />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="allgrid">
          {isGameEnded && (
            <div className="game-over">
              Gratulację! Twój wynik to {score} par w czasie {time} sekund!
            </div>
          )}

          {/* LICZBA ELEMENTÓW */}

          <div className="allgrid2">
            <div className="title">Liczba elementów</div>

            <div className="content">
              <button
                onClick={() => setGameFields(Cardss1)}
                className={gameFields.length === 8 ? 'current' : ''}
              >
                8 elementów
              </button>
              <button
                onClick={() => setGameFields(Cardss2)}
                className={gameFields.length === 16 ? 'current' : ''}
              >
                16 elementów
              </button>
              <button
                onClick={() => setGameFields(Cardss3)}
                className={gameFields.length === 20 ? 'current' : ''}
              >
                20 elementów
              </button>
            </div>
          </div>

          {/* PRZYCISKI STERUJĄCE */}

          <div className="allgrid3">
            <div className="title">Przyciski sterujące</div>

            <div className="content1">
              <button onClick={handleStartGame}>
                <p>START</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
