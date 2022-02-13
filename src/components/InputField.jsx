import React from "react"

function InputField({ toShowActiveHandler, inputKeydownHandler, inputBlurHandler, addButtonHandler, refInput }) {

  return (
    <label className='add-todo'>
      <input type="text" ref={refInput} onBlur={inputBlurHandler} onKeyDown={inputKeydownHandler} />
      <button onClick={addButtonHandler} >add todo</button>
    </label>
  )
}

export default InputField