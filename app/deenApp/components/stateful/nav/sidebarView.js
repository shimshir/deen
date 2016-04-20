import React from 'react'
import { Link } from 'react-router'

const SidebarView = ({ currentSidebar }) => {
	let spanClasses = "pull-right hidden-xs showopacity glyphicon "

	if (currentSidebar.items) {
		return (
			<nav className="navbar navbar-default sidebar">
				<ul className="nav navbar-nav">
				{
					currentSidebar.items.map((sidebarItem, index) => 
						<li key={index} className={currentSidebar.activeItemId == sidebarItem.id ? 'active' : ''}>
							<Link to={`${currentSidebar.rootPath}${sidebarItem.path}`}>
								{sidebarItem.text}
								<span className={spanClasses + sidebarItem.icon}></span>
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
