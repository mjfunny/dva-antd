import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import MenuGroup from './MenuGroup';
import styles from './MainLayout.less';

const { Header, Content, Sider } = Layout;

class MainLayout extends Component {
  render() {
    return (
      <Layout className={styles.layout}>
        <Sider>
          <div className={styles.logo}>
            <Icon type="github" />
            <span className={styles.title}>Menu</span>
          </div>
          <MenuGroup />
        </Sider>
        <Layout>
          <Header className={styles.header}>header</Header>
          <Content className={styles.content}>
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default MainLayout;
