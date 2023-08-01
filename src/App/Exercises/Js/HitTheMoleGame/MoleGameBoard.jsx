import React, { useState, useEffect } from 'react';
import Mole from '../../../Images/Mole.svg';
import './styles.css';

export const MoleGameBoard = ({ moleArray, hitTheMole, score }) => {

    return (
       <div className="moleGame">
       <div>
          <h4> WYNIK: {score}</h4>
          </div>
          <h4>PRZYCISKI STRUJĄCE</h4>

         <div className="board">
        {moleArray.map((mole, index) => {
          return (
            <div className="square">
             <span>
                        {mole.isVisible ? (
                             <img src={Mole} 
                             onClick={() => hitTheMole(index)} 
                             alt="MOLE"
                             />
                        ) : null}
                    </span>
            </div>
          );
        })}
      </div>
    </div>
  );
    };

    export default MoleGameBoard;