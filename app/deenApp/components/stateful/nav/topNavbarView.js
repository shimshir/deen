import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const TopNavbarView = ({ activeTopNavbarItemId, changeTopNavbarItem }) => {
	const topNavbarItems = [{ text: 'Home', id: 'home'}, { text: 'Academic', id: 'academic'}, { text: 'Social', id: 'social'}]

	return (
		<nav className="navbar navbar-inverse topnavbar">
			<div className="navbar-header">
				<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span className="sr-only">Toggle navigation</span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
					<span className="icon-bar"></span>
				</button>
				<Link className="navbar-brand" to="/" onClick={() => changeTopNavbarItem('root')}>Kafana</Link>
			</div>

			<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul className="nav navbar-nav navbar-left">
					{
						topNavbarItems.map(topNavbarItem => 
							<li className={ topNavbarItem.id == activeTopNavbarItemId ? 'active' : '' } key={topNavbarItem.id}>
								<Link to={`/${topNavbarItem.id}`}>{topNavbarItem.text}</Link>
							</li>
						)
					}
				</ul>
				<div className="navbar-right">
					<form className="navbar-form navbar-left" role="search">
						<div className="form-group">
							<input type="text" className="form-control" placeholder="Search" />
						</div>
						<button type="submit" className="btn btn-default">Go</button>
					</form>
					<ul className="nav navbar-nav">
						<li className="dropdown">
							<a href="#" className="dropdown-toggle user-profile-dropdown" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
								<img src="/static/img/placeholder-avatar.png" className="useravatar"/><span className="caret"></span>
							</a>
							<ul className="dropdown-menu">
								<li><a href="#">Action</a></li>
								<li><a href="#">Another action</a></li>
								<li><a href="#">Something else here</a></li>
								<li role="separator" className="divider"></li>
								<li><a href="#">Separated link</a></li>
							</ul>
						</li>
						<li className={ 'login' == activeTopNavbarItemId ? 'active' : '' }>
							<Link to="/login">Sign in</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	)
}

TopNavbarView.propTypes = {
}

export default TopNavbarView