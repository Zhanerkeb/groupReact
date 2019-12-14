import { Form, Icon, Input, Button, Checkbox } from 'antd';
import React,{Component} from 'react'

import Header from "../header";
import {Link} from 'react-router-dom'
import firebase from 'firebase'

class SignUp extends Component {
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                // console.log('Received values of form: ', values);
                firebase.auth().createUserWithEmailAndPassword(values.email,values.password).then(authUser=>{
                    console.log(authUser)
                    }).catch(error=>{
                        console.log(error)
                })
            }
        });
    };


    render() {

        const { getFieldDecorator } = this.props.form;
        return (
            <div style={{width:"80%",margin:'0 auto'}}>
                <Header/>

                <Form style={{paddingTop:"100px",width:"80%",margin:"0 auto"}} onSubmit={this.handleSubmit} className="login-form">
                    <p>Create Your Account</p>
                    <Form.Item>
                        {getFieldDecorator('username', {
                            rules: [
                                {
                                    required: true,
                                    message: 'Please input username!'
                                }
                            ],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Username"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('email', {
                            rules: [{
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                                {
                                required: true,
                                message: 'Please input your email!'
                            }
                                ],
                        })(
                            <Input
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Email"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{ required: true, message: 'Please input your Password!' }],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)}
                        <Link to={'/reset'} className="login-form-forgot" href="">
                            Forgot password
                        </Link>
                        <Button type="primary" style={{display:"block",margin:"0 auto"}} htmlType="submit" className="login-form-button">
                            Register
                        </Button>
                        Or <Link to={'/signin'}>login now!</Link>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

const WrappedNormalSignUpForm = Form.create({ name: 'normal_login' })(SignUp);

export default WrappedNormalSignUpForm;