import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { CHANGE_TOP_NAVBAR_ITEM_ACTION, CHANGE_SIDEBAR_ITEM_ACTION } from '../actionTypes'
import { homeSidebar, academicSidebar, socialSidebar } from './sidebars'

const activeTopNavbarItemReducer = (activeTopNavbarItemState = '', action) => {
	switch (action.type) {
		case CHANGE_TOP_NAVBAR_ITEM_ACTION:
			return action.topNavbarItemId
		default:
			return activeTopNavbarItemState
	}
}

const currentSidebarReducer = (currentSidebarState = {}, action) => {
		switch (action.type) {
		case CHANGE_TOP_NAVBAR_ITEM_ACTION:
			switch (action.topNavbarItemId) {
				case 'home':
					return homeSidebar
				case 'academic':
					return academicSidebar
				case 'social':
					return socialSidebar
				default:
					return {}
			}
		case CHANGE_SIDEBAR_ITEM_ACTION:
			return Object.assign({}, currentSidebarState, { activeItemId: action.sidebarItemId })
		default:
			return currentSidebarState
	}
}

const MainReducer = combineReducers(
	{
		activeTopNavbarItemId: activeTopNavbarItemReducer,
		currentSidebar: currentSidebarReducer,
		routing: routerReducer
	}
)

export default MainReducer
