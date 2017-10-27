import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import { Layout, Menu } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
import { Steps, Icon } from 'antd';
const Step = Steps.Step;


class Dashboard extends React.Component {
	constructor() {
		super();
		this.state = {
      //state here
		};
	}

  //functions here

  render() {
		return (
		  <div>
        <Layout>

    <Content style={{ padding: '20px 50px' }}>
      <Steps>
		    <Step status="finish" title="Flights" icon={<Icon type="environment" />} />
		    <Step status="finish" title="Hotels" icon={<Icon type="shop" />} />
		    <Step status="process" title="Eat and Activities" icon={<Icon type="pushpin" />} />
		    <Step status="wait" title="View Itinerary" icon={<Icon type="schedule" />} />
		  </Steps>
      <Layout style={{ padding: '24px 0', background: '#fff' }}>
        <Sider width={200} style={{ background: '#fff' }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
          Content
        </Content>
        <Sider width={200} style={{ background: '#fff' }}>
          Itinerary Information
           <Steps direction="vertical" current={1}>
				    <Step title="Flights" description="This is a description." />
				    <Step title="Hotel" description="This is a description." />
				    <Step title="Eat and Activities" description="This is a description." />
				  </Steps>
        </Sider>
      </Layout>
    </Content>
  </Layout>
		  </div>
		)
  }
}

export default Dashboard;

    // <Header className="header">
    //   <div className="logo" />
    //   <Menu
    //     theme="dark"
    //     mode="horizontal"
    //     defaultSelectedKeys={['2']}
    //     style={{ lineHeight: '64px' }}
    //   >
    //     <Menu.Item key="1">nav 1</Menu.Item>
    //     <Menu.Item key="2">nav 2</Menu.Item>
    //     <Menu.Item key="3">nav 3</Menu.Item>
    //   </Menu>
    // </Header>