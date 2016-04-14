import React, { PropTypes } from 'react'

const Todo = ({ onClick, onRemoveButtonClick, completed, text }) => (
	<li>
		<span
			onClick={onClick}
			style={{textDecoration: completed ? 'line-through' : 'none'}}>
			{text}
		</span>
		<button onClick={onRemoveButtonClick}>X</button>
	</li>
)

Todo.propTypes = {
	onClick: PropTypes.func.isRequired,
	completed: PropTypes.bool.isRequired,
	text: PropTypes.string.isRequired
}

export default Todo
