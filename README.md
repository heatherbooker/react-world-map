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

### to use:
```
git clone https://github.com/heatherbooker/clickable-svg-map.git
cd clickable-svg-map
npm install
npm start
xdg-open https://localhost:8080
```
above steps are for development - to simply build, instead of running the last two lines, simply run `npm build`

#### Soon to be available on npm!

Please feel free to fork and PR if you think you have developed something useful!
