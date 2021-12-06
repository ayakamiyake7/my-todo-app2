import React, { useState } from 'react';

const App = () => {
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState('') //the value in the input

  const onChangeInput = (e) => setTodo(e.target.value)//what the differences between this and
  const onClickAdd = (e) => {
    e.preventDefault()//this? Do i need both?
    if(todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo
        }
      ])
      setTodo('')
    }
  }
  const onClickDelete = (id) => {//...why is it ok to be just id instead of todo.id
    const removeItem = todos.filter((todo) => {
      return todo.id !== id
    })
    setTodos(removeItem)
    // alert('Are you sure you want to delete?')
  }


  return (
  <>
  <h1>Todo React App</h1>
  <div className="input_area">
    <form> {/* do I need <form></form>? */}
      <input 
      name="todo"
      type="text"
      placeholder="Create a new todo"
      value={todo}
      onChange={onChangeInput} 
      />
      <button onClick={onClickAdd}>Add</button>
    </form>
  </div>

  <div className="">
    <ul className="todo-list">
      {todos.map((todo) => {
        return (
          //   <button>Edit</button>
          <li key={todo.id}>{todo.text}
            <button onClick={() =>{onClickDelete(todo.id)}}>Delete</button>
          </li>
        )
      })}
    </ul>
  </div>
  </>
  )
}

export default App;
