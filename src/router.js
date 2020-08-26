import React, { Component } from 'react'
import { HashRouter, Route, Switch } from "react-router-dom"
import App from "./App";
import Login from "./pages/login"
import Admin from "./admin"
// import Home from "./pages/home"
import Nomatch from "./pages/nomatch"
import Buttons from "./pages/ui/buttons"
import Models from "./pages/ui/models"
import Loadings from "./pages/ui/loadings"
import Notice from "./pages/ui/notification"
import Messages from "./pages/ui/message"
import FormLogin from "./pages/form/login"
import Formregister from "./pages/form/register"
export default class MyRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App>
                    {/* <Switch> */}
                    <Route path="/login" component={Login} />
                    {/* <Route path="/home" component={Home} /> */}
                    <Route path="/admin" render={() =>
                        <Admin>
                            <Switch>
                                <Route path="/admin/ui/buttons" component={Buttons} />
                                <Route path="/admin/ui/modals" component={Models} />
                                <Route path="/admin/ui/loadings" component={Loadings} />
                                <Route path="/admin/ui/notification" component={Notice} />
                                <Route path="/admin/ui/messages" component={Messages} />
                                <Route path="/admin/form/login" component={FormLogin} />
                                <Route path="/admin/form/reg" component={Formregister} />
                                <Route component={Nomatch} />
                            </Switch>
                        </Admin>
                    } />
                    {/* <Route component={Nomatch} /> */}
                    {/* </Switch> */}
                </App>
            </HashRouter>
        )
    }
}
