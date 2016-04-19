import React from 'react'

class HomeView extends React.Component {
	componentWillMount() {
		this.props.changeTopNavbarItem('home')
	}

	render() {
		return (
			<div>
				<h1>Home</h1>
			</div>
		)
	}
}

export default HomeView