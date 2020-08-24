import React, { Component } from 'react'
import { Modal, Card, Button} from 'antd'

import "./ui.less"
export default class Models extends Component {
    state = {
        visible1: false,
        visible2: false,
        visible3: false,
        visible4: false
    }
    handleOk = (type) =>{
        this.setState({
            [type]: true
        })
    }
    handleCancel = (type)=>{
        this.setState({
            [type]: false
        })
    }
    handleComfirm = (type)=>{
        Modal[type]({
            title: "确认",
            content: "你确定你学会React了吗",
            onOk() {},
            onCancel() {}
        })
    }
    render() {
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleOk("visible1")}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleOk("visible2")}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>this.handleOk("visible3")}>距离顶部20</Button>
                    <Button type="primary" onClick={()=>this.handleOk("visible4")}>水平垂直居中</Button>
                </Card>
                <Modal 
                    title="React" 
                    visible={this.state.visible1}
                    onOk={this.handleCancel}
                    onCancel={()=>this.handleCancel("visible1")}
                >
                    <p>欢迎学习antd 哈哈哈</p>
                </Modal>
                <Modal 
                    title="React" 
                    visible={this.state.visible2}
                    onOk={this.handleCancel}
                    okText="下一步"
                    cancelText="算了"
                    onCancel={()=>this.handleCancel("visible2")}
                >
                    <p>欢迎学习antd 哈哈哈</p>
                </Modal>
                <Modal 
                    title="React" 
                    style={{top: 20}}
                    visible={this.state.visible3}
                    onOk={this.handleCancel}
                    okText="下一步"
                    cancelText="算了"
                    onCancel={()=>this.handleCancel("visible3")}
                >
                    <p>欢迎学习antd 哈哈哈</p>
                </Modal>
                <Modal 
                    title="React" 
                    visible={this.state.visible4}
                    onOk={this.handleCancel}
                    okText="下一步"
                    cancelText="算了"
                    onCancel={()=>this.handleCancel("visible4")}
                >
                    <p>欢迎学习antd 哈哈哈</p>
                </Modal>
                <Card title="基础信息框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleComfirm("info")}>Open</Button>
                    <Button type="primary" onClick={()=>this.handleComfirm("success")}>自定义页脚</Button>
                    <Button type="primary" onClick={()=>this.handleComfirm("error")}>距离顶部20</Button>
                    <Button type="primary" onClick={()=>this.handleComfirm("warning")}>水平垂直居中</Button>
                </Card>
            </div>
        )
    }
}