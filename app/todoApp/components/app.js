import React from 'react'
import Footer from './footer'
import AddTodo from './addTodo'
import TodoListCont from './stateful/todoListCont'

const App = () => (
	<div>
		<h1>Deen</h1>
		<AddTodo />
		<TodoListCont />
		<Footer />
	</div>
)

export default App
