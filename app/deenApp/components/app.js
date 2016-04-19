import React from 'react'
import TopNavbarCont from './stateful/nav/topNavbarCont'

const App = ({ children }) => {
	return (
		<div>
			<TopNavbarCont />
			{children}
		</div>
	)
}

export default App
