import { CHANGE_TOP_SECTION_ACTION } from './actionTypes'

export const changeTopSectionAction = (sectionId) => {
	return { type: CHANGE_TOP_SECTION_ACTION, sectionId: sectionId }
}
