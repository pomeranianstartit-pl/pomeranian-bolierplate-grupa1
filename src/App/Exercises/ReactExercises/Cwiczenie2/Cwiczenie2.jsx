import React from 'react';

import './style.css';

export function Cwiczenie2() {
  const [tekst, setTekst] = React.useState('Placeholder');

  function handleOnSubmit(event) {
    event.preventDefault();
    console.log(event);

    const trescInputa = event.target[0].value;
    setTekst(trescInputa);
    /*console.log('Treść inputa: ', trescInputa);*/
  }

  return (
    <div className="blok-8__cwiczenie-1">
      <h1>Cześć!</h1>
      <div>
        <div>
          <form onSubmit={handleOnSubmit}>
            <button type="submit">KLIKNIJ</button>
          </form>
        </div>

        <div>
          <p>{tekst}</p>
        </div>
      </div>
    </div>
  );
}
