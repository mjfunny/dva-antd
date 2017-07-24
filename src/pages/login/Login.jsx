import React, { Component } from 'react';
import { Input, Button, Form, Icon, message } from 'antd';
import { hashHistory } from 'dva/router';
import cookie from 'js-cookie';
import styles from './Login.less';

const FormItem = Form.Item;

class Login extends Component {

  constructor(props) {
    super(props);
    this.timer = null;
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.timer = null;
  }

  handleSubmit() {
    this.props.form.validateFields((err, values) => {
      if (!err) {
        const { userName, password } = values;
        if (userName === 'admin' && password === 'admin') {
          const user = {
            userName,
            password,
          };
          cookie.set('user', user);
          message.success('登录成功!');
          this.timer = setTimeout(() => {
            hashHistory.push('/user');
          }, 1500);
        } else message.error('用户名或密码错误!');
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.loginBg}>
        <div className={styles.loginContent}>
          <Form>
            <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="默认: admin" />,
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="默认: admin" />,
              )}
            </FormItem>
          </Form>
          <Button
            type="primary"
            className={styles.loginBtn}
            onClick={this.handleSubmit.bind(this)}
          >登录</Button>
        </div>
      </div>
    );
  }
}


export default Form.create()(Login);
