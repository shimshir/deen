import { connect } from 'react-redux'
import MessagesView from './messagesView'
import { changeSidebarItemAction, changeTopNavbarItemAction } from '../../../../../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		selectSocialTopNavbarItem: () => {
			dispatch(changeTopNavbarItemAction('social'))
		},
		selectMessagesSidebarItem: () => {
			dispatch(changeSidebarItemAction('social-messages'))
		}
	}
}

const MessagesCont = connect(undefined, mapDispatchToProps)(MessagesView)

export default MessagesCont
