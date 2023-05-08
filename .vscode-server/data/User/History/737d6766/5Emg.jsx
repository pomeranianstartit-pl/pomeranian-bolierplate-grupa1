import React, { useState } from 'react';

import './style.css';

export function Exercise3() {
  const [isBigger, setIsBigger] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [newValue, setNewValue] = useState(0);

  // const twoCalls = (event) => {
  //   setEventNewValue(event);
  //   handleChange();
  // };
  const handleChange = () => {
    if (newValue > 10) {
      setIsBigger(true);
      setIsEmpty(true);
    } else if (newValue === '') {
      setIsEmpty(false);
    } else {
      setIsBigger(false);
      setIsEmpty(true);
    }
  };
  const text = isBigger ? 'Tak, jest wieksza' : 'Nie, jest mmiejsza';
  return (
    <div>
      <h1>Czy A jest większe od 10?</h1>
      <input type="number" {()=>{setNewValue(event.target.value)}}onChange={handleChange} />
      {isEmpty && <p>{text}</p>}
    </div>
  );
}
