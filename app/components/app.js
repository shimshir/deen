import React from 'react'
import Footer from './footer'
import AddTodo from './addTodo'
import TodoListCont from './stateful/todoListCont'

const App = () => (
  <div>
    <AddTodo />
    <TodoListCont />
    <Footer />
  </div>
)

export default App
