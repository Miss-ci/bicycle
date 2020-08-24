import React, { Component } from 'react'

import { Button, Card, Icon, Radio} from 'antd'

import "./ui.less"
const ButtonGroup = Button.Group;
export default class Buttons extends Component {
    state={
        loading: true,
        size: "small"
    }
    closeLoading = () =>{
        this.setState({
            loading: false
        })
    }
    handleSizeChange = (e) => {
        this.setState({
            size: e.target.value
        })
    }
    render() {
        const {loading, size}=this.state
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">primary</Button>
                    <Button>primary</Button>
                    <Button type="dashed">primary</Button>
                    <Button type="danger">primary</Button>
                    <Button disabled>Imooc</Button>
                </Card>
                <Card title="图形按钮" className="card-wrap">
                    <Button icon="puls">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button type="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="vertical-align-bottom">下载</Button>
                </Card>
                <Card title="Loading按钮" className="card-wrap">
                    <Button type="primary" loading={loading}>确定</Button>
                    <Button type="primary" shape="circle" loading={loading}></Button>
                    <Button loading={loading}>点击加载</Button>
                    <Button shape="circle" loading={loading}></Button>
                    <Button type="primary" onClick={this.closeLoading}>关闭</Button>
                </Card> 
                <Card title="按钮组">
                    <ButtonGroup>
                        <Button type="primary">
                            <Icon type="left" />
                            Go back
                        </Button>
                        <Button type="primary">
                            Go forward
                            <Icon type="right" />
                        </Button>
                    </ButtonGroup> 
                </Card>  
                <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group value={size} onChange={this.handleSizeChange}>
                        <Radio value="large">Large</Radio>
                        <Radio value="default">Default</Radio>
                        <Radio value="small">Small</Radio>
                    </Radio.Group>
                    <Button type="primary" size={size}>确定</Button>
                    <Button type="primary" size={size}>取消</Button>
                    <Button type="primary" size={size}>关闭</Button>
                </Card>  
            </div>
        )
    }
}