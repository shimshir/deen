import React from 'react'

class EventsView extends React.Component {
	componentWillMount() {
		this.props.selectSocialTopNavbarItem()
		this.props.selectEventsSidebarItem()
	}

	render() {
		return (
			<div>
				<h1>Events</h1>
			</div>
		)
	}
}

export default EventsView
