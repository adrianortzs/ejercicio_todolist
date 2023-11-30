import { useState } from 'react'
import './App.css'
import Todo from './components/ToDo'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const initialInfo = [{title: "acicalarse"},{title: "hacer la compra"},{title: "hacer deporte"}]

  const [data,setData] = useState({})
  const [list,setList] = useState([initialInfo])
  const [inputText, setInputText] = useState("");
  const [showAddButton, setShowAddButton] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  setTimeout(function(){
    setInputText("")
    setShowAddButton(false)
  },20000);

  const handleSubmit = (event) => {
    event.preventDefault()
    let title = event.target.title.value


    if (title.length < 6){
      alert("La tarea debe tener mínimo 6 caracteres");
      return;
    }

    const myToDo = {title}

    setData(myToDo) 
    setList([...list,myToDo])
    setInputText("")
    setShowAddButton(false)
    setShowMessage(true)

    setTimeout(function(){
      setShowMessage(false)
    },5000);
  }

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);

    if (newText.length > 0) {
      setShowAddButton(true);
    }
    else {
      setShowAddButton(false);
    }  
  };

  const paintToDo = () => {
   return list.map((todo,i) => <Todo
   key = {uuidv4()}  
   title = {todo.title}
   deleteToDo = {()=>deleteToDo(i)} />)
  }

  const deleteToDo = (i) => {
    const remainingToDo = list.filter((Todo,j) => i !== j)
    setList(remainingToDo)
  }

  const clearToDo = () => {
    setList([])
  }

  const resetToDo = () => {
    setList(initialInfo)
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" id="title" value={inputText} onChange={handleInputChange} /><br />

        {showAddButton && <button type="submit">ADD</button>}
      </form>

      <button onClick={clearToDo}>CLEAR</button>
      <button onClick={resetToDo}>RESET</button>

      {showMessage && <p>Tarea añadida a la lista</p>}

      {paintToDo()}
    </>
  )
}

export default App
