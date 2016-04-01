import React from 'react'

const MainComponent = React.createClass({
  render () {
    return (
      <div className="button">
        <button onClick={ () => this.props.store.dispatch(this.props.action()) }>Click!</button>
      </div>
    )
  }
})

export default MainComponent
