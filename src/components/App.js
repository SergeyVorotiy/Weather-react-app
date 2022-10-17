import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import HeaderComponent from "./header/Header.component";
import MainComponent from "./main/Main.component";
import FooterComponent from "./footer/Footer.component";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeMode: "DayMode",
        };
    }

    handleClick(mode){
        this.setState({
            activeMode: mode,
        })
    }

    render() {
        return (
            <>
                <HeaderComponent activeMode={this.state.activeMode} handleClick={(mode) => this.handleClick(mode)}/>
                <MainComponent activeMode={this.state.activeMode}/>
                <FooterComponent />
            </>
        )
    }
}

export default App;