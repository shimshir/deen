import React from 'react'

class AcademicView extends React.Component {
	componentWillMount() {
		this.props.changeTopNavbarItem('academic')
	}

	render() {
		return (
			<div>
				<h1>Academic</h1>
			</div>
		)
	}
}

export default AcademicView