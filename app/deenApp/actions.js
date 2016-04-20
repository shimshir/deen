import { CHANGE_TOP_NAVBAR_ITEM_ACTION, CHANGE_SIDEBAR_ITEM_ACTION } from './actionTypes'

export const changeTopNavbarItemAction = (topNavbarItemId) => {
	return { type: CHANGE_TOP_NAVBAR_ITEM_ACTION, topNavbarItemId: topNavbarItemId }
}

export const changeSidebarItemAction = (sidebarItemId) => {
	return { type: CHANGE_SIDEBAR_ITEM_ACTION, sidebarItemId: sidebarItemId }
}
