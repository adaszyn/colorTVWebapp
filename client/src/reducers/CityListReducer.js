const getCityByCode = (cities, code) => {
  return cities.filter((city) => city.code === code)[0];
}

export const CityListReducer = (state = {all: [], selected: {}}, action) => {
    switch (action.type) {
      case "LOAD_CITIES":
        return Object.assign({}, state, {all: action.cities, selected: action.cities[0]});
      case "SELECT_CITY":
        return Object.assign({}, state,
           {selected: getCityByCode(state.all, action.code)});
      default:
        return state;
    }
}
