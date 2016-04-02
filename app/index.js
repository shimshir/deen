import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import MainComponent from './components/mainComponent'
import ActionCreators from './actionCreators'
import Reducer from './reducer'

const store = createStore(Reducer)

console.log(store.getState())

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
  <MainComponent store={ store } />,
  document.getElementById('content')
)