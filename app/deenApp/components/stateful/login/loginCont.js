import LoginView from './loginView'
import { connect } from 'react-redux'
import { changeTopNavbarItemAction } from '../../../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		changeTopNavbarItem: (topNavbarItemId) => {
			dispatch(changeTopNavbarItemAction(topNavbarItemId))
		}
	}
}

const LoginCont = connect(undefined, mapDispatchToProps)(LoginView)

export default LoginCont
