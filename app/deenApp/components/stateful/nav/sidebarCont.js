import { connect } from 'react-redux'
import SidebarView from './sidebarView'

const mapStateToProps = (state, ownProps) => {
	return {
		currentSidebar: state.currentSidebar
	}
}

const SidebarCont = connect(
	mapStateToProps,
	undefined
)(SidebarView)

export default SidebarCont
