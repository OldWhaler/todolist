import './App.css';

import React, { useState } from 'react'
import TodoList from './components/TodoList'
import InputField from './components/InputField';
import FooterSort from './components/FooterSort';

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

  const inputBlurHandler = (e) => {
    if (!e.target.value.trim().length) {
      e.target.value = ''
    }
  }

  const inputKeydownHandler = (e) => {
    if (e.key === 'Enter') {
      addButtonHandler()
      inputBlurHandler(e)
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

  const toShowAllHandler = (todos) => {
    setTodo(todos)
  }

  const toShowActiveHandler = (todos) => {
    setTodo(todos.filter(elem => !elem.complited))
  }

  const toShowComplitedHandler = (todos) => {
    setTodo(todos.filter(elem => elem.complited))

  }

  return (
    <div className="App">


      <InputField
        inputBlurHandler={inputBlurHandler}
        inputKeydownHandler={inputKeydownHandler}
        addButtonHandler={addButtonHandler}
        refInput={refInput}
      />

      <TodoList
        todo={todo}
        doneCheckInputHandler={doneCheckInputHandler}
        removeSpanHeandler={removeSpanHeandler}
      />

      <FooterSort
        todo={todo}
        toShowAllHandler={toShowAllHandler}
        toShowActiveHandler={toShowActiveHandler}
        toShowComplitedHandler={toShowComplitedHandler}
      />


    </div>
  );
}

export default App;
