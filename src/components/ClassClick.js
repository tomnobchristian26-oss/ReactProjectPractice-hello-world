import React, { Component } from 'react'

class ClassClick extends Component {
    clickHandler() {
        console.log('Botan o kurikkushite kudasai')
    }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler} >Kurikkushite</button>
      </div>
    )
  }
}

export default ClassClick

