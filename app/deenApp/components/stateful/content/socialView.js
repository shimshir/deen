import React from 'react'

class SocialView extends React.Component {
	componentWillMount() {
		this.props.changeTopNavbarItem('social')
	}

	render() {
		return (
			<div>
				<h1>Social</h1>
			</div>
		)
	}
}

export default SocialView