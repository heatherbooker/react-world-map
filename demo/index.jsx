var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;
//import react-world-map
var ClickableMap = require('../src/WorldMap.jsx');
var mapClickReducer = require('../src/mapClickReducer.jsx');


var YourMainComponent = React.createClass({
  render: function() {
    return (
      <ClickableMap />
    )
  }
})

//create store for redux
var store = createStore(mapClickReducer)

ReactDOM.render(
  <Provider store={store}>
    <YourMainComponent />
  </Provider>,
  document.getElementById('react-app')
)