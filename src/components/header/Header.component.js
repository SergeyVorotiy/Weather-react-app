import React from "react";
import HeaderNavigation from "./Navigation/HeaderNavigation.component";

import "./Header.component.css";


function HeaderComponent(props){
    return (
        <header className="header container bg-dark text-white d-flex justify-content-between align-items-center">
            <div className="logo"><h4>Погода</h4></div>
            <HeaderNavigation activeMode={props.activeMode} onClick={mode => props.handleClick(mode)}/>
        </header>
    )
}

export default HeaderComponent;