import React from "react";


function CityChoice(props) {
    return (
        <select name="cities" id="citychoice" >
            {props.citiesList.map(city => <option key={city.id} onSelect={() => props.handleSelect(city.id)}>{city.name}</option>)}
        </select>
    )
}

export default CityChoice;