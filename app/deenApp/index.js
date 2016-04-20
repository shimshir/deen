import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import MainReducer from './reducers/mainReducer'
import App from './components/app'
import HomeCont from './components/stateful/content/home/homeCont'
import AcademicCont from './components/stateful/content/academic/academicCont'
import SocialCont from './components/stateful/content/social/socialCont'
import MessagesCont from './components/stateful/content/social/messages/messagesCont'
import EventsCont from './components/stateful/content/social/events/eventsCont'
import ClubsCont from './components/stateful/content/social/clubs/clubsCont'

import LoginCont from './components/stateful/login/loginCont'

const store = createStore(MainReducer)
//const unsubscribe = store.subscribe(() => console.log(store.getState()))

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
				<Route path="social" component={SocialCont} />
				<Route path="social/messages" component={MessagesCont}/>
				<Route path="social/events" component={EventsCont}/>
				<Route path="social/clubs" component={ClubsCont}/>
				<Route path="login" component={LoginCont}/>
				<Route path="*" component={NoMatch}/>
			</Route>
		</Router>
	</Provider>,
	document.getElementById('root')
)
