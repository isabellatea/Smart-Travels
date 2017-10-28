import React, { Component } from 'react';
import { Collapse } from 'antd';
const Panel = Collapse.Panel;


const customPanelStyle = {
  background: '#fff',
  borderRadius: 4,
  marginBottom: 15,
  border: 0,
  overflow: 'hidden',
};



const Explore = function() {
  return (
    <div className='cityGridContainer'>
      <h1>Explore</h1>
      <h3>Need some inispiration? Check out a few of our favorite itineraries!</h3>

      <Collapse accordion bordered={false} >
        <Panel header="San Francisco, California" key="1" style={customPanelStyle}>
          <img src="https://cache-graphicslib.viator.com/graphicslib/thumbs360x240/2660/SITours/san-francisco-deluxe-half-day-city-tour-in-san-francisco-117240.jpg" />
        </Panel>
        <Panel header="New York City, New York" key="2" style={customPanelStyle}>
          <p>Stuff about city</p>
        </Panel>
        <Panel header="Houston, Texas" key="3" style={customPanelStyle}>
          <p>Stuff about city</p>
        </Panel>
      </Collapse>
    </div>
  )
}

export default Explore;
