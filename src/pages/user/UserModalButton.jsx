import React, { Component } from 'react';
import { Button, Modal, Form } from 'antd';
import { connect } from 'dva';

class UserModalButton extends Component {

  // 点击弹窗
  handleShow() {
    this.props.dispatch({
      type: 'users/toggleVisible',
    });
  }

  // 弹窗取消
  handleCancel() {
    this.props.dispatch({
      type: 'users/toggleVisible',
    });
  }

  // 弹窗确定
  handleOK() {
    this.props.dispatch({
      type: 'users/addUser',
    });
  }

  render() {
    const { title, visible } = this.props;
    return (
      <div>
        <Button
          onClick={this.handleShow.bind(this)}
          type="primary"
        >{title}</Button>
        <Modal
          visible={visible}
          onCancel={this.handleCancel.bind(this)}
          onOk={this.handleOK.bind(this)}
        >
          <Form></Form>
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

export default connect(mapStateToProps)(UserModalButton);
