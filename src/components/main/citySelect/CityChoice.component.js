import React from "react";
import CitySelectItems from "./CitySelectItems/CitySelectItems.component";


function CitySelect(props) {

    return (
        <select name="cities" id="citychoice" onChange={(event) => props.handleSelect(event.target.selectedIndex)}>
            <CitySelectItems citiesList={props.citiesList} onSelect={(cityId) => props.handleSelect(cityId)} />
        </select>
    )
}

export default CitySelect;