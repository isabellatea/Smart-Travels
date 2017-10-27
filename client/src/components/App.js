import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.css';
import { Affix } from 'antd';
import Nav from './Nav';
import { Carousel, Card, Col, Row } from 'antd';

class App extends React.Component {
  render() {
	return (
	  <div>
	    <Affix>
		    <div className='navbg'>
		    <Nav />
		    </div>
	    </Affix>
	    <section className="getStarted">
	    <h1>get Started searching here</h1>
	    </section>
	    <section className="howItWorks">
	      <div className="cardHolder">
	      <h1>How It Works</h1>
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
	    </section>
	    <section className="cityGrid">
	    <h1>cool grid of cities</h1>
	    </section>
	    <footer>
	    Some footer stuff
	    </footer>
	    
	  </div>
	)
  }
}

export default App;