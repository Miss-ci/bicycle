import React from "react"

import {Card, Button, Spin, Icon, Alert} from "antd"

export default class Loadings extends React.Component{
    render(){
        const icon = <Icon type="plus" />
        return (
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small" />
                    <Spin />
                    <Spin size="large"/>
                    <Spin indicator={icon}/>
                </Card>
            </div>
        )
    }
}
