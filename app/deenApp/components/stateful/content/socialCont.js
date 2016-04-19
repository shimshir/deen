import { connect } from 'react-redux'
import SocialView from './socialView'
import { changeTopNavbarItemAction } from '../../../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		changeTopNavbarItem: (topNavbarItemId) => {
			dispatch(changeTopNavbarItemAction(topNavbarItemId))
		}
	}
}

const SocialCont = connect(undefined, mapDispatchToProps)(SocialView)

export default SocialCont
