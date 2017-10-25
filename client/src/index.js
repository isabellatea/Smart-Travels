var React = require('react');
var ReactDOM = require('react-dom');
require('./css/style.css');

class App extends React.Component {
    render() {
        return (
            <div>Hello World!</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));