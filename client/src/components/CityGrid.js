import React, { Component } from 'react';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;

const text = 
  // <img src='https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2660/SITours/san-francisco-deluxe-half-day-city-tour-in-san-francisco-117240.jpg' /> 
  `A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const customPanelStyle = {
  background: '#fff',
  borderRadius: 4,
  marginBottom: 15,
  border: 0,
  overflow: 'hidden',
};



const CityGrid = function() {
  return (
    <div className='cityGridContainer'>
      <h1>Explore</h1>
      <h3>Need some inispiration? Check out a few of our favorite itineraries!</h3>

      <Collapse accordion bordered={false} >
        <Panel header={ <img src="https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2660/SITours/san-francisco-deluxe-half-day-city-tour-in-san-francisco-117240.jpg" />, "San Francisco, CA" } key="1" style={customPanelStyle}>
          <p>{text}</p>
        </Panel>
        <Panel header="New York City, New York" key="2" style={customPanelStyle}>
          <p>{text}</p>
        </Panel>
        <Panel header="Houston, Texas" key="3" style={customPanelStyle}>
          <p>{text}</p>
        </Panel>
      </Collapse>
    </div>
  )
}

export default CityGrid;
