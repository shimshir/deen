import { combineReducers } from 'redux'
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './actionTypes'
import { SHOW_ALL } from './visibilityFilters'


const todo = (todoState = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case TOGGLE_TODO:
      if (todoState.id !== action.id) {
        return todoState
      }
      return Object.assign({}, todoState, {
        completed: !todoState.completed
      })
    default:
      return todoState
  }
}

const todos = (todosState = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todosState,
        todo(undefined, action)
      ]
    case REMOVE_TODO:
      const nextTodosState = todosState.filter((todo) => todo.id !== action.id)
      return nextTodosState
    case TOGGLE_TODO:
      return todosState.map(todoState =>
        todo(todoState, action)
      )
    default:
      return todosState
  }
}

const visibilityFilter = (visiblityFilterState = SHOW_ALL, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return visiblityFilterState
  }
}

const Reducer = combineReducers({
  visibilityFilter,
  todos
})

export default Reducer
