var React = require('react');
var ReactDOM = require('react-dom');
var WorldMap = require('./WorldMap.jsx');
require("./styles.scss");
import { Provider } from 'react-redux'
import { createStore } from 'redux'



var mapClickReducer = function (state = {}, action) {
  switch (action.type) {
    case 'CLICKED_MAP':
      return mapClickLogic(state, action.area);
    default:
      return state;
  }
}

var mapClickLogic = function (state, area) {
  if (state.clicked === area) {
    return {clicked: 'none'};
  } else {
    return {clicked: area};
  }
}

var store = createStore(mapClickReducer)


ReactDOM.render(
  <Provider store={store}>
    <WorldMap />
  </Provider>,
  document.getElementById('react-app')
);
