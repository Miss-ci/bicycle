import React, { Component } from 'react'
import { NavLink } from "react-router-dom"
import { Menu } from 'antd';
// import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
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
                <Menu.Item key={item.key} >
                    <NavLink to={item.key}>{item.title}</NavLink>
                </Menu.Item>
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
                </Menu>
            </div>
        )
    }
}
