import { connect } from 'react-redux'
import EventsView from './eventsView'
import { changeSidebarItemAction, changeTopNavbarItemAction } from '../../../../../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		selectSocialTopNavbarItem: () => {
			dispatch(changeTopNavbarItemAction('social'))
		},
		selectEventsSidebarItem: () => {
			dispatch(changeSidebarItemAction('social-events'))
		}
	}
}

const EventsCont = connect(undefined, mapDispatchToProps)(EventsView)

export default EventsCont
