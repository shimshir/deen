import React from 'react'
import TopNavbarCont from './stateful/nav/topNavbarCont'
import SidebarCont from './stateful/nav/sidebarCont'

const App = ({ children }) => {
	const divStyle = {
		height: '100%'
	};


	return (
		<div>
			<TopNavbarCont />
			<div className="row">
				<div className="col-md-2">
					<SidebarCont />
				</div>
				<div className="col-md-8">
					{children}
				</div>
			</div>
		</div>
	)
}

export default App
