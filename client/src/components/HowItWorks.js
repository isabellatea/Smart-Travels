import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';


const HowItWorks = function() {
  return (
    <div className="howItWorksContainer">
      <h1><a name="howItWorks">How It Works</a></h1>
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <div className="custom-image">
                <img alt="example" width="100%" src="http://i66.tinypic.com/ouv7n5.png" />
              </div>
              <div className="custom-card">
                <h2>Location and Budget</h2>
                <p>Tell us where you're going and what your budget is!</p>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <div className="custom-image">
                <img alt="example" width="100%" src="http://i63.tinypic.com/290saih.png" />
              </div>
              <div className="custom-card">
                <h2>Customize</h2>
                <p>Select from an array of possible options within your budget. Customize every step!</p>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <div className="custom-image">
                <img alt="example" width="100%" src="http://i63.tinypic.com/r0yzas.png" />
              </div>
              <div className="custom-card">
                <h2>View Itinerary</h2>
                <p>See your amazing itinerary created and magically all ready for you!</p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
  )
}

export default HowItWorks;
