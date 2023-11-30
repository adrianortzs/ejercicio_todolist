import React from 'react' 

function Todo({title,deleteToDo}) {
  return (
    <form>
        <input type='checkbox'></input>
        <label>{title}</label>
        <button onClick={deleteToDo}>BORRAR</button>
    </form>
  )
}

export default Todo