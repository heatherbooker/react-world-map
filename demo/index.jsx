var React = require('react');
var ReactDOM = require('react-dom');
//import react-world-map
var WorldMap = require('../dist/index.js');


class YourMainComponent extends React.Component {
  render() {
    return (
      <>
        <h1> The Clickity-Clickable World Map </h1>
        <WorldMap />
      </>
    )
  }
}

window.addEventListener('WorldMapClicked', function(e) {console.log('map was clicked, current selection is: ', e.detail.clickedState)});

ReactDOM.render(
  <YourMainComponent />,
  document.getElementById('react-app')
)
