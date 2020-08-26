import React from "react"
import {Button,Card,Form,Input,Checkbox,Radio,message,Icon} from "antd"

const FormItem=Form.Item;
class FormLogin extends React.Component{

    handelSubmit=()=>{
        let userInfo=this.props.form.getFieldsValue();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${userInfo.userName} 当前你的密码为：${userInfo.userPwd}`)
            }
        })
    }

    render(){
        const {getFieldDecorator}=this.props.form
        return (
            <div>
                <Card title="登录行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder="请输入密码"/>
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登录水平表单"  style={{marginTop: 10}}>
                    <Form layout="horizontal" style={{width: 300}}>
                        <FormItem lable="用户名">
                            {
                                getFieldDecorator("userName",{
                                    initialValue: "",
                                    rules:[
                                        {
                                            required: true,
                                            message: "用户名不能为空"
                                        },
                                        {
                                            min: 5,
                                            message: "用户名不能少于五位"
                                        },
                                        {
                                            // pattern: /^\w+$/g,
                                            pattern: new RegExp(/^\w+$/,"g"),
                                            message: "用户名必须为字母或者数字"
                                        },
                                    ]
                                })(<Input prefix={<Icon type="user" />} placeholder="请输入用户名"/>)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator("userPwd",{
                                    initialValue: "",
                                    rules:[{
                                        min: 8,
                                        message: "密码不能少于8位"
                                    },{
                                        required: true,
                                        message: "密码不能为空"
                                    }]
                                })(<Input prefix={<Icon type="lock" />} type="password" placeholder="请输入密码"/>)
                            }
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator("remember",{
                                    initialValue: true,
                                    valuePropName: 'checked',
                                })(<Checkbox>记住密码</Checkbox>)
                            }
                            <a href="#" style={{float: "right", marginRight: 10}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handelSubmit}>登陆登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormLogin);