import './Keycontainer.css'


function Keycontainer({  changeValue, clearValue, evaluateExpression,inputValue },){
  return(
    <div className='keyContainer'>

    <button onClick={clearValue}>Clear</button>
    {/* <button onClick={() => changeValue("(")}>(</button>
    <button onClick={() => changeValue(")")}>)</button> */}
    <button onClick={() => changeValue('/')}>/</button>
    

    <button onClick={() => changeValue(7)}>7</button>
    <button onClick={() => changeValue(8)}>8</button>
    <button onClick={() => changeValue(9)}>9</button>
    <button onClick={() => changeValue('*')}>*</button>

    <button onClick={() => changeValue(4)}>4</button>
    <button onClick={() => changeValue(5)}>5</button>
    <button onClick={() => changeValue(6)}>6</button>
    <button onClick={() => changeValue('-')}>-</button>

    <button onClick={() => changeValue(1)}>1</button>
    <button onClick={() => changeValue(2)}>2</button>
    <button onClick={() => changeValue(3)}>3</button>
    <button onClick={() => changeValue('+')}>+</button>
    

    <button onClick={() => changeValue(0)}>0</button>
    <button onClick={() => changeValue('.')}>.</button>
    <button onClick={() => evaluateExpression(inputValue)}>=</button>
    
    
    
    
    

    </div>
  )
}

export default Keycontainer