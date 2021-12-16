import React, { useState, useEffect } from "react";
import "./style.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState(""); //the value in the input

  const [currentStatus, setCurrentStatus] = useState("notStarted");
  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({}); //why is this object state? currentTodo is multiple?

  const handleInputChange = (e) => setTodo(e.target.value);
  const handleEditInputChange = (e) =>
    setCurrentTodo({ ...currentTodo, text: e.target.value }); //？

  const handleAdd = () => {
    // e.preventDefault();
    if (todo !== "") {
      setTodos([
        ...todos,
        {
          id: todos.length + 1,
          text: todo,
          //isDone: false,
          status: "notStarted",
        },
      ]);
      setTodo("");
    }
  };

  const handleUpdate = (id, updatedTodo) => {
    //why does 'updatedTodo' appear?
    const updatedItem = todos.map((todo) => {
      return todo.id === id ? updatedTodo : todo;
    });
    setIsEditing(false);
    setTodos(updatedItem);
  };

  const handleEditOnChange = () => {
    // e.preventDefault();
    handleUpdate(currentTodo.id, currentTodo); //?
  };

  const handleClickDelete = (id) => {
    const removeItem = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(removeItem);
  };

  const handleEditClick = (todo) => {
    setIsEditing(true);
    setCurrentTodo(todo); //what is this?
    console.log(todo);
    console.log({ todo });
    console.log({ ...todo });
  };

  const handleStatusChange = () => {};
  console.log("rendering");

  return (
    <>
      <h1>Todo React App</h1>

      {isEditing ? (
        <>
          <div className="input_area">
            <input
              name="todo"
              type="text"
              placeholder="Create a new todo"
              value={todo}
              onChange={handleInputChange}
            />
            <button onClick={handleAdd}>Add</button>
          </div>

          <div className="content">
            <form onSubmit={handleEditOnChange}>
              <input
                name="editTodo"
                type="text"
                placeholder="Edit todo"
                value={currentTodo.text}
                onChange={handleEditInputChange}
              />
              <input type="submit" value="update" className="content-update" />
              <button
                onClick={() => setIsEditing(false)}
                className="content-grey"
              >
                Cancel
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <div className="input_area">
            <input
              name="todo"
              type="text"
              placeholder="Create a new todo"
              value={todo}
              onChange={handleInputChange}
            />
            <button onClick={handleAdd}>Add</button>
          </div>
        </>
      )}

      <ul className="todo-list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.text}
              <select>
                <option value="notStarted">Not Started</option>
                <option value="inProgress">In Progress</option>
                <option value="done">Done</option>
              </select>
              <button
                onClick={() => {
                  handleEditClick(todo);
                }}
              >
                Edit
              </button>
              {/**why entire todo? */}
              <button
                onClick={() => {
                  handleClickDelete(todo.id);
                }}
                className="content-grey"
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
      <div className="flex">
        <div className="item">
          <div id="notStarted" className="todo-place">
            <h2>Not Started</h2>
          </div>
          <ul className="todo-list">
            {todos.filter((todo) => {
              console.log("click");
              return (
                <div>ok</div>
                // <li key={todo.id}>
                //   {todo.text}
                //   <select>
                //     <option value="notStarted">Not Started</option>
                //     <option value="inProgress">In Progress</option>
                //     <option value="done">Done</option>
                //   </select>
                //   <button
                //     onClick={() => {
                //       handleEditClick(todo);
                //     }}
                //   >
                //     Edit
                //   </button>
                //   <button
                //     onClick={() => {
                //       handleClickDelete(todo.id);
                //     }}
                //     className="content-grey"
                //   >
                //     Delete
                //   </button>
                // </li>
              );
            })}
          </ul>
        </div>
        {/* <div className="item">
          <div id="inProgress" className="todo-place">
            <h2>In progress</h2>
          </div>
          <ul className="todo-list">
            {todos.map((todo) => {
              return (
                <li key={todo.id}>
                  {todo.text}
                  <select>
                    <option value="notStarted">Not Started</option>
                    <option value="inProgress">In Progress</option>
                    <option value="done">Done</option>
                  </select>
                  <button
                    onClick={() => {
                      handleEditClick(todo);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleClickDelete(todo.id);
                    }}
                    className="content-grey"
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div> */}
        {/* <div className="item">
          <div id="notStarted" className="todo-place">
            <h2>Do</h2>
          </div>
          <ul className="todo-list">
            {todos.map((todo) => {
              return (
                <li key={todo.id}>
                  {todo.text}
                  <select>
                    <option value="notStarted">Not Started</option>
                    <option value="inProgress">In Progress</option>
                    <option value="done">Done</option>
                  </select>
                  <button
                    onClick={() => {
                      handleEditClick(todo);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleClickDelete(todo.id);
                    }}
                    className="content-grey"
                  >
                    Delete
                  </button>
                </li>
              );
            })}
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default App;
