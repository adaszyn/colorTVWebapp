export function loadForecastAction() {
    return (dispatch, getState) => {
        let state = getState();
        dispatch({type: "CLEAN_FORECAST"});
        dispatch({type: "SUBMIT_CITY"});
        const code = state.cities.selected.code;
        if (!code) {
          return;
        }
        fetch(`/forecast/${code}`).then(function(response) {
            return response.json()
        }).then(function(json) {
          dispatch({type: "LOAD_FORECAST", forecast: json});
        }).catch(function(ex) {
            console.error('parsing failed', ex)
        })
    }
}
