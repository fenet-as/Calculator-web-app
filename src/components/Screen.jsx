import './Screen.css'



function Screen({ inputValue, changeValue }){

  return(
    <input className="screen" value={inputValue} onChange={e => changeValue(e.target.value)}>
    
    </input>
  )
}

export default Screen
