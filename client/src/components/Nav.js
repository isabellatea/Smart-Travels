import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
const { Header, Footer, Sider, Content } = Layout;
import logo from '../images/logo3.png';


const Nav = function() {
  return (
    <div className='nav'>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
      <img src={logo} className="logo" />
        <Menu.Item key="1">Get Started</Menu.Item>
        <Menu.Item key="2">How It Works</Menu.Item>
        <Menu.Item key="3">Explore</Menu.Item>     
      </Menu>
    </div>
  )
}

export default Nav;
