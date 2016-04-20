import React from 'react'

class ClubsView extends React.Component {
	componentWillMount() {
		this.props.selectSocialTopNavbarItem()
		this.props.selectClubsSidebarItem()
	}

	render() {
		return (
			<div>
				<h1>Clubs</h1>
			</div>
		)
	}
}

export default ClubsView
