import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    increment() {
        // this.setState({
        //   count: this.state.count + 1
        // }, () => {
        //   console.log('Callback Value:', this.state.count )
        // })
        // console.log(this.state.count)

        this.setState((prevState, props) => ({
          count: prevState.count + 1
        }))
        console.log(this.state.count)
    } 

      incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
      }

  render() {
    return (
     <di v>
        <div>
        Count - {this.state.count}
      </div>
      <button onClick={() => this.incrementFive()}>Increment</button>
     </di>
    )
  }
}

export default Counter
