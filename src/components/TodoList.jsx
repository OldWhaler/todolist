import TodoItem from './TodoItem'

function TodoList({ todo, checkboxHandler, removeSpanHeandler }) {
  return (
    <ul>
      {todo.map(elem => <TodoItem
        key={elem.id}
        {...elem}
        checkboxHandler={checkboxHandler}
        removeSpanHeandler={removeSpanHeandler} />)}
    </ul>
  )
}

export default TodoList