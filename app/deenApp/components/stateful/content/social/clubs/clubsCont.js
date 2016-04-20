import { connect } from 'react-redux'
import ClubsView from './clubsView'
import { changeSidebarItemAction, changeTopNavbarItemAction } from '../../../../../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		selectSocialTopNavbarItem: () => {
			dispatch(changeTopNavbarItemAction('social'))
		},
		selectClubsSidebarItem: () => {
			dispatch(changeSidebarItemAction('social-clubs'))
		}
	}
}

const ClubsCont = connect(undefined, mapDispatchToProps)(ClubsView)

export default ClubsCont
