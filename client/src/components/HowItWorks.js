import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import options from '../images/options.png';
import plane from '../images/plane.png';
import list from '../images/list.png';


const HowItWorks = function() {
  return (
    <div className="howItWorksContainer">
      <h1>How It Works</h1>
      <h3>Based on your budget, we'll provide a full itinerary of a flight, hotel, activities and places to eat! </h3>
        <Row gutter={16}>
          <Col span={8}>
            <Card>
              <div className="custom-image">
                <img alt="example" width="100%" src={plane} />
              </div>
              <div className="custom-card">
                <h2>Location and Budget</h2>
                <p>Tell us where you're going and what your budget is! Through your account, input your preferences for more personalized itineraries!</p>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <div className="custom-image">
                <img alt="example" width="100%" src={options} />
              </div>
              <div className="custom-card">
                <h2>Customize</h2>
                <p>We'll provide you with an amazing itinerary! Customize from there for your perfect trip!</p>
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <Card>
              <div className="custom-image">
                <img alt="example" width="100%" src={list} />
              </div>
              <div className="custom-card">
                <h2>View Itinerary</h2>
                <p>View your final itinerary all ready for you and always available on your account!</p>
              </div>
            </Card>
          </Col>
        </Row>
      </div>
  )
}

export default HowItWorks;
