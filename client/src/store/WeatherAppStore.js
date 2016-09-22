import React, { PropTypes } from "react";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware , compose} from "redux";
import {CityListReducer} from "../reducers/CityListReducer";
import {ForecastReducer} from "../reducers/ForecastReducer";
import thunk from 'redux-thunk';
export default createStore(combineReducers({
  cities: CityListReducer,
  forecast: ForecastReducer
}),undefined,
    compose(
    applyMiddleware(thunk),
    window['devToolsExtension'] ? window['devToolsExtension']() : f => f)
  )
