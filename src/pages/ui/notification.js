import React from "react"

import {Card, Button, notification} from "antd"

import "./ui.less"
export default class Notice extends React.Component{
    openNotification = (type,placement) => {
        // if(placement){
        //     notification[type]({
        //         placement,
        //         message: '发工资了',
        //         description:
        //             'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        //     });
        // }else{
        //     notification[type]({
        //         message: '发工资了',
        //         description:
        //             'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        //     });
        // }
        if(placement){
            // 这样会设置全局方向
            notification.config({
                placement,
            });
        }
        notification[type]({
            message: '发工资了',
            description:
                'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
        });
      };
    render(){
        return (
            <div>
                <Card title="提醒提醒框基本用法" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openNotification("success")}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification("info")}>Info</Button>
                    <Button type="primary" onClick={()=>this.openNotification("warning")}>Warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification("error")}>Error</Button>
                </Card>
                <Card title="提醒提醒框基本用法" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openNotification("success","topLeft")}>Success</Button>
                    <Button type="primary" onClick={()=>this.openNotification("info","topRight")}>Info</Button>
                    <Button type="primary" onClick={()=>this.openNotification("warning","bottomLeft")}>Warning</Button>
                    <Button type="primary" onClick={()=>this.openNotification("error","bottomRight")}>Error</Button>
                </Card>
            </div>
        )
    }
}
