import React from 'react'
import ActionCreators from '../actionCreators'

const MainComponent = React.createClass({
  render () {
    return (
      <div className="button">
        <button onClick={ () => this.props.store.dispatch(ActionCreators.addTodo("test")) }>Click!</button>
      </div>
    )
  }
})

export default MainComponent
