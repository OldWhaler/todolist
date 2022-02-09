import TodoItem from './TodoItem'

function TodoList({ todo, doneCheckInputHandler, removeSpanHeandler }) {
  console.log(todo)
  return (
    <ul>
      {todo.map(elem => <TodoItem
        id={elem.id}
        text={elem.text}
        complited={elem.complited}
        doneCheckInputHandler={doneCheckInputHandler}
        removeSpanHeandler={removeSpanHeandler} />)}
    </ul>
  )
}

export default TodoList