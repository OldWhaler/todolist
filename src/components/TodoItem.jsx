function TodoItem({ id, text, complited, visability, checkboxHandler, removeSpanHeandler }) {

  return (
    <>
      {visability && <li className='todo-item' >
        <div className="fake-checkbox">
          {complited && <div className="fake-checkbox-mark">✓</div>}
        </div>
        <input className="checkbox" type="checkbox" checked={complited} onChange={() => checkboxHandler(id)} />
        <span className='todo-item-text'>{text}</span>
        <span className='todo-item-remove' onClick={() => removeSpanHeandler(id)}>&times;</span>

      </li>}
    </>
  )
}

export default TodoItem