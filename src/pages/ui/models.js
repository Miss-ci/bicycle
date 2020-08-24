import React, { Component } from 'react'
import { Modal, Card, Button} from 'antd'
export default class Model extends Component {
    state = {
        visible: false
    }
    handleOk = () =>{
        this.setState({
            visible: true
        })
    }
    render() {
        return (
            <div>
                <Card title="基础模态框">
                    <Button type="primary">Open</Button>
                    <Button type="primary">自定义页脚</Button>
                    <Button type="primary">距离顶部20</Button>
                </Card>
                {/* <Modal 
                    title="React" 
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>欢迎学习antd 哈哈哈</p>
                </Modal> */}
            </div>
        )
    }
}