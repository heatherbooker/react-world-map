var React = require('react');
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


class ClickableMap extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <WorldMap />
      </Provider>
    );
  }
}

module.exports = ClickableMap;
