import { combineReducers } from 'redux'
import { ADD_TODO, REMOVE_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER } from './actionTypes'
import VisiblityFilters from './visibilityFilters'

function visibilityFilter(visiblityFilterState = VisiblityFilters.SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return visiblityFilterState
  }
}

function todos(todosState = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...todosState,
        {
          text: action.text,
          completed: false
        }
      ]
    case REMOVE_TODO:
      return todosState.filter((todo, index) => index !== action.index)
    case COMPLETE_TODO:
      return todosState.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: true
          })
        }
        return todo
      })
    default:
      return todosState
  }
}

const Reducer = combineReducers({
  visibilityFilter,
  todos
})

export default Reducer
