import React, { Component } from 'react'

import Header from './Header'
import Bookpage from './Bookpage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Bookpage />
      </div>
    )
  }
}
export default App
