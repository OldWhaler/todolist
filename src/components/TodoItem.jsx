function TodoItem({ id, text, complited }) {
  return (
    <li className='todo-item' key={id}>
      <input type="checkbox" checked={complited} onChange={() => doneCheckInputHandler(id)} />
      <span className='todo-item-text'>{text}</span>
      <span className='todo-item-remove' onClick={() => removeSpanHeandler(id)}>&times;</span>

    </li>
  )
}

export default TodoItem