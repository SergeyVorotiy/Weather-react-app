import React from "react";


function CitySelectItems(props) {
    return (
        props.citiesList.map(city =>
            <option key={city.id}>{city.name}</option>
        )
    )
}

export default CitySelectItems;