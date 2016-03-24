import ActionTypes from './actionTypes.js'

const ActionCreators = {
  addTodo(text) {
    return { type: ActionTypes.ADD_TODO, text }
  },
  completeTodo(index) {
    return { type: ActionTypes.COMPLETE_TODO, index }
  },
  removeTodo(index) {
    return { type: ActionTypes.REMOVE_TODO, index }
  },
  setVisibilityFilter(filter) {
    return { type: ActionTypes.SET_VISIBILITY_FILTER, filter }
  }
}

export default ActionCreators
