const React = require('react');
const ReactDOM = require('react-dom');
// import react-world-map
const WorldMap = require('../dist/index.js');

const codeStyle = { marginLeft: '20px', border: '1px solid grey', padding: '10px', width: '40%' };

function YourMainComponent() {
  const [selected, setSelected] = React.useState('sa');

  return (
    <>
      <h1> react world map </h1>

      <h2> example 1: controlled component </h2>
      <WorldMap selected={selected} onSelect={setSelected} />
      <pre style={ codeStyle }>{
`<WorldMap
  selected="sa"
  onSelect={ (continentCode) => setSelected(continentCode) }
/>`}
      </pre>

      <h2> example 2: uncontrolled component; allow multiple selections </h2>
      <WorldMap multiple={ true } />
      <pre style={ codeStyle }>{
`<WorldMap
  multiple={ true }
/>`}
      </pre>

      <a href="https://github.com/heatherbooker/react-world-map">Back to Github</a>
    </>
  );
}

ReactDOM.render(
  <YourMainComponent />,
  document.getElementById('react-app')
);
