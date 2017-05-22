import React,{ Component } from 'react';
import { Button,Table,Row,Col} from 'antd';
import UserTable from './UserTable'; 
const UserList = (props)=>{ 
  return( 
    <Row>
      <Col span={24}>
        <div style={{paddingLeft:20,paddingTop:15}}>
          <Button type='primary'>添加联系人</Button>
        </div>
      </Col>
      <Col span={24}>
        <UserTable />
      </Col>
    </Row>
  );
}

export default UserList;