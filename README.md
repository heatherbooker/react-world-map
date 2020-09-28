## React clickable world map

- click on an area to select it (_approx. continents_)
- selecting it will change the className-->change the color
- uses React
- built of SVG paths

#### [Click here for demo on jsfiddle](https://jsfiddle.net/heatherbooker/xuLosv0h/)

### usage:
```
npm install react-world-map --save
```
or, [view demo on jsfiddle](https://jsfiddle.net/heatherbooker/xuLosv0h/) for example of use with cdn instead of npm

#### then in your `index.jsx` or `main.jsx` (see bottom for css):

Controlled component:
```jsx
<WorldMap selected={ 'sa' } onSelect={ (continent) => {} } />
```

Uncontrolled component:
```jsx
<WorldMap />
```

Full usage:
```jsx
const React, { useState } = require('react');
const ReactDOM = require('react-dom');
const WorldMap = require('react-world-map');

function YourMainComponent() {
  const [selected, onSelect] = useState(null);

  return (
    <>
      <h1> Hello World Map!</h1>
      <WorldMap selected={ selected } onSelect={ onSelect } />
    </>
  );
}

ReactDOM.render(
  <YourMainComponent />,
  document.getElementById('react-app')
)
```

#### Props
- `onSelect: (continentCode) => void`
- `selected: continentCode`

whereas the list of possible continents is as follows:
- `na` - North America
- `sa` - South America
- `af` - Africa
- `eu` - Europe
- `as` - Asia
- `oc` - Oceania

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
