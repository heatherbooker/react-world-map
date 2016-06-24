var React = require('react');
var ReactDOM = require('react-dom');
//import react-world-map
var ClickableMap = require('../src/WorldMap.jsx');


var YourMainComponent = React.createClass({
  render: function() {
    return (
      <ClickableMap />
    )
  }
})


ReactDOM.render(
  <YourMainComponent />,
  document.getElementById('react-app')
)