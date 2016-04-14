import { connect } from 'react-redux'
import { setVisibilityFilter } from '../../actionCreators'
import FilterLinkView from './filterLinkView'

const mapStateToProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.visibilityFilter
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		onFilterLinkClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter))
		}
	}
}

const FilterLinkCont = connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterLinkView)

export default FilterLinkCont