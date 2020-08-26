import React from "react"
import {Button,Card,Form,Input,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,Upload,Icon,message} from "antd"

const FormItem=Form.Item;
class FormRegister extends React.Component{
    render(){
        const {getFieldDecorator}=this.props.form
        return (
            <div>
                <Card title="注册表单">
                    <Form layout="horizontal">
                        <FormItem label="用户名">
                            {
                                getFieldDecorator("userName",{
                                    initialValue: "",
                                    rules: [{
                                        required: true,
                                        messeage: "用户名不能为空"
                                    }]
                                })(<Input placeholder="请输入用户名" />)
                            }
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormRegister);