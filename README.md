## SVG clickable world map

- world map made using SVG tags and React
- 3 moving parts: map, 'randomize' button that toggles with map, 'continue' button that is disabled until a selection is made
- paths are grouped into areas (_approximately continents_)
- clicking on an area:
  - fires an event
  - changes React state
  - changes map css (ie appearance)
  - unclicks all other areas
  - enables 'continue' button
- uses jsx & ES6 (and webpack & babel to compile)

#### Soon to be available on npm!

Please feel free to fork and PR if you think you have developed something useful!
