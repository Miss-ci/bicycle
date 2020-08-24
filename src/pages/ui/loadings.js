import React from "react"

import {Card, Spin, Icon, Alert} from "antd"
import "./ui.less"
export default class Loadings extends React.Component{
    render(){
        const icon = <Icon type="plus" />
        const iconLoading = <Icon type="loading" />
        return (
            <div>
                <Card title="Spin用法" className="card-wrap">
                    <Spin size="small" />
                    <Spin style={{margin: "0 10px"}}/>
                    <Spin size="large"/>
                    <Spin indicator={icon} spinning={true} style={{marginLeft: 10}}/>
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <h2>Alert弹框</h2>
                    <Alert
                        message="React"
                        description="Further details about the context of this alert."
                        type="info"
                    />
                    <br />
                    <h2>将Spin作为容器包裹</h2>
                    <Spin>
                        <Alert
                            message="React"
                            description="Further details about the context of this alert."
                            type="warning"
                        />
                    </Spin>
                    <br />
                    <h2>tip自定义描述文案</h2>
                    <Spin tip="Loading...">
                        <Alert
                            message="React"
                            description="Further details about the context of this alert."
                            type="info"
                        />
                    </Spin>
                    <br />
                    <h2>自定义icon图标loading</h2>
                    <Spin indicator={iconLoading}>
                        <Alert
                            message="React"
                            description="Further details about the context of this alert."
                            type="info"
                        />
                    </Spin>
                </Card>
            </div>
        )
    }
}
