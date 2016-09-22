import React from "react";

export class Forecast extends React.Component {
    getClassNameForConditionCode(code) {
        // todo: more condition codes
        switch (code) {
            case "28":
            case "29":
            case "30":
                return "wi-night-partly-cloudy";
            case "26":
            case "27":
                return "wi-day-cloudy"
            case "5":
            case "6":
            case "10":
            case "35":
                return "wi-day-rain"
            case "32":
            default:
                return "wi-day-sunny"
        }
    }

    render() {

        const forecast = this.props.forecast;
        const todaysForecast = forecast[0];
        const atmosphere = this.props.atmosphere;

        if (!todaysForecast)
            return <div className="signal"></div>;

        const high = todaysForecast
            ? todaysForecast.high
            : "";
        const low = todaysForecast
            ? todaysForecast.low
            : "";
        return (
            <div className="b-forecast">
                <div className="b-forecast__details">
                    <div className="b-forecast__details-left">
                        <i className={"b-forecast__tile__forecasticon wi " + this.getClassNameForConditionCode(todaysForecast.code)}/>
                        <h1>{this.props.city}</h1>
                    </div>
                    <div className="b-forecast__details-right">
                        <div className="b-forecast__details-temp">{high}°C / {low}°C</div>
                        <p className="b-forecast__details-prop">PRESSURE <span className="b-forecast__details-val">{atmosphere.pressure}</span></p>
                        <p className="b-forecast__details-prop">HUMIDITY <span className="b-forecast__details-val">{atmosphere.humidity}</span></p>
                        <p className="b-forecast__details-prop">VISIBILITY <span className="b-forecast__details-val">{atmosphere.visibility}</span></p>

                    </div>
                </div>

                <hr className="b-forecastApp__hline"/>

                <div className="b-forecast__tiles">
                    {forecast && forecast.splice(1, forecast.length - 1).map((entry) => <div key={entry.date} className="b-forecast__tile">
                        <i className={"b-forecast__tile__forecasticon-thumb wi " + this.getClassNameForConditionCode(entry.code)}></i>
                        <h3>{entry.date}</h3>
                        <div>{entry.high}°C / {entry.low}°C</div>
                    </div>)}
                </div>
            </div>

        );
    }
}

Forecast.propTypes = {
    city: React.PropTypes.string,
    country: React.PropTypes.string,
    region: React.PropTypes.string,
    forecast: React.PropTypes.any
};
