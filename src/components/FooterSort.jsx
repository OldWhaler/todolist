function FooterSort({
  todo,
  buttonClass,
  toShowAllHandler,
  toShowActiveHandler,
  toShowComplitedHandler,
  toClearComplitedHandler,
  toAddActiveClass
}) {
  const notComplited = todo.filter(elem => !elem.complited)

  return (
    <div className="footer">
      <span>{notComplited.length} items to do</span>

      <div>

        <button
          name="all"
          className={buttonClass['all'] ? 'button-active' : null}
          onClick={(e) => {
            toShowAllHandler(todo)
            toAddActiveClass(e.target.name)
          }}>All</button>

        <button
          name="active"
          className={buttonClass['active'] ? 'button-active' : null}
          onClick={(e) => {
            toShowActiveHandler(todo)
            toAddActiveClass(e.target.name)

          }}>Active</button>

        <button
          name='completed'
          className={buttonClass['completed'] ? 'button-active' : null}
          onClick={(e) => {
            toShowComplitedHandler(todo)
            toAddActiveClass(e.target.name)
          }}>Completed</button>

      </div>

      <button onClick={() => toClearComplitedHandler(todo)}>Clear completed</button>
    </div >
  )
}

export default FooterSort