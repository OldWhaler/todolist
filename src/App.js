import './App.css';

import React, { useState } from 'react'
import TodoList from './components/TodoList'
import InputField from './components/InputField';

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


      <InputField
        buttonBlurHandler={buttonBlurHandler}
        addButtonHandler={addButtonHandler}
        refInput={refInput}
      />

      <TodoList todo={todo}
        doneCheckInputHandler={doneCheckInputHandler}
        removeSpanHeandler={removeSpanHeandler}
      />

    </div>
  );
}

export default App;
