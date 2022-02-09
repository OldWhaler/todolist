import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todolistProps }) {
  return (
    <ul>
      {todolistProps.map(elem => <TodoItem todoProps={elem} />)}
    </ul>
  )
}