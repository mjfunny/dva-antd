import React, { Component } from 'react';
import { Button, Modal, Form, Input, Radio, message } from 'antd';
import { connect } from 'dva';

const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 18 },
};

function isMale(detail) {
  if (detail) {
    return detail.isMale ? 1 : 0;
  } else return 1;
}

class UserModalButton extends Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  // 点击弹窗
  handleShow() {
    if (this.props.type === 'edit') {
      this.props.dispatch({
        type: 'users/detail',
        payload: { id: this.props.info.uid },
      });
    }
    this.setState({
      visible: true,
    });
  }

  // 弹窗取消
  handleCancel() {
    this.setState({
      visible: false,
    });
    this.props.form.resetFields();
  }

  // 弹窗确定
  handleOK() {
    const { type } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('form', values);
        const params = {
          isMale: values.isMale ? true : false,
          name: values.name,
          age: values.age,
          address: values.address,
        };
        if (type === 'create') {
          // 新建
          params.success = () => {
            message.success('新建成功!');
          };
          this.props.dispatch({
            type: 'users/create',
            payload: params,
          });
        } else {
          // 编辑
          params.success = () => {
            message.success('修改成功!');
          };
          this.props.dispatch({
            type: 'users/modify',
            payload: params,
          });
        }
        this.setState({
          visible: false,
        });
        this.props.form.resetFields();
      }
    });
  }

  getInitialValue(id) {
    const { type, detail } = this.props;
    if (type === 'create') {
      // 新建除 isMale 全部为空
      if (id === 'isMale') {
        return 1;
      } else return '';
    } else {
      // 编辑
      switch (id) {
        case 'isMale': {
          return isMale(detail);
        }
        case 'name': {
          return detail ? detail.name : '';
        }
        case 'age': {
          return detail ? detail.age : '';
        }
        case 'address': {
          return detail ? detail.address : '';
        }
        default: { return null; }
      }
    }
  }

  render() {
    const { visible } = this.state;
    const { type } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        {
          type === 'create' ? <Button
            onClick={this.handleShow.bind(this)}
            type="primary"
          >添加联系人</Button> : <a
            className="col-center"
            onClick={this.handleShow.bind(this)}
          >编辑</a>
        }
        <Modal
          visible={visible}
          title="表单"
          onCancel={this.handleCancel.bind(this)}
          onOk={this.handleOK.bind(this)}
        >
          <Form>
            <FormItem label="性别" {...layout}>
              {getFieldDecorator('isMale', {
                initialValue: this.getInitialValue('isMale'),
              })(
                <RadioGroup>
                  <Radio value={1}>男</Radio>
                  <Radio value={0}>女</Radio>
                </RadioGroup>,
              )}
            </FormItem>
            <FormItem label="姓名" {...layout}>
              {getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入联系人姓名!' }],
                initialValue: this.getInitialValue('name'),
              })(
                <Input />,
              )}
            </FormItem>
            <FormItem label="年龄" {...layout}>
              {getFieldDecorator('age', {
                rules: [{ required: true, message: '请输入联系人年龄!' }],
                initialValue: this.getInitialValue('age'),
              })(
                <Input />,
              )}
            </FormItem>
            <FormItem label="住址" {...layout}>
              {getFieldDecorator('address', {
                rules: [{ required: true, message: '请输入联系人住址!' }],
                initialValue: this.getInitialValue('address'),
              })(
                <Input />,
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.users,
  };
}

export default connect(mapStateToProps)(Form.create()(UserModalButton));
