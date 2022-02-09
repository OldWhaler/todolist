import TodoItem from './TodoItem'

function TodoList({ todo, doneCheckInputHandler, removeSpanHeandler }) {
  return (
    <ul>
      {todo.map(elem => <TodoItem
        key={elem.id}
        {...elem}
        doneCheckInputHandler={doneCheckInputHandler}
        removeSpanHeandler={removeSpanHeandler} />)}
    </ul>
  )
}

export default TodoList