import React from 'react';
import { Menu, Icon } from 'antd';
import { hashHistory } from 'react-router';

const MenuGroup = () => {
  const data = [
    {
      title: 'Users',
      icon: 'user',
      route: 'user',
    },
    {
      title: 'Form',
      icon: 'line-chart',
      route: 'form',
    },
    {
      title: 'Tool',
      icon: 'tool',
      route: 'tool',
    },
  ];

  const children = [];
  data.map((item, index) => {
    children.push(
      <Menu.Item key={index}>
        <Icon type={item.icon} />
        <span>{item.title}</span>
      </Menu.Item>);
  });

  function handleClick({ item, key, keyPath }) {
    hashHistory.push(`/${data[key].route}`);
  }

  return (
    <Menu
      theme="dark"
      mode="inline"
      onClick={handleClick.bind(this)}
    >{children}</Menu>
  );
};

export default MenuGroup;
