var mapClickReducer = function (state = {}, action) {
  switch (action.type) {
    case 'CLICKED_MAP':
      return mapClickLogic(state, action.area);
    default:
      return state;
  }
}

var mapClickLogic = function (state, area) {
  if (state.clicked === area) {
    return {clicked: 'none'};
  } else {
    return {clicked: area};
  }
}

module.exports = mapClickReducer;
