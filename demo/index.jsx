var React = require('react');
var ReactDOM = require('react-dom');
//import react-world-map
var WorldMap = require('../build/WorldMap.js');


var YourMainComponent = React.createClass({
  render: function() {
    return (
      <WorldMap />
    )
  }
})

window.addEventListener('WorldMapClicked', function(e) {console.log('map was clicked, current selection is: ', e.detail.clickedState)});

ReactDOM.render(
  <WorldMap />,
  document.getElementById('react-app')
)