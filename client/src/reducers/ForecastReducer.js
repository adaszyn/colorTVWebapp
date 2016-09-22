export const ForecastReducer = (state = {location: {}, temperature: "", forecast: []}, action) => {
    switch (action.type) {
      case "LOAD_FORECAST":
        return action.forecast;
      case "CLEAN_FORECAST":
        return {location: {}, temperature: "", forecast: []}
      default:
        return state;
    }
}
