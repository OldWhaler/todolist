import React from 'react'

export default function TodoItem({ todoProps }) {
  return (
    <li className='todo-item' key={todoProps.id}>
      <input type="checkbox" checked={todoProps.complited} onChange={() => doneCheckInputHandler(todoProps.id)} />
      <span className='todo-item-text'>{todoProps.text}</span>
      <span className='todo-item-remove' onClick={() => removeSpanHeandler(todoProps.id)}>&times;</span>

    </li>
  )
}