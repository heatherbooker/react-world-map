## Clickable world map

- click on an area to select it (_approx. continents_)
- selecting it will change the className-->change the color
- uses React
- built of SVG paths

#### [Click here for demo!](https://heatherbooker.github.io/clickable-svg-map/)
### to use:
```
npm install react-world-map --save
```
#### then in your `index.jsx` or `main.jsx`:
```
var React = require('react');
var ReactDOM = require('react-dom');
//import react-world-map
var WorldMap = require('react-world-map');

var YourMainComponent = React.createClass({
  render: function() {
    return (
      //your other components
      <WorldMap />
    )
  }
})

ReactDOM.render(
  <YourMainComponent />,
  document.getElementById('react-app')
)
```
### make sure to set your css to target the map: 
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

(If you are on npm, you can find source code (pre-babel-compilation) on [github](https://github.com/heatherbooker/clickable-svg-map))

Please feel free to fork and PR if you think you have developed something useful!

license: **WTFPL**
