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
        complited: false,
        visability: true
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
    setTodo(todos.map(elem => {
      elem.visability = true
      return elem
    }))
  }


  const toShowActiveHandler = (todos) => {
    setTodo(todos.map(elem => {
      elem.visability = elem.complited === false ? true : false
      return elem
    }))
  }

  const toShowComplitedHandler = (todos) => {
    setTodo(todos.map(elem => {
      elem.visability = elem.complited === true ? true : false
      return elem
    }))
  }

  const toClearComplitedHandler = (todos) => {
    setTodo(todos.filter(elem => elem.complited === false))
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
        toClearComplitedHandler={toClearComplitedHandler}
      />


    </div>
  );
}

export default App;
