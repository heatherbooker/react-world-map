var React = require('react');
var ReactDOM = require('react-dom');
//import react-world-map
var WorldMap = require('../build/index.js');


var YourMainComponent = React.createClass({
  render: function() {
    return (
      <WorldMap />
    )
  }
})


ReactDOM.render(
  <WorldMap />,
  document.getElementById('react-app')
)