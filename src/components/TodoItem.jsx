function TodoItem({ id, text, complited, doneCheckInputHandler, removeSpanHeandler }) {
  return (
    <li className='todo-item'>
      <div className="fake-checkbox">
        {complited && <div className="fake-checkbox-mark">✓</div>}
      </div>
      <input className="checkbox" type="checkbox" checked={complited} onChange={() => doneCheckInputHandler(id)} />
      <span className='todo-item-text'>{text}</span>
      <span className='todo-item-remove' onClick={() => removeSpanHeandler(id)}>&times;</span>

    </li>
  )
}

export default TodoItem