import React, { useState } from 'react';

const App = () => {
  const [todoText, setTodoText] = useState('') //text which entering to the box

  const [notStartedYetTodos, setNotStartedYetTodos] = useState(['aaaa','oooo'])
  const [inProgressTodos, setInProgressTodos] = useState([''])
  const [completeTodos, setCompleteTodos] = useState([''])

  const onChangeTodoText = (e) => setTodoText(e.target.value)
  const onClickAdd = () => {
    if(todoText !== "") {
      setNotStartedYetTodos([...notStartedYetTodos, todoText])
      setTodoText('')
    }
  }
  const onClickDelete = (index) => {
    const newTodos = [...notStartedYetTodos]
    newTodos.splice(index, 1)
    setNotStartedYetTodos(newTodos) //未完了のnewTodoで更新してあげましょう、がわからない
    alert('Are you sure you want to delete?')
  }


  return (
  <>
  <h1>Todo React App</h1>
  <div className="input_area">
    <input type="text" label="title" value={todoText} onChange={onChangeTodoText}/>
    <button onClick={onClickAdd}>Add</button>
  </div>

  <div className="not_started_yet_area">
    <ul>
      {notStartedYetTodos.map((todo, index) => {
        return (
          <li key={todo}>{todo}
            <input type="text" value={todo.value}
            
            />
            <button>Edit</button>
            <button onClick={() =>{onClickDelete(index)}}>Delete</button>
          </li>
        )
      })}
    </ul>
  </div>
  <div className="in_progress_area">
    <ul>
      {inProgressTodos.map((todo) => {
      return (
        <li key={todo}>{todo}
          <button>Edit</button>
          <button>Delete</button>
        </li>
      )
      })}
    </ul>
  </div>
  <div className="complete_area">
    <ul>
      {completeTodos.map((todo) => {
        return (
          <li key={todo}>{todo}
            <button>Edit</button>
            <button>Delete</button>
          </li>
        )
      })
      }
    </ul>
  </div>
  </>
  )
}

export default App;
