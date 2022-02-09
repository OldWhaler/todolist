import React from "react"

function InputField({ buttonBlurHandler, addButtonHandler, refInput }) {

  return (
    <label className='add-todo'>
      <input type="text" ref={refInput} onBlur={buttonBlurHandler} />
      <button onClick={addButtonHandler} >add todo</button>
    </label>
  )
}

export default InputField