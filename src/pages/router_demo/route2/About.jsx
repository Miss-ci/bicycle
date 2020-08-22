import React, { Component } from 'react'

export default class About extends Component {

    render() {
        console.log(this.props)
        return (
            <div>
                <h2>About</h2>
                {this.props.match.params.id}
            </div>
        )
    }
}
