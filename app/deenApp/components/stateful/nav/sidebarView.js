import React from 'react'
import { Link } from 'react-router'

const SidebarView = ({ currentSidebar }) => {
	if (currentSidebar.items) {
		return (
			<nav className="navbar navbar-default sidebar">
				<ul className="nav navbar-nav">
				{
					currentSidebar.items.map((sidebarItem, index) => 
						<li key={index}>
							<Link to={`${currentSidebar.rootPath}${sidebarItem.path}`}>
								{sidebarItem.text}
								<span className="pull-right hidden-xs showopacity glyphicon glyphicon-home"></span>
							</Link>
						</li>
					)
				}
				</ul>
			</nav>
		)
	} else {
		return (<div></div>)
	}
}

export default SidebarView
