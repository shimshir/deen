import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Reducer from './reducers/mainReducer'
import App from './components/app'

let store = createStore(Reducer)

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
