import React, { Component } from 'react';
import { connect } from 'dva';
import { Table, Row, Col, Popconfirm, message } from 'antd';
import UserModalButton from './UserModalButton';

class UserTable extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'users/query',
    });
  }

  handleDelete(record) {
    const params = {
      id: record.uid,
      success: () => {
        message.success('删除成功!');
      },
    };
    this.props.dispatch({
      type: 'users/delete',
      payload: params,
    });
  }

  render() {
    const { data, loading } = this.props;
    const columns = [
      {
        title: 'uid',
        dataIndex: 'uid',
        key: 'uid',
      }, {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      }, {
        title: '性别',
        dataIndex: 'isMale',
        key: 'isMale',
        render: record => (record ? '男' : '女'),
      }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      }, {
        title: '操作',
        width: '20%',
        render: (record) => {
          return (
            <Row justify="space-between">
              <Col span={12}>
                <UserModalButton
                  type="edit"
                  info={record}
                />
              </Col>
              <Col span={12}>
                <Popconfirm
                  title="确认删除该条信息吗?"
                  okText="OK"
                  cancelText="cancel"
                  onConfirm={this.handleDelete.bind(this, record)}
                >
                  <a className="col-center">删除</a>
                </Popconfirm>

              </Col>
            </Row>
          );
        },
      }];

    const pagination = {
      size: 'small',
      showSizeChanger: true,
      showQuickJumper: true,
    };
    return (
      <div className="page-content">
        <Table
          dataSource={data}
          loading={loading}
          columns={columns}
          bordered
          rowKey={record => record.uid}
          pagination={pagination}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ...state.users,
  };
}

export default connect(mapStateToProps)(UserTable);
