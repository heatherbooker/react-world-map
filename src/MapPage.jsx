var React = require('react');
//require other components
var WorldMap = require('./WorldMap.jsx');
//require imgs
var randomizeImg = require('./assets/random.svg');
var randomizeImgSelected = require('./assets/random-selected.svg');


class MapPage extends React.Component {
  constructor() {
    super();
    this.questionId = Math.random().toString().slice(7);
    this.randomizeImg = randomizeImg;
    this.continueBtnClass = "map-btn-disabled";
    this.state = { randomizeSelected: false, mapSelected: false };
  }
  componentDidMount() {
    //create event to dispatch when randomize button is clicked, to alert map
    this.randomizeClickEvent = new Event('onRandomizeClick');
    //listening to all map components
    window.addEventListener('onMapSelect', () => {
      this.toggleSelectedState('mapOn');
    });
    window.addEventListener('onMapUnselect', () => {
      this.toggleSelectedState('mapOff');
    });
  }
  onRandomizeClick() {
    window.dispatchEvent(this.randomizeClickEvent);
    this.toggleSelectedState();
  }
  toggleSelectedState(mapState) {
    this.setState(
      function() {
        const newState = { randomizeSelected: false, mapSelected: false };
        if (mapState === 'mapOn') {
          newState.mapSelected = true;
          this.enableButton(true);
          if (this.state.randomizeSelected) {
          }
        } else if (mapState === 'mapOff') {
          this.enableButton(false);
        } else if (!this.state.randomizeSelected) {
          newState.randomizeSelected = true;
          this.enableButton(true);
        } else {
          this.enableButton(false);
        }
        return newState;
      }, this.toggleColour.bind(this)
    );
  }
  toggleColour() {
    //toggle which randomize image will be shown (different colours)
    if (this.state.randomizeSelected) {
      this.randomizeImg = randomizeImgSelected;
    } else {
      this.randomizeImg = randomizeImg;
    }
    this.forceUpdate();
  }
  enableButton(enable) {
    if (enable) {
      this.continueBtnClass = 'map-btn-proceed';
    } else {
      this.continueBtnClass = 'map-btn-disabled';
    }
  }
  render() {
    return (
      <div>
        <WorldMap />
        <img className="map-random" src={this.randomizeImg} onClick={this.onRandomizeClick.bind(this)} />
        <div className={`${this.continueBtnClass} map-continue-btn`}>
          <a href="#">
            <span>Continue</span>
          </a>
        </div>
      </div>
    );
  }
}

module.exports = MapPage;

//{`question/${this.category}/anArea/${this.questionId}`}