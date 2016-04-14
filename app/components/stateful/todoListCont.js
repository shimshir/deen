import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../../actionCreators'
import TodoListView from './todoListView'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../../visibilityFilters'

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case SHOW_ALL:
			return todos
		case SHOW_COMPLETED:
			return todos.filter(t => t.completed)
		case SHOW_ACTIVE:
			return todos.filter(t => !t.completed)
	}
}

const mapStateToProps = (state) => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onTodoClick: (id) => {
			dispatch(toggleTodo(id))
		},
		onRemoveButtonClick: (id) => {
			dispatch(removeTodo(id))
		}
	}
}

const TodoListCont = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoListView)

export default TodoListCont