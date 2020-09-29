var React = require('react');
var ReactDOM = require('react-dom');
//import react-world-map
var WorldMap = require('../dist/index.js');


function YourMainComponent() {
  const [selected, setSelected] = React.useState(null);

  return (
    <>
      <h1> The Clickity-Clickable World Map </h1>
      <WorldMap selected={selected} onSelect={setSelected} />
    </>
  );
}

ReactDOM.render(
  <YourMainComponent />,
  document.getElementById('react-app')
)
