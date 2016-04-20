import { connect } from 'react-redux'
import AcademicView from './academicView'
import { changeTopNavbarItemAction } from '../../../../actions'

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		changeTopNavbarItem: (topNavbarItemId) => {
			dispatch(changeTopNavbarItemAction(topNavbarItemId))
		}
	}
}

const AcademicCont = connect(undefined, mapDispatchToProps)(AcademicView)

export default AcademicCont
