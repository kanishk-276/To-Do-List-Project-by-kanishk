
import React from 'react'

function Todospawn({todo, index, delTodo}) {
  return (
   <div className="task-container">
      <div className="task">
       {todo} <input className="checkk" type="checkbox"></input>
      </div>
      <button onClick={()=>delTodo(index)} className="delete" type = "button">
        <img className="imgg" src="dustbin.svg"></img>
      </button>
    </div>
  )
}

export default Todospawn