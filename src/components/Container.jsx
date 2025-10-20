import './Container.css'
import Screen from './screen'
import Keycontainer from './Keycontainer'
import React, { useState } from 'react';



export function Container(){

  const [inputValue, setInputValue] = useState('');
 


  function changeValue(value) {
    setInputValue(prev => prev + value

    );
  }

  function clearValue(){
    setInputValue('')
  }

  // 2 * 3 + 4
  function evaluateExpression(expr) {
      let tokens = expr.match(/\d+\.\d+|\d+|[+\-*/]/g);

      let i = 0;
      while (i < tokens.length) {
        if (tokens[i] === '*' || tokens[i] === '/') {
          const operator = tokens[i];
          const left = parseFloat(tokens[i - 1]);
          const right = parseFloat(tokens[i + 1]);
          let result = operator === '*' ? left * right : left / right;

          tokens.splice(i - 1, 3, result.toString());
          i = i - 1;
        } else {
          i++;
        }
      }

      i = 0;
      while (i < tokens.length) {
        if (tokens[i] === '+' || tokens[i] === '-') {
          const operator = tokens[i];
          const left = parseFloat(tokens[i - 1]);
          const right = parseFloat(tokens[i + 1]);
          let result = operator === '+' ? left + right : left - right;

          tokens.splice(i - 1, 3, result.toString());
          i = i - 1;
        } else {
          i++;
        }
      }

      const res = Math.round(parseFloat(tokens[0]) * 1000) / 1000;
      setInputValue(res)
    }

    


  


  return(
    <>
    
      <div className="container">
      <Screen inputValue={inputValue} changeValue={changeValue} />
      <Keycontainer changeValue={changeValue}  clearValue={clearValue}  evaluateExpression={evaluateExpression} inputValue={inputValue}/>
      </div>
    </>
  )
}
