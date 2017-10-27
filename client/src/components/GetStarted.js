import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;
import { Radio } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
import { Tabs, Icon } from 'antd';
const TabPane = Tabs.TabPane;
import moment from 'moment';
const dateFormat = 'MM/DD/YYYY';
const monthFormat = 'YYYY/MM';
import { Input, Select, InputNumber, AutoComplete, Cascader } from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;
import { Collapse } from 'antd';
const Panel = Collapse.Panel;
import { Slider, Switch } from 'antd';


const customPanelStyle = {
  background: '#f7f7f7',
  borderRadius: 4,
  marginBottom: 24,
  border: 0,
  overflow: 'hidden',
};


class GetStarted extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  //functions here


  render() {
    return (

    <div className='getStartedContainer'>
      <h1>Get a full trip itinerary within your budget. </h1>
        <div className="card-container">
          <Tabs type="card">
            <TabPane tab="Round Trip" key="1">
              <form>
              <Row gutter={8}>
                <Col span={17} > 
                  <Input style={{width: '20%'}} placeholder="from where?" />
                  <Input style={{width: '20%'}} placeholder="to where?" />
                  <RangePicker style={{width: '50%'}} format={dateFormat}/> 
                </Col>
                <Col span={5} > 
                  <div className="slider">              
                  <Slider min={0} max={2000} defaultValue={0} />
                  </div>    
                </Col>
                <Col span={2} >
                  <button className='goButton'>Go!</button>
                </Col>
              </Row>

              <div className='advancedOptions'>
                <Collapse bordered={false}>
                  <Panel header="Advanced Options" key="1" style={customPanelStyle}>
                    <Row gutter={8}>
                    <InputGroup>
                    <Col span={8} >
                    <h3> Flight: </h3> 
                      <Select defaultValue="Time Of Day">
                        <Option value="Option2-0">No Preference</Option>
                        <Option value="Option2-1">Early Morning</Option>
                        <Option value="Option2-2">Morning</Option>
                        <Option value="Option2-3">Afternoon</Option>
                        <Option value="Option2-4">Evening</Option>
                        <Option value="Option2-5">Late Evening</Option>
                      </Select>
                    </Col>
                    <Col span={8} >
                      <h3> Hotel: </h3>
                      <Select defaultValue="Rating">
                        <Option value="Option1-0">No Preference</Option>
                        <Option value="Option1-1"><Icon type="star" />+</Option>
                        <Option value="Option1-2"><Icon type="star" /><Icon type="star" />+</Option>
                        <Option value="Option1-3"><Icon type="star" /><Icon type="star" /><Icon type="star" />+</Option>
                        <Option value="Option1-4"><Icon type="star" /><Icon type="star" /><Icon type="star" /><Icon type="star" />+</Option>
                        <Option value="Option1-5"><Icon type="star" /><Icon type="star" /><Icon type="star" /><Icon type="star" /><Icon type="star" /></Option>
                      </Select>
                      <Select defaultValue="Type">
                        <Option value="Option1-0">No Preference</Option>
                        <Option value="Option1-1"><Icon type="star" />+</Option>
                        <Option value="Option1-2"><Icon type="star" /><Icon type="star" />+</Option>
                        <Option value="Option1-3"><Icon type="star" /><Icon type="star" /><Icon type="star" />+</Option>
                        <Option value="Option1-4"><Icon type="star" /><Icon type="star" /><Icon type="star" /><Icon type="star" />+</Option>
                        <Option value="Option1-5"><Icon type="star" /><Icon type="star" /><Icon type="star" /><Icon type="star" /><Icon type="star" /></Option>
                      </Select>
                    </Col>
                    <Col span={8} >
                      <h3> Food/Activities: </h3>
                      <Select defaultValue="Rating">
                        <Option value="Option1-0">No Preference</Option>
                        <Option value="Option3-1"><Icon type="star" />+</Option>
                        <Option value="Option3-2"><Icon type="star" /><Icon type="star" />+</Option>
                        <Option value="Option3-3"><Icon type="star" /><Icon type="star" /><Icon type="star" />+</Option>
                        <Option value="Option3-4"><Icon type="star" /><Icon type="star" /><Icon type="star" /><Icon type="star" />+</Option>
                        <Option value="Option3-5"><Icon type="star" /><Icon type="star" /><Icon type="star" /><Icon type="star" /><Icon type="star" /></Option>
                      </Select>
                    </Col>
                    </InputGroup>
                    </Row>
                  </Panel>
                </Collapse>
              </div>
              
              </form>
            </TabPane>

            <TabPane tab="One Way" key="2">
              <form>
              <Input style={{width: '15%'}} placeholder="from where?" />
              <Input style={{width: '15%'}} placeholder="to where?" />
              <DatePicker format={dateFormat} />
              <Input style={{width: '15%'}} placeholder="how many people?" />
              <button className='goButton'>Go!</button>
              </form>
            </TabPane>
          </Tabs>
        </div>
    </div>

    )
  }
}

export default GetStarted;
