import React,{ Component } from 'react';
import { Button,Table,Row,Col} from 'antd';
import { connect } from 'dva';


class UserList extends Component{ 

  componentDidMount(){ 
    console.log('did mount');
    this.props.dispatch({ 
      type:'userList/query'
    })
  }

  handleEdit(record){ 
    console.log('edit---',record);
  }

  handleDelete(record){ 
    console.log('delete---',record);
  }

  render(){ 
    const { data,invalid,loading } = this.props;
    console.log('loading',loading);
    const dataSource = [];

    const columns = [
    {
      title: 'uid',
      dataIndex: 'uid',
      key: 'uid',
    },{
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    }, {
      title: '性别',
      dataIndex: 'sexual',
      key: 'sexual',
    },{
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },{
      title : '操作',
      width : '20%',
      render: (record)=>{ 
                return(
                  <Row justify='space-between'>
                    <Col span={12}>
                      <a href="javascript:;"
                         className='col-center'
                         onClick={this.handleEdit.bind(this,record)}>编辑</a>
                    </Col>
                    <Col span={12}>
                      <a href="javascript:;"
                         className='col-center'
                         onClick={this.handleDelete.bind(this,record)}>删除</a>
                    </Col>
                  </Row>                   
                );
              } 
    }];

    const pagination = { 
      size : 'small',
      showSizeChanger:true,
      showQuickJumper:true 
    }

    console.log('this.props',this.props);

    return( 
      <div className='page-content'>
        <Table dataSource={data} 
               loading={loading}
               columns={columns} 
               rowKey={record=>record.uid}
               pagination={ pagination }/>
      </div>
    );
  }
}

function mapStateToProps(state){ 
  return { 
    ...state.userList
  }
}

export default connect(mapStateToProps)(UserList);