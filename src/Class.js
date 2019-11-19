import React, { Component } from 'react'

export default class Class extends Component {
constructor(props){
    super (props)
    this.state = {
        count : 0
    }
}

incre(){
    this.setState({
        count : this.state.count + 1
    })
}


decre(){
   
    this.setState({
        count : this.state.count - 1
    })
    if (this.state.count < 1){
        this.setState({
            count : 0
        })  
    }
}


reset(){
    this.setState({
        count : 0
    })
}


    render() {

        return (
            <div>
    <h1>{this.state.count}</h1>
    <button onClick={() => this.incre()}>+</button>
    <button onClick={() => this.decre()}>-</button>
    <button onClick={() => this.reset()}>reset</button>


            </div>
        )
    }
}
