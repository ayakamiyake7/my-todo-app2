import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('') //the value in the input

  const [isEditing, setIsEditing] = useState(false)
  const [currentTodo, setCurrentTodo] = useState({}) //why is this object state? currentTodo is multiple?

  // const handleInputChange = (e) => setTodo(e.target.value)//what is this?
  const handleEditInputChange = (e) => setCurrentTodo({...currentTodo, text: e.target.value}) //

  const handleInputChange = (e) => {
    // console.log(e)
    setTodo(e.target.value)
    // console.log(todo)
  }
  const handleAdd = (e) => {
    // console.log(e)
    // console.log(todo, "TODO");
    e.preventDefault()
    if(todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo,
          //isDone: false,
          // state: 'incomplete'
        }
      ])
      setTodo('')
    }
    console.log(todos, "TODOS-handleAdd");
  }

  const handleUpdate = () => {
    setIsEditing(true)
    setTodos([
      ...todos,
      {
        id: currentTodo.id,
        text: currentTodo.text,
        //isDone: false,
        // state: 'incomplete'
      }
    ])
  }

  const handleClickDelete = (id) => {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(removeItem)
  }

  const handleEditClick = (todo) => {
    setIsEditing(true)
    setCurrentTodo({...todo})//what is this?
  }


  return (
  <>
  <h1>Todo React App</h1>
  {
    console.log(todos, "TODOS-return")
  }
  <div className="input_area">
    <form>
      <input 
      name="todo"
      type="text"
      placeholder="Create a new todo"
      // value={todo}
      onChange={handleInputChange}
      />
      <button onClick={handleAdd}>Add</button>
    </form>
  </div>

  <div className="undone_area">
  {isEditing ? (
    <form>
      <input 
      name="editTodo"
      type="text"
      placeholder="Edit todo"
      value={currentTodo.text}
      onChange={handleEditInputChange}
      />
      <button onClick={() => handleUpdate()}>Update</button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  ) : (
      <form>
        
      </form>
  )}
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          <li key={todo.id}>{todo.text}
            <button onClick={() => {handleEditClick(todo)}}>Edit</button>{/**why entire todo? */}
            <button onClick={() => {handleClickDelete(todo.id)}}>Delete</button>
          </li>
        )
      })}
    </ul>
  </div>
  </>
  )
}

export default App;
