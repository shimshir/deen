import { connect } from 'react-redux'
import HomeView from './homeView'
import { changeTopNavbarItemAction } from '../../../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		changeTopNavbarItem: (topNavbarItemId) => {
			dispatch(changeTopNavbarItemAction(topNavbarItemId))
		}
	}
}

const HomeCont = connect(undefined, mapDispatchToProps)(HomeView)

export default HomeCont
