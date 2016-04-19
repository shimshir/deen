import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { CHANGE_TOP_NAVBAR_ITEM_ACTION } from '../actionTypes'

const activeTopNavbarItemReducer = (activeTopNavbarItemState = '', action) => {
	switch (action.type) {
		case CHANGE_TOP_NAVBAR_ITEM_ACTION:
			return action.topNavbarItemId
		default:
			return activeTopNavbarItemState
	}
}

const homeSidebar = {
	id: 'home',
	rootPath: '/home',
	items: [
		{text: 'Home 1', path: '/home1'},
		{text: 'Home 2', path: '/home2'},
		{text: 'Home 3', path: '/home3'}
	]
}

const academicSidebar = {
	id: 'academic',
	rootPath: '/academic',
	items: [
		{text: 'Academic 1', path: '/academic1'},
		{text: 'Academic 2', path: '/academic2'},
		{text: 'Academic 3', path: '/academic3'}
	]
}

const socialSidebar = {
	id: 'social',
	rootPath: '/social',
	items: [
		{text: 'Social 1', path: '/social1'},
		{text: 'Social 2', path: '/social2'},
		{text: 'Social 3', path: '/social3'}
	]
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
