import React from "react";

const Exercise = () => {
    /*
    *Undefined - lack of value
    */

    // variable with no assigment
     let name ;
     console.log(name);

    // Function returning undefined by default
    const myFunction = () => {};  
    const surname = myFunction();  
    console.log(surname);


    // Object doesn't have specified key
    // const myObject = { a: 1 };
    // console.log(myObject.b);

    /*
    *Null - specified value of nothingness
    */

    let b = null
    console.log(b);

    // napraw to pózniej
    console.log('check if renders');
    console.log('dupa dupa');

      // TODO: Function returns string instead of numbers  
      // FIXME: Function returns string instead of numbers  
      // CHECKME, DOCME, TESTME, PENDING, DISCUSS, REVIEW

let amount = 24;
const accountBalance = ({ amount, currency }) => {
    const currencySymbols = {
        USD: '$',
        PLN: '🧅',
        EUR: '🥨',
        CUSTOM: <img src={'./index.jpg'} />,  
    };
    return (      
    <>        
        {currencySymbols[currency]} {`${amount}`}      
    </>    
    );  
};
const symbols = [];

window.addEventListener('keydown', (e) => {
    // console.log(e.key);
    // console.log(e.key === 'H' || e.key === 'h');
    symbols.push(e.key);
    console.log(symbols);
});

'Łukasz'.localeCompare('Łukasz');
'Österreich'.localeCompare('Zealand');
'Österreich'.localeCompare('New Zealand');
const users = ['Łukasz', 'Adam', 'John'];
let sorted = users.sort();
sorted = users.sort((a, b) => a.localeCompare(b));
users.push('łukasz');
users.push('a');  
users.push('A');
console.log(users);  
sorted = users.sort((a, b) => a.localeCompare(b));  
console.log(sorted);

return (    
    <div>      
        <p>        
            <input type="text" name="" id="" />        
            <input type="password" name="" id="" />      
        </p>    
    </div>  
);};

export default Exercise;



// const totalPixels = (width, height) => parseInt(width, 10) * parseInt(height, 10)
// console.log(totalPixels){1110}