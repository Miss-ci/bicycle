import React, { Component } from 'react'
import { Link } from "react-router-dom"
export default class Main extends Component {
    render() {
        return (
            <div>
                <h2>Main</h2>
                <Link to="/main/a">嵌套路由</Link>
                {this.props.children}
            </div>
        )
    }
}
