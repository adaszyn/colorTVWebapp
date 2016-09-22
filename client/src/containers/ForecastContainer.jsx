import { connect } from "react-redux"
import {Forecast} from "../components/Forecast";

const mapStateToProps = (state) => {
  const location = state.forecast.location;
  const forecast = state.forecast.forecast;
  const atmosphere = state.forecast.atmosphere;

  return {
    city: location.city,
    country: location.country,
    region: location.region,
    forecast,
    atmosphere
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export const ForecastContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Forecast)

export default ForecastContainer
