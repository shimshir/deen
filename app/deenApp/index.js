import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import MainReducer from './reducers/mainReducer'
import App from './components/app'
import HomeCont from './components/stateful/content/homeCont'
import AcademicCont from './components/stateful/content/academicCont'
import SocialCont from './components/stateful/content/socialCont'

import LoginCont from './components/stateful/login/loginCont'

const store = createStore(MainReducer)

const history = syncHistoryWithStore(browserHistory, store)

const Root = () => {
	return (<div><h1>Root</h1></div>)
}

const NoMatch = () => {
	return (<div><h1>404</h1></div>)
}

render(
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={App}>
				<IndexRoute component={Root} />
				<Route path="home" component={HomeCont} />
				<Route path="academic" component={AcademicCont} />
				<Route path="social" component={SocialCont}/>
				<Route path="login" component={LoginCont}/>
				<Route path="*" component={NoMatch}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)
