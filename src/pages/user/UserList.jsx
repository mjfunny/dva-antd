import React from 'react';
import { Row, Col } from 'antd';
import UserTable from './UserTable';
import UserModalButton from './UserModalButton';

const UserList = () => {
  return (
    <Row>
      <Col span={24}>
        <div style={{ paddingLeft: 20, paddingTop: 15 }}>
          <UserModalButton
            title="添加联系人"
          />
        </div>
      </Col>
      <Col span={24}>
        <UserTable />
      </Col>
    </Row>
  );
};

export default UserList;
