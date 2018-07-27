import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { DB_CONFIG } from '../Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
const FormItem = Form.Item;
class Login extends React.Component {

  constructor(props){
    super(props);
   // this.authWithFacebook = authWithFacebook.bind(this);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }


  authWithFacebook(){
    console.log("authed with facebook")
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (

     <div className="Login-form">
       <Button type="primary" htmlType="submit" className="login-form-button"  onClick={ () => { this.authWithFacebook() }}>
        Login with Facebook 
      </Button>
      <hr />

      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
      </div>
    );
  }
}

const WrappedNormalLoginForm = Form.create()(Login);

export default Form.create()(Login);