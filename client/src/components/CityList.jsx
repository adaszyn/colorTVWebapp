import React from "react";

export class CityList extends React.Component {
    submitButton() {
      this.props.submitCity();
    }
    render() {
        return (
            <div className="b-citylist">
                <select onChange={this.props.changeCity} className="b-citylist__listbox">
                    {this.props.cities.map((city) =>
                      <option className="b-citylist__listelement" key={city.code} value={city.code}>
                        {city.name}
                    </option>)}
                </select>
                <button onClick={this.props.submitCity}
                   className="b-citylist__submit">GO!</button>
            </div>
        );
    }
}
