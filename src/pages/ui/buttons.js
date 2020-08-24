import React, { Component } from 'react'

import { Button, Card} from 'antd'
import {SearchOutlined} from "@ant-design/icons"
export default class Buttons extends Component {
    render() {
        return (
            <div>
                <Card title="基础按钮">
                    <Button type="primary">primary</Button>
                    <Button type="primary" icon={<SearchOutlined />}> primary</Button>
                    <Button type="primary" icon='left'> primary</Button>
                </Card>    
            </div>
        )
    }
}