import { connect } from 'react-redux'
import { changeTopNavbarItemAction } from '../../../actions'
import TopNavbarView from './topNavbarView'

const mapStateToProps = (state, ownProps) => {
	return {
		activeTopNavbarItemId: state.activeTopNavbarItemId
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		changeTopNavbarItem: (topNavbarItemId) => {
			dispatch(changeTopNavbarItemAction(topNavbarItemId))
		}
	}
}

const TopNavbarCont = connect(
	mapStateToProps,
	mapDispatchToProps
)(TopNavbarView)

export default TopNavbarCont
