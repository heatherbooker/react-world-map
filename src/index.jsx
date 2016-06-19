var React = require('react');
var ReactDOM = require('react-dom');
var MapPage = require('./MapPage.jsx');
require("./styles.scss");


class ClickableMap extends React.Component {
  render() {
    return (
      <MapPage />
    );
  }
}

module.exports = ClickableMap;

ReactDOM.render(
  <ClickableMap />,
  document.getElementById('react-app')
);
