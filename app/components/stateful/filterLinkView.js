import React, { PropTypes } from 'react'

const FilterLinkView = ({ active, children, onFilterLinkClick }) => {
	if (active) {
		return <span>{children}</span>
	}

	return (
		<a href="#"
			 onClick={e => {
				 e.preventDefault()
				 onFilterLinkClick()
			 }}
		>
			{children}
		</a>
	)
}

FilterLinkView.propTypes = {
	active: PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	onFilterLinkClick: PropTypes.func.isRequired
}

export default FilterLinkView
