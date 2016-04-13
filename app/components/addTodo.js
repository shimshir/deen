import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actionCreators'

let AddTodo = ({ dispatch }) => {
  let _input

  return (
    <div>
      <input ref={node => {_input = node}} />
      <button 
        onClick={() => {
            if (_input.value) {
              dispatch(addTodo(_input.value))
              _input.value = ''
              _input.focus()
            }
          }
        }>
        Add Todo
      </button>
    </div>
  )
}


AddTodo = connect()(AddTodo)

export default AddTodo

