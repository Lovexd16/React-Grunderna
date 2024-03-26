import React, { Component } from "react";
import Greeting from "../greeting/greeting";

class Main extends Component {
    render() {
        return (
            <div>
                <Greeting username={"Jimmy"}/>
                <Greeting username={"Love"}/>
                <Greeting username={"Johan"}/>
                <Greeting username={"Fanny"}/>
                <Greeting username={"Maria"}/>
            </div>
        )
    
    }
}
export default Main;