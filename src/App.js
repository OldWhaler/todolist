import './App.css';

import React, { useState } from 'react'
import TodoList from './components/TodoList'

function App() {
  const [todo, setTodo] = useState([])

  const refInput = React.createRef()

  const addButtonHandler = () => {
    const newTodoText = refInput.current.value.trim();
    if (newTodoText.length) {
      setTodo([...todo, {
        text: newTodoText,
        id: new Date().toISOString(),
        complited: false
      }])

      refInput.current.value = ''
    }
  }

  const buttonBlurHandler = (e) => {
    if (!e.target.value.trim().length) {
      e.target.value = ''
    }
  }

  const removeSpanHeandler = (id) => {
    setTodo(todo.filter(elem => elem.id !== id))
  }

  const doneCheckInputHandler = (id) => {
    setTodo(
      todo.map(elem => {
        if (elem.id === id) {
          elem.complited = !elem.complited
        }
        return elem
      }))
  }

  return (
    <div className="App">
      <label className='add-todo'>
        <input type="text" ref={refInput} onBlur={buttonBlurHandler} />
        <button onClick={addButtonHandler} >add todo</button>
      </label>
      {/* <ul>
        {todo.map(elem => {
          return <li className='todo-item' key={elem.id}>
            <input type="checkbox" checked={elem.complited} onChange={() => doneCheckInputHandler(elem.id)} />
            <span className='todo-item-text'>{elem.text}</span>
            <span className='todo-item-remove' onClick={() => removeSpanHeandler(elem.id)}>&times;</span>

          </li>
        })}
      </ul> */}
      <TodoList todo={todo}
        doneCheckInputHandler={doneCheckInputHandler}
        removeSpanHeandler={removeSpanHeandler}
      />

    </div>
  );
}

export default App;
