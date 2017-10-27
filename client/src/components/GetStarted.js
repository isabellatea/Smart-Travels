import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;
import { Radio } from 'antd';
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
import { Tabs } from 'antd';
const TabPane = Tabs.TabPane;
import moment from 'moment';
const dateFormat = 'MM/DD/YYYY';
const monthFormat = 'YYYY/MM';
import { Input, Select, InputNumber, AutoComplete, Cascader } from 'antd';
const InputGroup = Input.Group;
const Option = Select.Option;

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
      <h1>Plan a full trip itinerary on a budget. </h1>
        <div className="card-container">
          <Tabs type="card">
            <TabPane tab="Round Trip" key="1">
              <form>
              <Input style={{width: '15%'}} placeholder="from where?" />
              <Input style={{width: '15%'}} placeholder="to where?" />
              <RangePicker style={{width: '40%'}} format={dateFormat}/>
              <Input  style={{width: '15%'}} placeholder="how many people?" />
              <button className='goButton'>Go!</button>
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
