import React from 'react'

class LoginView extends React.Component {
	componentWillMount() {
		this.props.changeTopNavbarItem('login')
	}

	render() {
		return (
			<div>
				<h1>Login</h1>
			</div>
		)
	}
}

export default LoginView