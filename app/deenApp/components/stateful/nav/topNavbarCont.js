import { connect } from 'react-redux'
import { changeTopSectionAction } from '../../../actions'
import TopNavbarView from './topNavbarView'

const mapStateToProps = (state, ownProps) => {
	return {
		activeTopSectionId: state.activeTopSectionId
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		changeTopSection: (topSectionId) => {
			dispatch(changeTopSectionAction(topSectionId))
		}
	}
}

const TopNavbarCont = connect(
	mapStateToProps,
	mapDispatchToProps
)(TopNavbarView)

export default TopNavbarCont
