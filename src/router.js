import React, { Component } from 'react'
import { HashRouter, Route, Switch } from "react-router-dom"
import App from "./App";
import Login from "./pages/login"
import Admin from "./admin"
import Buttons from "./pages/ui/buttons"
import Models from "./pages/ui/models"
import Nomatch from "./pages/nomatch"
export default class MyRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/ui" render={() =>
                        <Admin>
                            <Switch>
                                <Route path="/ui/buttons" component={Buttons} />
                                <Route path="/ui/modals" component={Models} />
                                <Route component={Nomatch} />
                            </Switch>
                        </Admin>
                    } />
                    <Route component={Nomatch} />
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}
