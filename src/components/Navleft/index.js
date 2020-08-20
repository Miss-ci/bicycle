import React, { Component } from 'react'
import { Menu, Icon } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import MenuConfig from './../../config/menuConfig.js'
import "./index.less"

const { SubMenu } = Menu;
export default class NavLeft extends Component {
    componentWillMount() {
        const menuNode = this.renderMenu(MenuConfig)
        this.setState({
            menuNode
        })
    }
    renderMenu = (data) => {
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu key={item.key} title={item.title}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.key} >{item.title}</Menu.Item>
            )
        })
    }
    render() {
        return (
            <div>
                <div className="logo">
                    <img src='/assets/logo-ant.svg' alt='' />
                    <h1>Imooc Ms</h1>
                </div>
                <Menu theme="dark">
                    {this.state.menuNode}
                    {/* <SubMenu key="sub1" title={
                        <span>
                            <MailOutlined />
                            <span>Navigation One</span>
                        </span>
                    }>
                        <Menu.Item key="1">Option 1</Menu.Item>
                        <Menu.Item key="2">Option 2</Menu.Item>
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={
                        <span>
                            <AppstoreOutlined />
                            <span>Navigation two</span>
                        </span>
                    }>
                        <Menu.Item key="5">Option 1</Menu.Item>
                        <Menu.Item key="6">Option 2</Menu.Item>
                        <Menu.Item key="7">Option 3</Menu.Item>
                        <Menu.Item key="8">Option 4</Menu.Item>
                    </SubMenu> */}
                </Menu>
            </div>
        )
    }
}
