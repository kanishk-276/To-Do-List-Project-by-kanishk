import React from 'react'

function Input({inputVal, writetodo, addtodo}) { 

  return (
    <div className="area11">
      <input type="text" className="inputbox" value={inputVal} onChange={writetodo}></input>
      <button type='button' className="button" onClick={addtodo}>+</button>
    </div>
  )
}

export default Input 