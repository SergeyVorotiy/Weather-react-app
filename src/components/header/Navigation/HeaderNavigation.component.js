import React from "react";


function HeaderNavigation(props) {
    const navButtonStylesClass = "btn btn-dark nav-item text-white"
    return (
        <nav className="navbar navbar-nav d-flex flex-row justify-content-around">
            <button id="nowModeButton"
                    className={(props.activeMode === 'NowMode') ?
                        navButtonStylesClass + " active" :
                        navButtonStylesClass}
                    onClick={() => props.onClick("NowMode")}
            >Сейчас</button>
            <button id="dayModeButton"
                    className={(props.activeMode === 'DayMode') ?
                        navButtonStylesClass + " active" :
                        navButtonStylesClass}
                    onClick={() => props.onClick("DayMode")}
            >Два Дня</button>
            <button id="weakModeButton"
                    className={(props.activeMode === 'WeakMode') ?
                        navButtonStylesClass + " active" :
                        navButtonStylesClass}
                    onClick={() => props.onClick("WeakMode")}
            >Неделя</button>
        </nav>
    )
}

export default HeaderNavigation;