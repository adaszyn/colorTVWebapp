import React, {Component} from "react";
import {CityList} from "./components/CityList";
import {Provider} from "react-redux";
import {CityListContainer} from "./containers/CityListContainer";
import WeatherAppStore from "./store/WeatherAppStore";
import {ForecastContainer} from "./containers/ForecastContainer";
import {loadForecastAction} from "./actions/LoadForecastAction";

export default class App extends Component {
    componentDidMount() {

        fetch('/cities/').then(function(response) {
            return response.json()
        }).then(function(json) {
            WeatherAppStore.dispatch({type: "LOAD_CITIES", cities: json});
            WeatherAppStore.dispatch(loadForecastAction());
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })

    }
    render() {
        return (
            <Provider store={WeatherAppStore}>
                <div className="b-forecastApp">
                  <div className="b-background"></div>
                  <h1 className="b-logo">Simple<span style={{color: "darkgreen"}}>Forecast</span>WebApp </h1>
                  <h4 className="b-tip">(Please select one city and submit it by clicking 'GO!')</h4>
                  <CityListContainer/>
                    <hr className="b-forecastApp__hline"/>
                    <ForecastContainer/>
                </div>
            </Provider>
        );
    }

}
