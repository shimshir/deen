import React from 'react'

class MessagesView extends React.Component {
	componentWillMount() {
		this.props.selectSocialTopNavbarItem()
		this.props.selectMessagesSidebarItem()
	}

	render() {
		return (
			<div>
				<h1>Messages</h1>
			</div>
		)
	}
}

export default MessagesView
