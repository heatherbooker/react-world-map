## Clickable world map

- click on an area to select it (_approx. continents_)
- selecting it will change the className-->change the color
- uses React & redux
- built of SVG components

### to use:
```
npm install react-world-map --save
```
#### then in your `index.jsx` or `main.jsx`:
```
var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;
var createStore = require('redux').createStore;
//import react-world-map
var ClickableMap = require('../src/WorldMap.jsx');
var mapClickReducer = require('../src/mapClickReducer.jsx');
//use your own styles
require("../src/styles.scss");


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
```
### css: 
```css
.map-selected {
  fill: #E3DA37;
}

.map-unselected {
  fill: #699EAA;
}

.map-selected:hover, .map-unselected:hover {
  cursor: pointer;
}
```
### and in `index/html`:
```html
<script type="text/javascript" src="../build/index.js"></script>
```

If you are on npm, you can find source code (pre-compilation by webpack using babel, React, and ES6) on [github](https://github.com/heatherbooker/clickable-svg-map)

Please feel free to fork and PR if you think you have developed something useful!

license: **WTFPL**
