import React, { Component } from 'react'
import { HashRouter, Route, Redirect, Switch } from "react-router-dom"
import Home from "./Home"
import Main from "./Main"
import About from "./About"
import Topic from "./Topic"
export default class IRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Home>
                    <Switch>
                        <Route exact={true} path='/'>
                            <Redirect to='/main' />
                        </Route>
                        <Route path='/main' render={() => {
                            return (
                                <Main>
                                    <Route exact={true} path='/main/a' component={About} />
                                </Main>
                            )
                        }} />
                        <Route path='/about/:id' component={About} />
                        <Route path='/topic' component={Topic} />
                    </Switch>
                </Home>
            </HashRouter>
        )
    }
}
