import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER } from './actionTypes'

const ActionCreators = {
  addTodo(text) {
    return { type: ADD_TODO, text }
  },
  completeTodo(index) {
    return { type: COMPLETE_TODO, index }
  },
  removeTodo(index) {
    return { type: REMOVE_TODO, index }
  },
  setVisibilityFilter(filter) {
    return { type: SET_VISIBILITY_FILTER, filter }
  }
}

export default ActionCreators
