## Clickable world map

- click on an area to select it (_approx. continents_)
- selecting it will change the className-->change the color
- uses React
- built of SVG paths

#### [Click here for demo on jsfiddle](https://jsfiddle.net/heatherbooker/xuLosv0h/)
##### view on: [npm](https://www.npmjs.com/package/react-world-map) || [github](https://github.com/heatherbooker/clickable-svg-map) || [react-components](http://react-components.com/component/react-world-map)
### usage:
```
npm install react-world-map --save
```
or, [view demo on jsfiddle](https://jsfiddle.net/heatherbooker/xuLosv0h/) for example of use with cdn instead of npm
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

window.addEventListener('WorldMapClicked', function(e) {console.log('map was clicked, current selection is: ', e.detail.clickedState)});

ReactDOM.render(
  <YourMainComponent />,
  document.getElementById('react-app')
)
```
as you can see, there is an event fired when the map is clicked on, which contains the detail of which area is currently selected, codes of which are as follows:
- NA - North America
- SA - South America
- AF - Africa
- EU - Europe
- AS - Asia
- OC - Oceania  

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

Please feel free to fork and PR if you think you have developed something useful!

license: **WTFPL**
