import { CHANGE_TOP_NAVBAR_ITEM_ACTION } from './actionTypes'

export const changeTopNavbarItemAction = (topNavbarItemId) => {
	return { type: CHANGE_TOP_NAVBAR_ITEM_ACTION, topNavbarItemId: topNavbarItemId }
}
