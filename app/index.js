import { createStore } from 'redux'
import ActionCreators from './actionCreators.js'
import Reducer from './reducer.js'
import React from 'react'
import ReactDOM from 'react-dom'
import MainComponent from './components/mainComponent.js'

const store = createStore(Reducer)

console.log(store.getState())

const unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(
  <MainComponent store={ store } action={ () => ActionCreators.addTodo("42") }/>,
  document.getElementById('content')
)