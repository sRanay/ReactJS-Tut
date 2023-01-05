import React, { Component } from 'react'

// Class Component
class Message extends Component {
    constructor() {
        super()
        this.state = { // State
            message: 'Welcome Vistor'
        }
    }

    changeMessage() {
        this.setState({
            message: 'Thank you for subscribing'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subcribe</button>
            </div>
        )
    }
}

export default Message