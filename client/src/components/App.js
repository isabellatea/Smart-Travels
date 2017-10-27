import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import { Affix } from 'antd';
import Nav from './Nav';
import HowItWorks from './HowItWorks';
import GetStarted from './GetStarted';
import CityGrid from './CityGrid';
import { Card, Col, Row } from 'antd';
import Dashboard from './Dashboard';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;


class App extends React.Component {
	constructor() {
		super();
		this.state = {
      current: 'home'
		};
	}

  //functions here

  render() {
		return (
		  <div>
		    <Affix>
			    <div className='navbg'>
			      <Nav />
			    </div>
		    </Affix>

        { this.state.current === 'home' && <div>
			    <GetStarted />
			    <HowItWorks />
			    <CityGrid />
			    </div>
		    }
		    {this.state.current === 'dashboard' && <div>
          <Dashboard />
		    </div>
		    }

		    <footer className='footer'>
		    Some footer stuff
		    </footer>
		  </div>
		)
  }
}

export default App;