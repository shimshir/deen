import React, { PropTypes } from 'react'
import Todo from '../todo'

const TodoListView = ({ todos, onTodoClick, onRemoveButtonClick }) => (
	<ul>
		{todos.map(todo =>
			<Todo
				key={todo.id}
				{...todo}
				onClick={() => onTodoClick(todo.id)}
				onRemoveButtonClick={() => onRemoveButtonClick(todo.id)}
			/>
		)}
	</ul>
)

TodoListView.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		completed: PropTypes.bool.isRequired,
		text: PropTypes.string.isRequired
	}).isRequired).isRequired,
	onTodoClick: PropTypes.func.isRequired
}

export default TodoListView
