import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { CHANGE_TOP_SECTION_ACTION } from '../actionTypes'

const activeTopSectionReducer = (activeTopSectionState = '', action) => {
	switch (action.type) {
		case CHANGE_TOP_SECTION_ACTION:
			return action.sectionId
			
		default:
			return activeTopSectionState
	}
}

const MainReducer = combineReducers(
	{
		activeTopSectionId: activeTopSectionReducer,
		routing: routerReducer
	}
)

export default MainReducer
