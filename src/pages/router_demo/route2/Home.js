import React, { Component } from "react"
import { Link, HashRouter, } from "react-router-dom"

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/main">Home</Link></li>
                    <li><Link to="/about/123">About</Link></li>
                    <li><Link to="/topic">Topic</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }

}