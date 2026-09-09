import React, { Component } from 'react'

  class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Konnichiwa'
      }

    //   this.clickHandler = this.clickHandler.bind(this)
    }
    

    // clickHandler() {
    //     this.setState ({
    //         message: 'Sayounara'
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState ({
            message: 'Sayounara'
        })
    }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)} >Kurikku</button> */}
        {/* <button onClick={() => this.clickHandler()} >Kurikku</button> */}
        <button onClick={this.clickHandler} >Kurikku</button>
      </div>
    )
  }
}

export default EventBind
