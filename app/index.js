import ReactDOM from 'react-dom'
import React from 'react'
import ActionCreators from './actionCreators.js'
import CommentBox from './components/commentBox.js'

console.log(ActionCreators.addTodo('testAdd'));


ReactDOM.render(
  <CommentBox />,
  document.getElementById('content')
);
