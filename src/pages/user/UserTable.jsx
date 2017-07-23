import React, { Component } from 'react';
import { Table, Row, Col } from 'antd';
import { connect } from 'dva';


class UserTable extends Component {

  componentDidMount() {
    this.props.dispatch({
      type: 'users/query',
    });
  }

  handleEdit(record) {
    this.props.dispatch({
      type: 'users/detail',
      payload: { id: record.uid },
    });
    console.log('edit---', record);
  }

  handleDelete(record) {
    console.log('delete---', record);
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
                <a
                  className="col-center"
                  onClick={this.handleEdit.bind(this, record)}
                >编辑</a>
              </Col>
              <Col span={12}>
                <a
                  className="col-center"
                  onClick={this.handleDelete.bind(this, record)}
                >删除</a>
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
