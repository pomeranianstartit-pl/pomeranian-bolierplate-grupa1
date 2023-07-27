import { useState } from 'react';
import './styles.css';

export function GoogleFonts() {
  const [font, setFont] = useState('font-poppins');

  // OPTION 1
  // function handleChangeFont() {
  // if (font === 'font-poppins') {
  // setFont('font-caprasimo');
  // } else {
  // setFont('font-poppins');
  // }
  // }
  // OPTION 2
  // function handleChangeFont() {
  // if (font === 'font-poppins') {
  // return setFont('font-caprasimo');
  // }
  // return setFont('font-poppins');
  // }
  // OPTION 3
  // function handleChangeFont() {
  // font === 'font-poppins'
  // ? setFont('font-caprasimo')
  // : setFont('font-poppins');
  // }
  // OPTION 4
  function handleChangeFont(newFont) {
    setFont(newFont);
  }
  return (
    <div>
      <p className={`${font}`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        distinctio iste dolor quos exercitationem praesentium, facilis
        architecto laboriosam natus, dolores minus? Qui incidunt explicabo
        deserunt veniam tenetur saepe exercitationem corporis?
      </p>
      <p>{font}</p>
      <button
        className="button-1"
        onClick={() => handleChangeFont('font-poppins')}
      >
        Change font poppins
      </button>{' '}
      <button
        className="button-2"
        onClick={() => handleChangeFont('font-petit-formal')}
      >
        Change font petit formal
      </button>
    </div>
  );
}
