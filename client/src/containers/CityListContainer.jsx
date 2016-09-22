import { connect } from "react-redux"
import {CityList} from "../components/CityList";
import {loadForecastAction} from "../actions/LoadForecastAction";

const mapStateToProps = (state) => {
  return {
    cities: state.cities.all,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeCity: (event) => {
      dispatch({type: "SELECT_CITY", code: event.target.value});
    },
    submitCity: (newValue) => dispatch(loadForecastAction())
  }
}

export const CityListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CityList)

export default CityListContainer
