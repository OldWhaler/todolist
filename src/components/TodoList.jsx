import TodoItem from './TodoItem'

function TodoList(todo) {
  return (
    <ul>
      {todo.map(elem => <TodoItem id={elem.id} text={elem.text} complited={elem.complited} />)}
    </ul>
  )
}

export default TodoList